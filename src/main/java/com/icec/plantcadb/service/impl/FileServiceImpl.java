package com.icec.plantcadb.service.impl;

import com.icec.plantcadb.bean.*;
import com.icec.plantcadb.config.FileLocationConfig;
import com.icec.plantcadb.mapper.DatabaseMapper;
import com.icec.plantcadb.mapper.NavInfoMapper;
import com.icec.plantcadb.service.FileService;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.LineIterator;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import java.io.*;
import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.*;

@Service("FileService")
public class FileServiceImpl implements FileService {

    private final DatabaseMapper databaseMapper;
    private final NavInfoMapper navInfoMapper;

    public FileServiceImpl(DatabaseMapper databaseMapper, NavInfoMapper navInfoMapper) {
        this.databaseMapper = databaseMapper;
        this.navInfoMapper = navInfoMapper;
    }

//    public void readFileAllLines(File file) throws IOException {
//        if (file.exists()) {
//            LineIterator it = FileUtils.lineIterator(file);
//            String s;
//            int index = 0;
//            while (it.hasNext()) {
//                s = it.nextLine();
//                if (index == 0) {
//                    index++;
//                    continue;
//                }
//                else{
//
//                }
//                index++;
//            }
//            it.close();
//        }
//    }

    @Override
    public List<List<String>> getDiffStaticBySamId(String samId) throws IOException {
        List<List<String>> list = new ArrayList<>();
        String filename = FileLocationConfig.TFFootprint + samId + FileLocationConfig.DiffStaticFile;
        File file = new File(filename);
        if (file.exists()) {
            LineIterator it = FileUtils.lineIterator(file);
            String s;
            int index = 0;
            while (it.hasNext()) {
                if (index == 0) {
                    index++;
                    it.nextLine();
                } else {
                    s = it.nextLine();
                    String[] strs = s.split("\t");
                    List<String> l1 = new ArrayList<>(Arrays.asList(strs));
                    l1.add(samId + "/" + strs[0] + ".png");
                    list.add(l1);
                    index++;
                }
            }
            it.close();
        }
        return list;
    }

    @Override
    public List<List<String>> getPeakFileBySamId(String samId) throws IOException {
        List<List<String>> list = new ArrayList<>();
        String filename = FileLocationConfig.PeakFileLocation + samId + FileLocationConfig.PeakFile;
        File file = new File(filename);
        if (file.exists()) {
            LineIterator it = FileUtils.lineIterator(file);
            String s;
            int index = 0;
            while (it.hasNext()) {
                if (index == 0) {
                    index++;
                    it.nextLine();
                } else {
                    s = it.nextLine();
                    String[] strs = s.split("\t");
                    List<String> l = new ArrayList<>(Arrays.asList(strs));
                    list.add(l);
                    index++;
                }
            }
            it.close();
        }
        return list;
    }


    @Override
    public List<List<String>> getPeakMotifFileBySamId(String samId, String ATAC) throws IOException {
        List<List<String>> list = new ArrayList<>();
        String filename = FileLocationConfig.PeakMotifFileLocation + samId + FileLocationConfig.PeakMotifFile;
        File file = new File(filename);
        if (file.exists()) {
            LineIterator it = FileUtils.lineIterator(file);
            String s;
            int index = 0;
            while (it.hasNext()) {
                if (index == 0) {
                    index++;
                    it.nextLine();
                } else {
                    s = it.nextLine();
                    String[] strs = s.split("\t");
                    if (strs[4].equals(ATAC)) {
                        List<String> result = new ArrayList<>(Arrays.asList(strs));
                        result.remove(4);
                        list.add(result);
                    }
                }
            }
            it.close();
        }
        return list;
    }

    @Override
    public List<List<String>> getFootprintMbpsFileBySamId(String samId, String ATAC) throws IOException {
        List<List<String>> list = new ArrayList<>();
        String filename = FileLocationConfig.FootprintMbpsFileLocation + samId + FileLocationConfig.FootprintMbpsFile;
        File file = new File(filename);
        if (file.exists()) {
            LineIterator it = FileUtils.lineIterator(file);
            String s;
            while (it.hasNext()) {
                s = it.nextLine();
                String[] strs = s.split("\t");
                if (strs[6].equals(ATAC)) {
                    List<String> result = new ArrayList<>(Arrays.asList(strs));
                    result.remove(6);
                    list.add(result);
                }
            }
            it.close();
        }
        return list;
    }

    @Override
    public AssociatedGeneFileInfo getAssociatedGeneBySamId(String samId, String ATAC) throws IOException {
        AssociatedGeneFileInfo associatedGeneFileInfo = null;
        String filename = FileLocationConfig.AssociatedGeneFileLocation + samId + FileLocationConfig.AssociatedGeneFile;
        File file = new File(filename);
        if (file.exists()) {
            LineIterator it = FileUtils.lineIterator(file);
            String s;
            while (it.hasNext()) {
                s = it.nextLine();
                String[] strs = s.split("\t");
                if (strs[3].equals(ATAC)) {
                    associatedGeneFileInfo = new AssociatedGeneFileInfo();
                    //strs[0], strs[1], strs[2], strs[3], strs[4], strs[6], strs[5], strs[7], strs[8]
                    for (int i = 0; i < 9 && i < strs.length; i++) {
                        if (i == 0) associatedGeneFileInfo.setChr(strs[i]);
                        if (i == 1) associatedGeneFileInfo.setStart(strs[i]);
                        if (i == 2) associatedGeneFileInfo.setEnd(strs[i]);
                        if (i == 3) associatedGeneFileInfo.setName(strs[i]);
                        if (i == 4) associatedGeneFileInfo.setOverlapGene(strs[i]);
                        if (i == 6) associatedGeneFileInfo.setProximal_Gene_1kb(strs[i]);
                        if (i == 5) associatedGeneFileInfo.setProximal_Gene_10kb(strs[i]);
                        if (i == 7) associatedGeneFileInfo.setProximal_Gene_20kb(strs[i]);
                        if (i == 8) associatedGeneFileInfo.setClosestGene(strs[i]);
                    }
                    break;
                }
            }
        }
        return associatedGeneFileInfo;
    }

