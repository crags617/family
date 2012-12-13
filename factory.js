//create base layer
var base = mapbox.layer().id('crags617.cragin_homes_blnk');

//create marker layer
var markerLayer = mapbox.markers.layer();
markerLayer.url('../../family/homesv5.geojson')
		   .factory( function(homes) {
	var img = document.createElement('img');
	img.className = '.marker-image';
	img.setAttribute('src', 'http://dl.dropbox.com/u/28523686/mHouse-24.png');
	return img;
});

//create map with no handlers (no zoom/pan)
var map = mapbox.map('map', layer, null, []); 
//OR var map = mapbox.map('map', [layer, markerLayer], null, []); 

map.centerzoom({lat: 25, lon: -43 }, 2);

map.addLayer(markerLayer)
   .setExtent(markerLayer.extent());

map.ui.attribution.add()
				  .content('<a href="http://mapbox.com/about/maps">Terms &amp; Feedback</a>');
