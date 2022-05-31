import * as genome from './assembly.js'
//let assembly=genome.Arabidopsis_thaliana
//import * as genome_tracks from './Anans_comosus_tracks.js'
let sp_tracks = new Array()

//Arabidopsis_thaliana
import * as Arabidopsis_thaliana_tracks from './Arabidopsis_thaliana_tracks.js'
sp_tracks['Arabidopsis_thaliana']=Arabidopsis_thaliana_tracks
sp_tracks['Arabidopsis_thaliana_seq']=genome.Arabidopsis_thaliana
//Anans_comosus
import * as Anans_comosus_tracks from './Anans_comosus_tracks.js'
sp_tracks['Anans_comosus']=Anans_comosus_tracks
sp_tracks['Anans_comosus_seq']=genome.Anans_comosus
//Brachypodium_distachyon
import * as Brachypodium_distachyon_tracks from './Brachypodium_distachyon_tracks.js'
sp_tracks['Brachypodium_distachyon']=Brachypodium_distachyon_tracks
sp_tracks['Brachypodium_distachyon_seq']=genome.Brachypodium_distachyon
//Citrullus_lanatus
import * as Citrullus_lanatus_tracks from './Citrullus_lanatus_tracks.js'
sp_tracks['Citrullus_lanatus']=Citrullus_lanatus_tracks
sp_tracks['Citrullus_lanatus_seq']=genome.Citrullus_lanatus
//Cucumis_melo
import * as Cucumis_melo_tracks from './Cucumis_melo_tracks.js'
sp_tracks['Cucumis_melo']=Cucumis_melo_tracks
sp_tracks['Cucumis_melo_seq']=genome.Cucumis_melo
//Eutrema_salsugineum
import * as Eutrema_salsugineum_tracks from './Eutrema_salsugineum_tracks.js'
sp_tracks['Eutrema_salsugineum']=Eutrema_salsugineum_tracks
sp_tracks['Eutrema_salsugineum_seq']=genome.Eutrema_salsugineum
//Gossypium_barbadense
import * as Gossypium_barbadense_tracks from './Gossypium_barbadense_tracks.js'
sp_tracks['Gossypium_barbadense']=Gossypium_barbadense_tracks
sp_tracks['Gossypium_barbadense_seq']=genome.Gossypium_barbadense
//Solanum_phureja
// import * as Solanum_phureja_tracks from './Solanum_phureja_tracks.js'
// sp_tracks['Solanum_phureja']=Solanum_phureja_tracks
// sp_tracks['Solanum_phureja_seq']=genome.Solanum_phureja
// //Spirodela_polyrhiza
// import * as Spirodela_polyrhiza_tracks from './Spirodela_polyrhiza_tracks.js'
// sp_tracks['Spirodela_polyrhiza']=Spirodela_polyrhiza_tracks
// sp_tracks['Spirodela_polyrhiza_seq']=genome.Spirodela_polyrhiza
//Cucumis_sativus
import * as Cucumis_sativus_tracks from './Cucumis_sativus_tracks.js'
sp_tracks['Cucumis_sativus']=Cucumis_sativus_tracks
sp_tracks['Cucumis_sativus_seq']=genome.Cucumis_sativus
//Carica_papaya
import * as Carica_papaya_tracks from './Carica_papaya_tracks.js'
sp_tracks['Carica_papaya']=Carica_papaya_tracks
sp_tracks['Carica_papaya_seq']=genome.Carica_papaya
//FraVesHawaii
import * as FraVesHawaii_tracks from './FraVesHawaii_tracks.js'
sp_tracks['FraVesHawaii']=FraVesHawaii_tracks
sp_tracks['FraVesHawaii_seq']=genome.FraVesHawaii
//Pyrus_bretschneideri
import * as Pyrus_bretschneideri_tracks from './Pyrus_bretschneideri_tracks.js'
sp_tracks['Pyrus_bretschneideri']=Pyrus_bretschneideri_tracks
sp_tracks['Pyrus_bretschneideri_seq']=genome.Pyrus_bretschneideri
//Gossypium_arboreum
import * as Gossypium_arboreum_tracks from './Gossypium_arboreum_tracks.js'
sp_tracks['Gossypium_arboreum']=Gossypium_arboreum_tracks
sp_tracks['Gossypium_arboreum_seq']=genome.Gossypium_arboreum
//Gossypium_hirsutum
import * as Gossypium_hirsutum_tracks from './Gossypium_hirsutum_tracks.js'
sp_tracks['Gossypium_hirsutum']=Gossypium_hirsutum_tracks
sp_tracks['Gossypium_hirsutum_seq']=genome.Gossypium_hirsutum
//Solanum_pennellii
import * as Solanum_pennellii_tracks from './Solanum_pennellii_tracks.js'
sp_tracks['Solanum_pennellii']=Solanum_pennellii_tracks
sp_tracks['Solanum_pennellii_seq']=genome.Solanum_pennellii
//Asparagus_officinalis
import * as Asparagus_officinalis_tracks from './Asparagus_officinalis_tracks.js'
sp_tracks['Asparagus_officinalis']=Asparagus_officinalis_tracks
sp_tracks['Asparagus_officinalis_seq']=genome.Asparagus_officinalis
//Arachis_hypogaea
import * as Arachis_hypogaea_tracks from './Arachis_hypogaea_tracks.js'
sp_tracks['Arachis_hypogaea']=Arachis_hypogaea_tracks
sp_tracks['Arachis_hypogaea_seq']=genome.Arachis_hypogaea
//Eucalyptus_grandis
import * as Eucalyptus_grandis_tracks from './Eucalyptus_grandis_tracks.js'
sp_tracks['Eucalyptus_grandis']=Eucalyptus_grandis_tracks
sp_tracks['Eucalyptus_grandis_seq']=genome.Eucalyptus_grandis
//Glycine_max
import * as Glycine_max_tracks from './Glycine_max_tracks.js'
sp_tracks['Glycine_max']=Glycine_max_tracks
sp_tracks['Glycine_max_seq']=genome.Glycine_max
//Gossypium_raimondii
import * as Gossypium_raimondii_tracks from './Gossypium_raimondii_tracks.js'
sp_tracks['Gossypium_raimondii']=Gossypium_raimondii_tracks
sp_tracks['Gossypium_raimondii_seq']=genome.Gossypium_raimondii
//Hordeum_vulgare
import * as Hordeum_vulgare_tracks from './Hordeum_vulgare_tracks.js'
sp_tracks['Hordeum_vulgare']=Hordeum_vulgare_tracks
sp_tracks['Hordeum_vulgare_seq']=genome.Hordeum_vulgare
//Malus_domestica
import * as Malus_domestica_tracks from './Malus_domestica_tracks.js'
sp_tracks['Malus_domestica']=Malus_domestica_tracks
sp_tracks['Malus_domestica_seq']=genome.Malus_domestica
//Marchantia_polymorpha
import * as Marchantia_polymorpha_tracks from './Marchantia_polymorpha_tracks.js'
sp_tracks['Marchantia_polymorpha']=Marchantia_polymorpha_tracks
sp_tracks['Marchantia_polymorpha_seq']=genome.Marchantia_polymorpha
//Medicago_truncatula
import * as Medicago_truncatula_tracks from './Medicago_truncatula_tracks.js'
sp_tracks['Medicago_truncatula']=Medicago_truncatula_tracks
sp_tracks['Medicago_truncatula_seq']=genome.Medicago_truncatula
//Musa_acuminata
import * as Musa_acuminata_tracks from './Musa_acuminata_tracks.js'
sp_tracks['Musa_acuminata']=Musa_acuminata_tracks
sp_tracks['Musa_acuminata_seq']=genome.Musa_acuminata
//Oryza_sativa
import * as Oryza_sativa_tracks from './Oryza_sativa_tracks.js'
sp_tracks['Oryza_sativa']=Oryza_sativa_tracks
sp_tracks['Oryza_sativa_seq']=genome.Oryza_sativa
//Phaseolus_vulgaris
import * as Phaseolus_vulgaris_tracks from './Phaseolus_vulgaris_tracks.js'
sp_tracks['Phaseolus_vulgaris']=Phaseolus_vulgaris_tracks
sp_tracks['Phaseolus_vulgaris_seq']=genome.Phaseolus_vulgaris
//Populus_trichocarpa
import * as Populus_trichocarpa_tracks from './Populus_trichocarpa_tracks.js'
sp_tracks['Populus_trichocarpa']=Populus_trichocarpa_tracks
sp_tracks['Populus_trichocarpa_seq']=genome.Populus_trichocarpa
//Prunus_persica
import * as Prunus_persica_tracks from './Prunus_persica_tracks.js'
sp_tracks['Prunus_persica']=Prunus_persica_tracks
sp_tracks['Prunus_persica_seq']=genome.Prunus_persica
//Setaria_italica
import * as Setaria_italica_tracks from './Setaria_italica_tracks.js'
sp_tracks['Setaria_italica']=Setaria_italica_tracks
sp_tracks['Setaria_italica_seq']=genome.Setaria_italica
//Setaria_viridis
import * as Setaria_viridis_tracks from './Setaria_viridis_tracks.js'
sp_tracks['Setaria_viridis']=Setaria_viridis_tracks
sp_tracks['Setaria_viridis_seq']=genome.Setaria_viridis
//Solanum_lycopersicum
import * as Solanum_lycopersicum_tracks from './Solanum_lycopersicum_tracks.js'
sp_tracks['Solanum_lycopersicum']=Solanum_lycopersicum_tracks
sp_tracks['Solanum_lycopersicum_seq']=genome.Solanum_lycopersicum
//Zea_mays
import * as Zea_mays_tracks from './Zea_mays_tracks.js'
sp_tracks['Zea_mays']=Zea_mays_tracks
sp_tracks['Zea_mays_seq']=genome.Zea_mays
//Sorghum_bicolor
import * as Sorghum_bicolor_tracks from './Sorghum_bicolor_tracks.js'
sp_tracks['Sorghum_bicolor']=Sorghum_bicolor_tracks
sp_tracks['Sorghum_bicolor_seq']=genome.Sorghum_bicolor
//Vitis_vinifera
import * as Vitis_vinifera_tracks from './Vitis_vinifera_tracks.js'
sp_tracks['Vitis_vinifera']=Vitis_vinifera_tracks
sp_tracks['Vitis_vinifera_seq']=genome.Vitis_vinifera
//Triticum_aestivum
import * as Triticum_aestivum_tracks from './Triticum_aestivum_tracks.js'
sp_tracks['Triticum_aestivum']=Triticum_aestivum_tracks
sp_tracks['Triticum_aestivum_seq']=genome.Triticum_aestivum
let keys=['Arabidopsis_thaliana','Anans_comosus','Brachypodium_distachyon','Citrullus_lanatus','Cucumis_melo','Eutrema_salsugineum','Gossypium_barbadense','Cucumis_sativus','Carica_papaya','FraVesHawaii','Pyrus_bretschneideri','Gossypium_arboreum','Gossypium_hirsutum','Solanum_pennellii','Asparagus_officinalis','Arachis_hypogaea','Eucalyptus_grandis','Glycine_max','Gossypium_raimondii','Hordeum_vulgare','Malus_domestica','Marchantia_polymorpha','Medicago_truncatula','Musa_acuminata','Oryza_sativa','Phaseolus_vulgaris','Populus_trichocarpa','Prunus_persica','Setaria_italica','Setaria_viridis','Solanum_lycopersicum','Zea_mays','Sorghum_bicolor','Vitis_vinifera','Triticum_aestivum']