    @Override
    public List<List<String>> getSNP(String samId, String ATAC) throws IOException {
        List<List<String>> list = new ArrayList<>();
        PeakFileInfo peakFileInfo = getPeakFileBySamIdAndATAC(samId, ATAC);

        if (peakFileInfo == null) return list;
        else {
            SamInfo samInfo = databaseMapper.getSamInfoBySamId(samId);

            if (samInfo == null) return list;
            String species = samInfo.getSpeciesName();
            String[] s = species.split(" ");
            String filename = FileLocationConfig.SNPLocation + s[0] + "_" + s[1] + ".vcf";
            File file = new File(filename);
            if (!file.exists()) return list;
            else {

                int start = Integer.parseInt(peakFileInfo.getStart());
                int end = Integer.parseInt(peakFileInfo.getEnd());
                LineIterator it = FileUtils.lineIterator(file);
                String chr = peakFileInfo.getChr();
                String str;
                while (it.hasNext()) {
                    str = it.nextLine();
                    s = str.split("\t");
                    int position = Integer.parseInt(s[1]);
                    String c = s[0];
                    if (chr.equals(c) && position >= start && position <= end) {
                        list.add(new ArrayList<>(Arrays.asList(s)));
                    }
                    if (position > end) break;
                }
                it.close();
            }
        }
        return list;
    }



    @Override
    public PeakFileInfo getPeakFileBySamIdAndATAC(String samId, String ATAC) throws IOException {
        String filename = FileLocationConfig.PeakFileLocation + samId + FileLocationConfig.PeakFile;
        File file = new File(filename);
        if (file.exists()) {
            LineIterator it = FileUtils.lineIterator(file);
            String s;
            int index = 0;
            while (it.hasNext()) {
                if (index == 0) {
                    index++;
                    it.nextLine();
                } else {
                    s = it.nextLine();
                    String[] strs = s.split("\t");
                    if (strs[9].equals(ATAC)) {
                        it.close();
                        return (new PeakFileInfo(strs[0], strs[1], strs[2], strs[3], strs[4], strs[5], strs[6], strs[7], strs[8], strs[9], strs[10]));
                    }
                }
            }
            it.close();
        }
        return null;
    }

    @Override
    public List<List<String>> getDiffStaticByFilter(String samId, Integer number, Double score, Double TC) throws IOException {
        List<List<String>> list = new ArrayList<>();
        String filename = FileLocationConfig.TFFootprint + samId + FileLocationConfig.DiffStaticFile;
        File file = new File(filename);

        if (file.exists()) {
            LineIterator it = FileUtils.lineIterator(file);
            String s;
            int index = 0;
            while (it.hasNext()) {
                Boolean flag0 = false, flag1 = false, flag2 = false;
                if (index == 0) {
                    index++;
                    it.nextLine();
                } else {
                    s = it.nextLine();
                    String[] strs = s.split("\t");
                    if (number != null) {
                        if (Integer.parseInt(strs[1]) >= number) flag0 = true;
                    } else flag0 = true;
                    if (score != null) {
                        if (Double.parseDouble(strs[2]) >= score) flag1 = true;
                    } else flag1 = true;
                    if (TC != null) {
                        if (Double.parseDouble(strs[3]) >= TC) flag2 = true;
                    } else flag2 = true;
                    List<String> l1;
                    if (flag0 && flag1 && flag2) {
                        l1 = new ArrayList<>(Arrays.asList(strs));
                        l1.add(samId + "/" + strs[0] + ".png");
                        list.add(l1);
                    }
                    index++;
                }
            }
            it.close();
        }
        return list;
    }

    @Override
    public List<String> getChr(String samId) throws IOException {
        List<String> list = new ArrayList<>();
        String filename = FileLocationConfig.PeakFileLocation + samId + FileLocationConfig.PeakFile;
        File file = new File(filename);
        Map<String, Integer> map = new HashMap<>();
        if (file.exists()) {
            LineIterator it = FileUtils.lineIterator(file);
            String s;
            int index = 0;
            while (it.hasNext()) {
                if (index == 0) {
                    index++;
                    it.nextLine();
                } else {
                    s = it.nextLine();
                    String[] strs = s.split("\t");
                    if (!map.containsKey(strs[0])) {
                        map.put(strs[0], 1);
                        list.add(strs[0]);
                    }
                    index++;
                }
            }
            it.close();
        }
        return list;
    }

    @Override
    public List<String> getTFName(String speciesName) throws IOException {
        List<String> res = new ArrayList<>();
        String motif = getMotif(speciesName);

        if (motif != null && !motif.equals("")) {
            File files;
            File files1;
            if (!motif.equals("Osi") && !motif.equals("Osj")) {
                files = new File(FileLocationConfig.MotifMeMeLocation + motif + FileLocationConfig.TFGeneMotifTransFile);
                if (files.exists()) {
                    files1 = null;
                    LineIterator it = FileUtils.lineIterator(files);
                    String line;
                    int index = 0;
                    while (it.hasNext()) {
                        line = it.nextLine();
                        if (index == 0) {
                            index++;
                            continue;
                        } else {
                            String[] strs = line.split("\t");
                            res.add(strs[0]);
                        }
                        index++;
                    }
                    it.close();
                }
            } else {

                files = new File(FileLocationConfig.MotifMeMeLocation + "Osi" + FileLocationConfig.TFGeneMotifTransFile);
                files1 = new File(FileLocationConfig.MotifMeMeLocation + "Osj" + FileLocationConfig.TFGeneMotifTransFile);
                if (files.exists()) {
                    LineIterator it = FileUtils.lineIterator(files);
                    String line;
                    int index = 0;
                    while (it.hasNext()) {
                        line = it.nextLine();
                        if (index == 0) {
                            index++;
                            continue;
                        } else {
                            String[] strs = line.split("\t");
                            res.add(strs[0]);
                        }
                        index++;
                    }
                    it.close();
                }
                if (files1.exists()) {
                    LineIterator it = FileUtils.lineIterator(files1);
                    String line;
                    int index = 0;
                    while (it.hasNext()) {
                        line = it.nextLine();
                        if (index == 0) {
                            index++;
                            continue;
                        } else {
                            String[] strs = line.split("\t");
                            res.add(strs[0]);
                        }
                        index++;
                    }
                    it.close();
                }
            }
        }
        return res;
    }


