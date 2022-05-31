package com.icec.plantcadb.utils;

import org.apache.poi.openxml4j.exceptions.OpenXML4JException;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.openxml4j.opc.PackageAccess;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.util.CellAddress;
import org.apache.poi.ss.util.CellReference;
import org.apache.poi.util.XMLHelper;
import org.apache.poi.xssf.eventusermodel.ReadOnlySharedStringsTable;
import org.apache.poi.xssf.eventusermodel.XSSFReader;
import org.apache.poi.xssf.eventusermodel.XSSFSheetXMLHandler;
import org.apache.poi.xssf.eventusermodel.XSSFSheetXMLHandler.SheetContentsHandler;
import org.apache.poi.xssf.model.SharedStrings;
import org.apache.poi.xssf.model.Styles;
import org.apache.poi.xssf.model.StylesTable;
import org.apache.poi.xssf.usermodel.XSSFComment;
import org.xml.sax.ContentHandler;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;
import org.xml.sax.XMLReader;

import javax.xml.parsers.ParserConfigurationException;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

public class XLSX2CSV {

    private class SheetToCSV implements SheetContentsHandler {
        private boolean firstCellOfRow;
        private int currentRow = -1;
        private int currentCol = -1;

        @Override
        public void startRow(int rowNum) {
            // Prepare for this row
            firstCellOfRow = true;
            currentRow = rowNum;
            currentCol = -1;
        }

        @Override
        public void endRow(int rowNum) {
            // Ensure the minimum number of columns
            for (int i = currentCol; i < minColumns; i++) {
                row.add("");
            }
            allRows.add(new ArrayList<>(row));
            row.clear();
        }

        @Override
        public void cell(String cellReference, String formattedValue, XSSFComment comment) {
            if (firstCellOfRow) {
                firstCellOfRow = false;
            }
            // gracefully handle missing CellRef here in a similar way as XSSFCell does
            if (cellReference == null) {
                cellReference = new CellAddress(currentRow, currentCol).formatAsString();
            }

            // Did we miss any cells?
            int thisCol = (new CellReference(cellReference)).getCol();
            int missedCols = thisCol - currentCol - 1;
            for (int i = 0; i < missedCols; i++) {
                row.add("");
            }
            currentCol = thisCol;
            row.add(formattedValue);
        }
    }


    private final OPCPackage xlsxPackage;

    /**
     * Number of columns to read starting with leftmost
     */
    private final int minColumns;
    private final int sheetIndex;

    private final List<List<String>> allRows = new ArrayList<>();
    private final List<String> row;

    public List<List<String>> getRows() {
        return allRows;
    }

    /**
     * Creates a new XLSX -> CSV examples
     * @param pkg        The XLSX package to process
     * @param minColumns The minimum number of columns to output, or -1 for no minimum
     */
    public XLSX2CSV(OPCPackage pkg, int minColumns, int sheetIndex) {
        this.xlsxPackage = pkg;
        this.minColumns = minColumns;
        this.row = new ArrayList<>(minColumns);
        this.sheetIndex = sheetIndex;
    }

    /**
     * Parses and shows the content of one sheet
     * using the specified styles and shared-strings tables.
     * @param styles           The table of styles that may be referenced by cells in the sheet
     * @param strings          The table of strings that may be referenced by cells in the sheet
     * @param sheetInputStream The stream to read the sheet-data from.
     * @throws java.io.IOException An IO exception from the parser,
     *                             possibly from a byte stream or character stream
     *                             supplied by the application.
     * @throws SAXException        if parsing the XML data fails.
     */
    public void processSheet(
            Styles styles,
            SharedStrings strings,
            SheetContentsHandler sheetHandler,
            InputStream sheetInputStream) throws IOException, SAXException {
        DataFormatter formatter = new DataFormatter();
        InputSource sheetSource = new InputSource(sheetInputStream);
        try {
            XMLReader sheetParser = XMLHelper.newXMLReader();
            ContentHandler handler = new XSSFSheetXMLHandler(
                    styles, null, strings, sheetHandler, formatter, false);
            sheetParser.setContentHandler(handler);
            sheetParser.parse(sheetSource);
        } catch (ParserConfigurationException e) {
            throw new RuntimeException("SAX parser appears to be broken - " + e.getMessage());
        }
    }

    /**
     * Initiates the processing of the XLS workbook file to CSV.
     * @throws IOException  If reading the data from the package fails.
     * @throws SAXException if parsing the XML data fails.
     */
    public void process() throws IOException, OpenXML4JException, SAXException {
        ReadOnlySharedStringsTable strings = new ReadOnlySharedStringsTable(this.xlsxPackage);
        XSSFReader xssfReader = new XSSFReader(this.xlsxPackage);
        StylesTable styles = xssfReader.getStylesTable();
        XSSFReader.SheetIterator iter = (XSSFReader.SheetIterator) xssfReader.getSheetsData();
        int index = 1;
        while (iter.hasNext()) {
            try (InputStream stream = iter.next()) {
                if (index++ != sheetIndex) {
                    continue;
                }
                processSheet(styles, strings, new SheetToCSV(), stream);
                if (index >= sheetIndex) {
                    break;
                }
            }
        }
    }

    /**
     * 读取 excel
     * @param file
     * @param minColumns
     * @param sheetIndex
     * @return
     * @throws IOException
     */
    public static List<List<String>> readerExcelInputStream(File file, int minColumns, int sheetIndex) throws Exception {
        try (OPCPackage p = OPCPackage.open(file, PackageAccess.READ)) {
            XLSX2CSV xlsx2csv = new XLSX2CSV(p, minColumns, sheetIndex);
            xlsx2csv.process();
            return xlsx2csv.getRows();
        }
    }
}