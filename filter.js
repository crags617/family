var map = mapbox.map('map');
map.addLayer(mapbox.layer().id('crags617.cragin_homes_blnk'));

var markerLayer = mapbox.markers.layer();
markerLayer.url('../../homesv5.geojson');

map.addLayer(markerLayer);

map.zoom(2).center({lat:25, lon:-43});

map.ui.attribution.add()
				  .content('<a href="http://mapbox.com/about/maps">Terms &amp; Feedback</a>');