    public Map<String, Object> searchTF(String species, String name) throws IOException {
        boolean flag = false;
        Map<String, Object> res = new HashMap<>();
        String motif = getMotif(species);
        Integer speciesNo = navInfoMapper.getSpeciesNoBySpeciesName(species);
        List<SamInfo> samInfos = databaseMapper.getSamInfoBySpeciesNo(speciesNo);
        List<String[]> result = new ArrayList<>();
        List<String[]> accessibile = new ArrayList<>();
        res.put("name", name);
        for (SamInfo samInfo : samInfos) {
            String DiffStaticFile = FileLocationConfig.TFFootprint + samInfo.getSamId() + FileLocationConfig.DiffStaticFile;
            File file = new File(DiffStaticFile);
            String tFId;
            String motifId;
            if (file.exists()) {
                LineIterator it = FileUtils.lineIterator(file);
                String str;
                int index = 0;
                while (it.hasNext()) {
                    str = it.nextLine();
                    if (index == 0) {
                        index++;
                        continue;
                    } else {
                        String[] s = str.split("\t");
                        if (s[0].lastIndexOf(".") != -1) {
                            tFId = s[0].substring(0, s[0].lastIndexOf("."));
                            motifId = s[0].substring(s[0].lastIndexOf(".") + 1);
                            if (tFId.equals(name)) {
                                String[] samTemp = new String[]{samInfo.getSamId(), motifId, s[2], s[3], s[1], samInfo.getDescription(), samInfo.getTissueName()};
                                result.add(samTemp);
                            }
                        }
                    }
                    index++;
                }
                it.close();
            }
            if (motif != null && !motif.equals("")) {
                File files, files1;
                if (!motif.equals("Osi") && !motif.equals("Osj")) {
                    files = new File(FileLocationConfig.MotifMeMeLocation + motif + FileLocationConfig.TFGeneMotifTransFile);
                    if (files.exists()) {
                        LineIterator it = FileUtils.lineIterator(files);
                        String str;
                        int index = 0;
                        while (it.hasNext()) {
                            if (res.containsKey("family")) break;
                            str = it.nextLine();
                            if (index == 0) {
                                index++;
                                continue;
                            } else {
                                String[] s = str.split("\t");
                                if (s[0].equals(name)) {
                                    res.put("family", s[3]);
                                    break;
                                }
                            }
                            index++;
                        }
                        it.close();
                    }
                } else {
                    files = new File(FileLocationConfig.MotifMeMeLocation + "Osi" + FileLocationConfig.TFGeneMotifTransFile);
                    files1 = new File(FileLocationConfig.MotifMeMeLocation + "Osj" + FileLocationConfig.TFGeneMotifTransFile);
                    if (files.exists()) {
                        LineIterator it = FileUtils.lineIterator(files);
                        String line;
                        int index = 0;
                        while (it.hasNext()) {
                            if (res.containsKey("family")) break;
                            line = it.nextLine();
                            if (index == 0) {
                                index++;
                                continue;
                            } else {
                                String[] strs = line.split("\t");
                                res.put("family", strs[3]);
                            }
                            index++;
                        }
                        it.close();
                    }
                    if (files1.exists()) {
                        LineIterator it = FileUtils.lineIterator(files1);
                        String line;
                        int index = 0;
                        while (it.hasNext()) {
                            if (res.containsKey("family")) break;
                            line = it.nextLine();
                            if (index == 0) {
                                index++;
                                continue;
                            } else {
                                String[] strs = line.split("\t");
                                res.put("family", strs[3]);
                            }
                            index++;
                        }
                        it.close();
                    }
                }
            }
            if (!species.equals("Arabidopsis thaliana") && !species.equals("Solanum lycopersicum") && !species.equals("Zea mays") && !species.equals("Oryza sativa")) {
                String filePath = FileLocationConfig.PeakMotifFileLocation + samInfo.getSamId() + FileLocationConfig.PeakMotifFile;
                File file1 = new File(filePath);
                if (file1.exists()) {
                    LineIterator it = FileUtils.lineIterator(file1);
                    String str;
                    int index = 0;
                    while (it.hasNext()) {
                        str = it.nextLine();
                        if (index == 0) {
                            index++;
                            continue;
                        } else {
                            String[] s = str.split("\t");
                            if (s[0].equals(name)) {
                                accessibile.add(s);
                            }
                        }
                        index++;
                    }
                    it.close();
                }
            } else {
                if (!flag) {
//                    String filePath = FileLocationConfig.SearchTFLocation + species.replace(" ", "_") + "\\" + name + ".bed";
                    String filePath = FileLocationConfig.SearchTFLocation + species.replace(" ", "_") + "/" + name + ".bed";
                    File files1 = new File(filePath);
                    if (files1.exists()) {
                        LineIterator it = FileUtils.lineIterator(files1);
                        String str;
                        while (it.hasNext()) {
                            str = it.nextLine();
                            String[] s = str.split("\t");
                            accessibile.add(s);
                        }
                        it.close();
                    }
                    flag = true;
                }
            }
        }
        res.put("result", result);
        res.put("accessible", accessibile);
        return res;
    }


    private String getMotif(String speciesName) {
        List<String> list = databaseMapper.getMotifBySpeciesNo(navInfoMapper.getSpeciesNoBySpeciesName(speciesName));
        String motif = "";
        for (String s : list) {
            if (s != null && !s.equals("") && !s.equals(" ")) {
                motif = s;
                break;
            }
        }
        return motif;
    }