//初始界面设定
let tracks=sp_tracks['Arabidopsis_thaliana'].tracks
let assembly=sp_tracks['Arabidopsis_thaliana_seq']
let genomeView = new JBrowseLinearGenomeView({
	container: document.getElementById('jbrowse_linear_view'),
	assembly,
	tracks,
	location: '1:10,210..21,798',
})



//物种选择按钮的开启
document.getElementById('spieces_change').onclick=function(){
	if(document.getElementById('spieces_button').style.display=='none'){
		document.getElementById('spieces_button').style.display='block'
	}
	else{
		document.getElementById('spieces_button').style.display='none'
	}
}

document.getElementById('spieces_button').onm


for(let j in keys){
	let btn=document.createElement('input');
	btn.setAttribute("type", "button");
	btn.setAttribute("id", keys[j]);
	//btn.setAttribute("class", "spbtn");
	btn.style.border='1px solid #CCC';
	btn.style.height='30px';
	btn.style.width='160px';
	btn.style.marginTop='5px';
	btn.style.marginLeft='5px';
	btn.style.backgroundColor='#FFF';
	btn.value=keys[j]
	btn.onmouseover=function(){
		this.style.borderColor='#309F7E';this.style.color='#309F7E'
	}
	btn.onmouseout=function(){
		this.style.borderColor='';this.style.color=''
	}
	btn.onclick=function(){
		let assembly=sp_tracks[this.id+'_seq']
		let tracks=sp_tracks[this.id].tracks
		let genomeView = new JBrowseLinearGenomeView({
			container: document.getElementById('jbrowse_linear_view'),
			assembly,
			tracks,
		})
	}
	
	document.getElementById('spieces_button').appendChild(btn);
}



/*


//let tracks=genometracks.tracks
document.getElementById('Anans_comosus').onclick=function(){

	let assembly=genome.Anans_comosus
	let tracks=Anans_comosus_tracks.tracks
	let genomeView = new JBrowseLinearGenomeView({
	container: document.getElementById('jbrowse_linear_view'),
	assembly,
	tracks,
})
}*/