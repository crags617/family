var map = mapbox.map('map', mapbox.layer().id('crags617.cragin_homes_blnk'));

/*var markerLayer = mapbox.markers.layer();
markerLayer.url('../../family/homesv5.geojson');

map.addLayer(markerLayer);*/

map.addLayer(mapbox.markers.layer().url('../../family/homesv5.geojson'));

map.zoom(2).center({lat:25, lon:-43});

map.ui.attribution.add().content('<a href="http://mapbox.com/about/maps">Terms &amp; Feedback</a>');