    @Override
    public Map<String, Object> searchGene(String speciesName, String type, String name) throws IOException {
        Map<String, Object> map = new HashMap<>();
        List<String[]> res = new ArrayList<>();
        Integer speciesNo = navInfoMapper.getSpeciesNoBySpeciesName(speciesName);
        List<SamInfo> allSample = databaseMapper.getSamInfoBySpeciesNo(speciesNo);
        Iterator<SamInfo> iterator = allSample.iterator();
        File file;
        SamInfo samInfo;
        while (iterator.hasNext()) {
            samInfo = iterator.next();
            String filePath = FileLocationConfig.AssociatedGeneFileLocation + samInfo.getSamId() + FileLocationConfig.AssociatedGeneFile;
            file = new File(filePath);
            if (file.exists()) {
                LineIterator it = FileUtils.lineIterator(file);
                String[] line;
                String s;
                while (it.hasNext()) {
                    s = it.nextLine();
                    line = s.split("\t");
                    String[] tempRes;
                    switch (type) {
                        case "OVERLAP":
                            if (line[4].contains(name)) {
                                tempRes = new String[line.length + 1];
                                tempRes[0] = samInfo.getSamId();
                                System.arraycopy(line, 0, tempRes, 1, line.length);
                                res.add(tempRes);
                            }
                            break;
                        case "PROXIMAL":
                            if (line[5].contains(name)) {
                                tempRes = new String[line.length + 1];
                                tempRes[0] = samInfo.getSamId();
                                System.arraycopy(line, 0, tempRes, 1, line.length);
                                res.add(tempRes);
                            }
                            break;
                        case "CLOSEST":
                            if (line[8].contains(name)) {
                                tempRes = new String[line.length + 1];
                                tempRes[0] = samInfo.getSamId();
                                System.arraycopy(line, 0, tempRes, 1, line.length);
                                res.add(tempRes);
                            }
                    }
                }
                it.close();
            }

        }
        map.put("result", res);
        String filePath = FileLocationConfig.GenomeGeneLocation + speciesName.replace(" ", "_") + FileLocationConfig.GenomeGeneFile;
        file = new File(filePath);
        List<String[]> tempResult = new ArrayList<>();
        if (file.exists()) {
            LineIterator it = FileUtils.lineIterator(file);
            String[] line;
            String s;

            while (it.hasNext()) {
                s = it.nextLine();
                line = s.split("\t");
                if (line[5].equals(name)) {
                    tempResult.add(line);
                }
            }
        }
        map.put("GeneOverview", tempResult);
        return map;
    }

    public Map<String, Object> doSearchChr(String sampleId, String chrs, Integer start, Integer end) throws IOException {
        Map<String, Object> map = new HashMap<>();
        map.put("Chr", chrs);
        if (start == -1) {
            map.put("startPosition", "Full Sequence");
        }

        if (end == -1) {
            map.put("endPosition", "Full Sequence");
        }
        SamInfo samInfo = databaseMapper.getSamInfoBySamId(sampleId);
        String peakFilePath = FileLocationConfig.PeakFileLocation + sampleId + FileLocationConfig.PeakFile;
        File peakFile = new File(peakFilePath);
        List<String[]> peakFileInfo = new ArrayList<>();
        List<String> chrNumber = new ArrayList<>();
        List<Integer> chrNum = new ArrayList<>();
        List<String> sampleName = new ArrayList<>();
        Map<String, Integer> chrCount = new HashMap<>();
        if (start <= end) {
            if (peakFile.exists()) {
                LineIterator it = FileUtils.lineIterator(peakFile);
                String[] line;
                String s;
                s = it.nextLine();
                line = s.split("\t");
                map.put("title", line);
                while (it.hasNext()) {
                    s = it.nextLine();
                    line = s.split("\t");
                    if (chrCount.containsKey(line[0])) {
                        chrCount.replace(line[0], chrCount.get(line[0]) + 1);
                    } else {
                        chrCount.put(line[0], 1);
                    }
                    peakFileInfo.add(line);
                }
            }
            if (chrs.equals("AllChr")) {
                chrCount.forEach((key, value) -> {
                    chrNumber.add(key);
                    chrNum.add(value);
                });
            } else {
                chrNumber.add(chrs);
                chrNum.add(chrCount.get(chrs));
            }
            sampleName.add(samInfo.getSamId());
            sampleName.add(samInfo.getTypeName());
            sampleName.add(samInfo.getClassName());
            sampleName.add(samInfo.getLayoutName());
            sampleName.add(samInfo.getSpeciesName());
            sampleName.add(samInfo.getDescription());
            sampleName.add(samInfo.getTissueName());
            sampleName.add(samInfo.getRegionNumber().toString());
            sampleName.add(samInfo.getRegionLength().toString());
            sampleName.add(samInfo.getRuns());
            sampleName.add(samInfo.getFilename());
            sampleName.add(samInfo.getScore());
            sampleName.add(samInfo.getFRiP());
            sampleName.add(samInfo.getMeanInsertSize());
            sampleName.add(samInfo.getStandardDeviation());
            sampleName.add(samInfo.getMotif());
            sampleName.add(samInfo.getDACR());
            sampleName.add(samInfo.getGACR());
            sampleName.add(samInfo.getPACR());
            int i;
            String[] datai;
            List<String[]> list1;
            if (chrs.equals("AllChr")) {
                list1 = new ArrayList<>();
                i = 0;
                while (true) {
                    if (i >= peakFileInfo.size()) {
                        map.put("result", list1);
                        break;
                    }
                    datai = peakFileInfo.get(i);
                    if (start >= 0) {
                        if (Integer.parseInt(datai[1]) <= start && Integer.parseInt(datai[2]) > end) {
                            list1.add(datai);
                        } else if (Integer.parseInt(datai[1]) >= start && Integer.parseInt(datai[2]) <= end) {
                            list1.add(datai);
                        } else if (Integer.parseInt(datai[1]) < start && Integer.parseInt(datai[2]) > end) {
                            list1.add(datai);
                        }
                    } else {
                        list1.add(datai);
                    }
                    ++i;
                }
            } else {
                list1 = new ArrayList<>();
                i = 0;
                while (true) {
                    if (i >= peakFileInfo.size()) {
                        map.put("result", list1);
                        break;
                    }
                    datai = peakFileInfo.get(i);
                    if (datai[0].equals(chrs)) {
                        if (start < 0) {
                            list1.add(datai);
                        } else if (Integer.parseInt(datai[1]) <= start && Integer.parseInt(datai[2]) > end || Integer.parseInt(datai[1]) >= start && Integer.parseInt(datai[2]) <= end || Integer.parseInt(datai[1]) < start && Integer.parseInt(datai[2]) > end) {
                            list1.add(datai);
                        }
                    }
                    ++i;
                }
            }
        }
        map.put("chrNumber", chrNumber);
        map.put("chrNum", chrNum);
        map.put("sampleName", sampleName);
        map.put("CombinationChart", "CombinationChart/" + sampleId + "_CombinationChart.png");
        map.put("PeakContribution", "PeakContribution/" + sampleId + "_PeakContribution.png");
        map.put("AnnotatedGenomic", "AnnotatedGenomic/" + sampleId + "_AnnotatedGenomic.png");
        map.put("TssEnrichment", "TssEnrichment/" + sampleId + "_TssEnrichment.png");
        return (map);
    }

