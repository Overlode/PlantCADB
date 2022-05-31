import * as genome from "./jbrowse/assenmble.js"
var assembly=genome.Pdeltoides
//import * as genome_tracks from '/static/GB/js/Pdeltoides_tracks.js'
//var tracks=genome_tracks.Pdeltoides_tracks
var genomeView = new JBrowseLinearView({
	container: document.getElementById('jbrowse_linear_view'),
	assembly,
	//tracks,
	//location: 'Chr01:10,210..121,798',
})
