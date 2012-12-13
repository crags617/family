var map = mapbox.map('map');
map.addLayer(mapbox.layer().id('crags617.cragin_homes_blnk'));

//create marker layer
var markerLayer = mapbox.markers.layer();
markerLayer.url('../../family/homesv5.geojson')
		   .factory( function(homes) {
	var img = document.createElement('img');
	img.className = '.marker-image';
	img.setAttribute('src', 'http://dl.dropbox.com/u/28523686/mHouse-24.png');
	return img;
});

//add markers to map
map.addLayer(markerLayer)
   .setExtent(markerLayer.extent());

map.zoom(2).center({lat:25, lon:-43});

map.ui.attribution.add()
				  .content('<a href="http://mapbox.com/about/maps">Terms &amp; Feedback</a>');