    public Map<String, Object> doAnalysis(String sampleIdOne, String sampleIdTwo) throws IOException {
        Map<String, Object> map = new HashMap<>();
        SamInfo samInfo1 = databaseMapper.getSamInfoBySamId(sampleIdOne);
        SamInfo samInfo2 = databaseMapper.getSamInfoBySamId(sampleIdTwo);
        List<String> sampleOneDetail = new ArrayList<>();
        List<String> sampleTwoDetail = new ArrayList<>();
        {
            String peakOne = FileLocationConfig.PeakFileLocation + sampleIdOne + FileLocationConfig.PeakFile;
            String peakTwo = FileLocationConfig.PeakFileLocation + sampleIdTwo + FileLocationConfig.PeakFile;
            sampleOneDetail.add(samInfo1.getSamId());
            sampleOneDetail.add(samInfo1.getTypeName());
            sampleOneDetail.add(samInfo1.getClassName());
            sampleOneDetail.add(samInfo1.getLayoutName());
            sampleOneDetail.add(samInfo1.getSpeciesName());
            sampleOneDetail.add(samInfo1.getDescription());
            sampleOneDetail.add(samInfo1.getTissueName());
            sampleOneDetail.add(samInfo1.getRegionNumber().toString());
            sampleOneDetail.add(samInfo1.getRegionLength().toString());
            sampleOneDetail.add(samInfo1.getRuns());
            sampleOneDetail.add(samInfo1.getFilename());
            sampleOneDetail.add(samInfo1.getScore());
            sampleOneDetail.add(samInfo1.getFRiP());
            sampleOneDetail.add(samInfo1.getMeanInsertSize());
            sampleOneDetail.add(samInfo1.getStandardDeviation());
            sampleOneDetail.add(samInfo1.getMotif());
            sampleOneDetail.add(samInfo1.getDACR());
            sampleOneDetail.add(samInfo1.getGACR());
            sampleOneDetail.add(samInfo1.getPACR());

            sampleTwoDetail.add(samInfo2.getSamId());
            sampleTwoDetail.add(samInfo2.getTypeName());
            sampleTwoDetail.add(samInfo2.getClassName());
            sampleTwoDetail.add(samInfo2.getLayoutName());
            sampleTwoDetail.add(samInfo2.getSpeciesName());
            sampleTwoDetail.add(samInfo2.getDescription());
            sampleTwoDetail.add(samInfo2.getTissueName());
            sampleTwoDetail.add(samInfo2.getRegionNumber().toString());
            sampleTwoDetail.add(samInfo2.getRegionLength().toString());
            sampleTwoDetail.add(samInfo2.getRuns());
            sampleTwoDetail.add(samInfo2.getFilename());
            sampleTwoDetail.add(samInfo2.getScore());
            sampleTwoDetail.add(samInfo2.getFRiP());
            sampleTwoDetail.add(samInfo2.getMeanInsertSize());
            sampleTwoDetail.add(samInfo2.getStandardDeviation());
            sampleTwoDetail.add(samInfo2.getMotif());
            sampleTwoDetail.add(samInfo2.getDACR());
            sampleTwoDetail.add(samInfo2.getGACR());
            sampleTwoDetail.add(samInfo2.getPACR());
            map.put("sampleOneDetail", sampleOneDetail);
            map.put("sampleTwoDetail", sampleTwoDetail);
            File peakOneFile = new File(peakOne);
            File peakTwoFile = new File(peakTwo);
            List<String[]> peakOneDiff = new ArrayList<>();
            List<String[]> peakTwoDiff = new ArrayList<>();
            List<String[]> peakOver = new ArrayList<>();

            if (peakOneFile.exists() && peakTwoFile.exists()) {
                Map<String, List<String[]>> resultOne = new HashMap<>();
                Map<String, List<String[]>> resultTwo = new HashMap<>();
                LineIterator it = null;
                {
                    it = FileUtils.lineIterator(peakOneFile);
                    String line = "";
                    int lines;
                    String[] res;
                    List<String[]> tempResult;
                    for (lines = -1; it.hasNext(); ++lines) {
                        if (lines == -1) {
                            line = it.nextLine();
                            res = line.split("\t");
                            map.put("title", res);
                        } else {
                            line = it.nextLine();
                            res = line.split("\t");
                            if (resultOne.containsKey(res[0])) {
                                (resultOne.get(res[0])).add(res);
                            } else {
                                tempResult = new ArrayList<>();
                                tempResult.add(res);
                                resultOne.put(res[0], tempResult);
                            }
                        }
                    }
                    it.close();

                    it = FileUtils.lineIterator(peakTwoFile);

                    for (lines = -1; it.hasNext(); ++lines) {
                        if (lines > -1) {
                            line = it.nextLine();
                            res = line.split("\t");
                            if (resultTwo.containsKey(res[0])) {
                                (resultTwo.get(res[0])).add(res);
                            } else {
                                tempResult = new ArrayList<>();
                                tempResult.add(res);
                                resultTwo.put(res[0], tempResult);
                            }
                        }
                    }

                    it.close();
                    Iterator<String> var46 = resultOne.keySet().iterator();

                    label132:
                    while (true) {
                        String s;
                        label103:
                        while (var46.hasNext()) {
                            s = var46.next();
                            int peakOneIndex = 0;
                            int peakTwoIndex = 0;
                            List<String[]> tempOne = resultOne.get(s);
                            if (resultTwo.containsKey(s)) {
                                List<String[]> tempTwo = resultTwo.get(s);

                                while (true) {
                                    while (true) {
                                        if (peakOneIndex >= tempOne.size() || peakTwoIndex >= tempTwo.size()) {
                                            continue label103;
                                        }

                                        String[] peakOneEle = tempOne.get(peakOneIndex);
                                        String[] peakTwoEle = tempTwo.get(peakTwoIndex);
                                        int startOne = Integer.parseInt(peakOneEle[1]);
                                        int startTwo = Integer.parseInt(peakTwoEle[1]);
                                        int endOne = Integer.parseInt(peakOneEle[2]);
                                        int endTwo = Integer.parseInt(peakTwoEle[2]);
                                        if (startOne > endTwo) {
                                            peakOneDiff.add(peakTwoEle);
                                            ++peakTwoIndex;
                                        } else if (endOne < startTwo) {
                                            peakTwoDiff.add(peakOneEle);
                                            ++peakOneIndex;
                                        } else {
                                            String[] overlapping = new String[10];
                                            overlapping[0] = peakOneEle[9];
                                            overlapping[1] = "" + peakOneEle[0] + ":" + peakOneEle[1] + "-" + peakOneEle[2];
                                            overlapping[2] = peakOneEle[3];
                                            overlapping[3] = peakTwoEle[9];
                                            overlapping[4] = "" + peakTwoEle[0] + ":" + peakTwoEle[1] + "-" + peakTwoEle[2];
                                            overlapping[5] = peakTwoEle[3];
                                            BigDecimal decimal;
                                            double f1;
                                            if (startOne >= startTwo && endOne <= endTwo) {
                                                overlapping[6] = String.valueOf(endOne - startOne + 1);
                                                overlapping[7] = String.valueOf(100);
                                                decimal = BigDecimal.valueOf(((double) (endOne - startOne + 1) + 0.0) / (double) (endTwo - startTwo + 1) * 100.0);
                                                f1 = decimal.setScale(3, 4).doubleValue();
                                                overlapping[8] = String.valueOf(f1);
                                                overlapping[9] = "C";
                                            } else if (startOne <= startTwo && endOne >= endTwo) {
                                                overlapping[6] = String.valueOf(endTwo - startTwo + 1);
                                                decimal = BigDecimal.valueOf(((double) (endTwo - startTwo + 1) + 0.0) / (double) (endOne - startOne + 1) * 100.0);
                                                f1 = decimal.setScale(3, 4).doubleValue();
                                                overlapping[7] = String.valueOf(f1);
                                                overlapping[8] = String.valueOf(100);
                                                overlapping[9] = "D";
                                            } else if (startOne <= startTwo && endOne > startTwo) {
                                                overlapping[6] = String.valueOf(endOne - startTwo + 1);
                                                decimal = BigDecimal.valueOf(((double) (endOne - startTwo + 1) + 0.0) / (double) (endOne - startOne + 1) * 100.0);
                                                f1 = decimal.setScale(3, 4).doubleValue();
                                                overlapping[7] = String.valueOf(f1);
                                                decimal = BigDecimal.valueOf(((double) (endOne - startTwo) + 0.0) / (double) (endTwo - startTwo) * 100.0);
                                                f1 = decimal.setScale(3, 4).doubleValue();
                                                overlapping[8] = String.valueOf(f1);
                                                overlapping[9] = "A";
                                            } else {
                                                overlapping[6] = String.valueOf(endTwo - startOne + 1);
                                                decimal = BigDecimal.valueOf(((double) (endTwo - startOne + 1) + 0.0) / (double) (endOne - startOne + 1) * 100.0);
                                                f1 = decimal.setScale(3, 4).doubleValue();
                                                overlapping[7] = String.valueOf(f1);
                                                decimal = BigDecimal.valueOf(((double) (endTwo - startOne + 1) + 0.0) / (double) (endTwo - startTwo + 1) * 100.0);
                                                f1 = decimal.setScale(3, 4).doubleValue();
                                                overlapping[8] = String.valueOf(f1);
                                                overlapping[9] = "B";
                                            }
                                            peakOver.add(overlapping);
                                            ++peakOneIndex;
                                            ++peakTwoIndex;
                                        }
                                    }
                                }
                            } else {
                                peakOneDiff.addAll(tempOne);
                            }
                        }

                        var46 = resultTwo.keySet().iterator();

                        while (true) {
                            if (!var46.hasNext()) {
                                break label132;
                            }

                            s = var46.next();
                            if (!resultOne.containsKey(s)) {
                                peakTwoDiff.addAll(resultTwo.get(s));
                            }
                        }
                    }
                }
                peakTwoDiff.remove(peakTwoDiff.size() - 1);
                map.put("peakOneDiff", peakOneDiff);
                map.put("peakTwoDiff", peakTwoDiff);
                map.put("peakOver", peakOver);
                map.put("peakOneNumber", peakOneDiff.size());
                map.put("peakTwoNumber", peakTwoDiff.size());
                map.put("peakOverNumber", peakOver.size());
            }
            return map;
        }
    }

    public Map<String, Object> analysisTwo(String species, String TFOneName, String TFTwoName, int length) throws IOException {
        Map<String, Object> map = new HashMap<>();
        List<List<String>> result = new ArrayList<>();
        List<SamInfo> allSample = databaseMapper.getSamInfoBySpeciesNo(navInfoMapper.getSpeciesNoBySpeciesName(species));
        String motif = allSample.get(0).getMotif();
        if (("Arabidopsis thaliana").equals(species) || ("Solanum lycopersicum").equals(species) || ("Zea mays").equals(species) || ("Oryza sativa").equals(species)) {
            String folder = species.replace(" ", "_");
//            folder += "\\";
            folder += "/";
            String TFFileOneName = FileLocationConfig.SearchTFLocation + folder + TFOneName + ".bed";
            String TFFileTwoName = FileLocationConfig.SearchTFLocation + folder + TFTwoName + ".bed";
            File file1 = new File(TFFileOneName);
            File file2 = new File(TFFileTwoName);
            if (file1.exists() && file2.exists()) {
                LineIterator it1 = FileUtils.lineIterator(file1);
                LineIterator it2 = FileUtils.lineIterator(file2);
                String line1;
                String line2;
                int process = 0;
                String[] arr1;
                String[] arr2;
                List<String[]> list1 = new ArrayList<>();
                List<String[]> list2 = new ArrayList<>();
                List<List<Integer>> lists = new ArrayList<>();
                List<String> chrs = new ArrayList<>();
                int index = 0;
                while (it1.hasNext()) {
                    line1 = it1.nextLine();
                    arr1 = line1.split("\t");
                    if (index == 0) {
                        index++;
                        list1.add(arr1);
                    } else {
                        if (!list1.get(index - 1)[5].equals(arr1[5]) || !list1.get(index - 1)[6].equals(arr1[6]) || !list1.get(index - 1)[7].equals(arr1[7])) {
                            index++;
                            list1.add(arr1);
                        }
                    }
                }
                index = 0;
                while (it2.hasNext()) {
                    line2 = it2.nextLine();
                    arr2 = line2.split("\t");
                    if (index == 0) {
                        index++;
                        list2.add(arr2);
                    } else {
                        if (!list2.get(index - 1)[5].equals(arr2[5]) || !list2.get(index - 1)[6].equals(arr2[6]) || !list2.get(index - 1)[7].equals(arr2[7])) {
                            index++;
                            list2.add(arr2);
                        }
                    }
                }
                it1.close();
                it2.close();

                for (int i = 0; i < list1.size(); i++) {
                    Integer s1 = Integer.parseInt(list1.get(i)[6]) - length, e1 = Integer.parseInt(list1.get(i)[7]) + length;
                    for (int j = 0; j < list2.size(); j++) {
                        Integer s2 = Integer.parseInt(list2.get(j)[6]) - length, e2 = Integer.parseInt(list2.get(j)[7]) + length;
                        if (list2.get(j)[5].equals(list1.get(i)[5])) {
                            if (getOverlapLength(s1, e1, s2, e2) != 0) {
                                if (lists.size() == 0) {
                                    List<Integer> temp = new ArrayList<>();
                                    chrs.add(list2.get(j)[5]);
                                    temp.add(s1 + length);
                                    temp.add(e1 - length);
                                    temp.add(s2 + length);
                                    temp.add(e2 - length);
                                    lists.add(temp);
                                } else {
                                    int n = lists.size() - 1;
                                    if (lists.get(n).get(0) != s1 + length || lists.get(n).get(1) != e1 - length || lists.get(n).get(2) != s2 + length || lists.get(n).get(3) != e2 - length) {
                                        List<Integer> temp = new ArrayList<>();
                                        chrs.add(list2.get(j)[5]);
                                        temp.add(s1 + length);
                                        temp.add(e1 - length);
                                        temp.add(s2 + length);
                                        temp.add(e2 - length);
                                        lists.add(temp);
                                    }
                                }
                            }
                        }
                    }
                }
                for (int i = 0; i < lists.size(); i++) {
                    List<Integer> l = lists.get(i);
                    int s1 = l.get(0), e1 = l.get(1), s2 = l.get(2), e2 = l.get(3);
                    int overlappingLength = getOverlapLength(s1 - length, e1 + length, s2 - length, e2 + length);
                    double ratioA = overlappingLength, ratioB = overlappingLength;
                    ratioA = ratioA / (e1 - s1 + 2 * length) * 100;
                    ratioB = ratioB / (e2 - s2 + 2 * length) * 100;
                    DecimalFormat df = new DecimalFormat("00.###");
                    List<String> res = new ArrayList<>();
                    res.add(chrs.get(i) + ":" + s1 + "-" + e1);
                    res.add(chrs.get(i) + ":" + s2 + "-" + e2);
                    res.add("" + overlappingLength);
                    res.add("" + df.format(ratioA));
                    res.add("" + df.format(ratioB));
                    result.add(res);
                }
                map.put("result", result);
                map.put("total", result.size());
            }
        } else {
            List<String> chr = new ArrayList<>();
            List<String[]> list1 = new ArrayList<>();
            List<String[]> list2 = new ArrayList<>();
            List<List<Integer>> lists = new ArrayList<>();
            for (SamInfo samInfo : allSample) {
                String filePath = FileLocationConfig.FootprintMbpsFileLocation + samInfo.getSamId() + FileLocationConfig.FootprintMbpsFile;
                File file = new File(filePath);
                if (file.exists()) {
                    LineIterator it = FileUtils.lineIterator(file);
                    String[] arr;
                    String line;

                    while (it.hasNext()) {
                        line = it.nextLine();
                        arr = line.split("\t");
                        if (arr[3].lastIndexOf(".") != -1) {
                            String tFId = arr[3].substring(0, arr[3].lastIndexOf("."));
                            if (tFId.equals(TFOneName)) {
                                list1.add(arr);
                            }
                            if (tFId.equals(TFTwoName)) {
                                list2.add(arr);
                            }
                        }
                    }

                }
            }
            for (int i = 0; i < list1.size(); i++) {
                Integer s1 = Integer.parseInt(list1.get(i)[1]) - length, e1 = Integer.parseInt(list1.get(i)[2]) + length;
                for (int j = 0; j < list2.size(); j++) {
                    Integer s2 = Integer.parseInt(list2.get(j)[1]) - length, e2 = Integer.parseInt(list2.get(j)[2]) + length;
                    if (list2.get(j)[0].equals(list1.get(i)[0])) {
                        if (getOverlapLength(s1, e1, s2, e2) != 0) {
                            {
                                List<Integer> temp = new ArrayList<>();
                                chr.add(list2.get(j)[0]);
                                temp.add(s1 + length);
                                temp.add(e1 - length);
                                temp.add(s2 + length);
                                temp.add(e2 - length);
                                lists.add(temp);
                            }
                        }
                    }
                }
            }
            for (int i = 0; i < lists.size(); i++) {
                List<Integer> l = lists.get(i);
                int s1 = l.get(0), e1 = l.get(1), s2 = l.get(2), e2 = l.get(3);
                int overlappingLength = getOverlapLength(s1 - length, e1 + length, s2 - length, e2 + length);
                double ratioA = overlappingLength, ratioB = overlappingLength;
                ratioA = ratioA / (e1 - s1 + 2 * length) * 100;
                ratioB = ratioB / (e2 - s2 + 2 * length) * 100;
                DecimalFormat df = new DecimalFormat("00.###");
                List<String> res = new ArrayList<>();
                res.add(chr.get(i) + ":" + s1 + "-" + e1);
                res.add(chr.get(i) + ":" + s2 + "-" + e2);
                res.add("" + overlappingLength);
                res.add("" + df.format(ratioA));
                res.add("" + df.format(ratioB));
                result.add(res);
            }
            map.put("result", result);
            map.put("total", result.size());
        }
        if (motif != null && !motif.equals("")) {
            File files;
            File files1;
            if (!motif.equals("Osi") && !motif.equals("Osj")) {
                files = new File(FileLocationConfig.MotifMeMeLocation + motif + FileLocationConfig.TFGeneMotifTransFile);
                if (files.exists()) {
                    files1 = null;
                    LineIterator it = FileUtils.lineIterator(files);
                    String line;
                    int index = 0;
                    while (it.hasNext()) {
                        line = it.nextLine();
                        if (index == 0) {
                            index++;
                            continue;
                        } else {
                            String[] strs = line.split("\t");
                            if (strs[0].equals(TFOneName)) {
                                if (!map.containsKey("oneFamily")) map.put("oneFamily", strs[3]);
                            }
                            if (strs[0].equals(TFTwoName)) {
                                if (!map.containsKey("twoFamily")) map.put("twoFamily", strs[3]);
                            }
                        }
                        index++;
                    }
                    it.close();
                }
            } else {
                files = new File(FileLocationConfig.MotifMeMeLocation + "Osi" + FileLocationConfig.TFGeneMotifTransFile);
                files1 = new File(FileLocationConfig.MotifMeMeLocation + "Osj" + FileLocationConfig.TFGeneMotifTransFile);
                if (files.exists()) {
                    LineIterator it = FileUtils.lineIterator(files);
                    String line;
                    int index = 0;
                    while (it.hasNext()) {
                        line = it.nextLine();
                        if (index == 0) {
                            index++;
                            continue;
                        } else {
                            String[] strs = line.split("\t");
                            if (strs[0].equals(TFOneName)) {
                                if (!map.containsKey("oneFamily")) map.put("oneFamily", strs[3]);
                            }
                            if (strs[0].equals(TFTwoName)) {
                                if (!map.containsKey("twoFamily")) map.put("twoFamily", strs[3]);
                            }
                        }
                        index++;
                    }
                    it.close();
                }
                if (files1.exists()) {
                    LineIterator it = FileUtils.lineIterator(files1);
                    String line;
                    int index = 0;
                    while (it.hasNext()) {
                        line = it.nextLine();
                        if (index == 0) {
                            index++;
                            continue;
                        } else {
                            String[] strs = line.split("\t");
                            if (strs[0].equals(TFOneName)) {
                                if (!map.containsKey("oneFamily")) map.put("oneFamily", strs[3]);
                            }
                            if (strs[0].equals(TFTwoName)) {
                                if (!map.containsKey("twoFamily")) map.put("twoFamily", strs[3]);
                            }
                        }
                        index++;
                    }
                    it.close();
                }
            }
        }
        map.put("oneName", TFOneName);
        map.put("twoName", TFTwoName);
        return map;
    }

    @Override
    public Map<String,Object> getTFFamilyAndTFName(String speciesName) throws IOException {
        Map<String,Object> map = new HashMap<>();
        String motif = getMotif(speciesName);
        if (motif != null && !motif.equals("")) {
            File files;
            File files1;
            if (!motif.equals("Osi") && !motif.equals("Osj")) {
                files = new File(FileLocationConfig.MotifMeMeLocation + motif + FileLocationConfig.TFGeneMotifTransFile);
                if (files.exists()) {
                    Map<String,List<String>> result = new HashMap<>();
                    List<String> familyList = new ArrayList<>();
                    files1 = null;
                    LineIterator it = FileUtils.lineIterator(files);
                    String line;
                    int index = 0;
                    while (it.hasNext()) {
                        line = it.nextLine();
                        if (index == 0) {
                            index++;
                            continue;
                        } else {
                            String[] strs = line.split("\t");
                            if(!result.containsKey(strs[3])){
                                List<String> temp = new ArrayList<>();
                                temp.add(strs[0]);
                                result.put(strs[3],temp);
                                familyList.add(strs[3]);
                            }
                            else{
                                List<String> temp = result.get(strs[3]);
                                temp.add(strs[0]);
                                result.replace(strs[3],temp);
                            }
                        }
                        index++;
                    }
                    it.close();
                    map.put("result",result);
                    map.put("familyList",familyList);
                }
            } else {
                files = new File(FileLocationConfig.MotifMeMeLocation + "Osi" + FileLocationConfig.TFGeneMotifTransFile);
                files1 = new File(FileLocationConfig.MotifMeMeLocation + "Osj" + FileLocationConfig.TFGeneMotifTransFile);
                Map<String,List<String>> result = new HashMap<>();
                List<String> familyList = new ArrayList<>();
                if (files.exists()) {
                    LineIterator it = FileUtils.lineIterator(files);
                    String line;
                    int index = 0;
                    while (it.hasNext()) {
                        line = it.nextLine();
                        if (index == 0) {
                            index++;
                            continue;
                        } else {
                            String[] strs = line.split("\t");
                            if(!result.containsKey(strs[3])){
                                List<String> temp = new ArrayList<>();
                                temp.add(strs[0]);
                                result.put(strs[3],temp);
                                familyList.add(strs[3]);
                            }
                            else{
                                List<String> temp = result.get(strs[3]);
                                temp.add(strs[0]);
                                result.replace(strs[3],temp);
                            }
                        }
                        index++;
                    }
                    it.close();
                }
                if (files1.exists()) {
                    LineIterator it = FileUtils.lineIterator(files1);
                    String line;
                    int index = 0;
                    while (it.hasNext()) {
                        line = it.nextLine();
                        if (index == 0) {
                            index++;
                            continue;
                        } else {
                            String[] strs = line.split("\t");
                            if(!result.containsKey(strs[3])){
                                List<String> temp = new ArrayList<>();
                                temp.add(strs[0]);
                                result.put(strs[3],temp);
                                familyList.add(strs[3]);
                            }
                            else{
                                List<String> temp = result.get(strs[3]);
                                temp.add(strs[0]);
                                result.replace(strs[3],temp);
                            }
                        }
                        index++;
                    }
                    it.close();
                }
            map.put("result",result);
            map.put("familyList",familyList);
            }
        }
        return map;
    }

    private Integer getOverlapLength(Integer s1, Integer e1, Integer s2, Integer e2) {
        int s = Math.min(e1, e2) - Math.max(s1, s2);
        return Math.max(0, s);
    }
}
