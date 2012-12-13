var map = mapbox.map('map');
map.addLayer(mapbox.layer().id('http://a.tiles.mapbox.com/v3/crags617.cragin_homes_blnk.jsonp'));
var markerLayer = mapbox.markers.layer();
mapbox.markers.interaction(markerLayer);
/*map.addLayer(markerLayer);
map.zoom(2).center({lat:25, lon:-43});*/

map.addLayer(mapbox.markers.layer().markerLayer.url('http://dl.dropbox.com/u/28523686/homes_v5.geojson'));
map.zoom(2).center({lat:25, lon:-43});
//markerLayer.url('http://dl.dropbox.com/u/28523686/homes_v5.geojson');

/*var markerLayer = mapbox.markers.layer().url('http://dl.dropbox.com/u/28523686/homes_v5.geojson'), function() {

    map.extent(markerLayer.extent());

    var tweten = document.getElementById('twenty-ten');
    var all = document.getElementById('ever');

    tweten.onclick = function(e) {
        all.className = '';
        this.className = 'active';
        // The filter function takes a GeoJSON feature object
        // and returns true to show it or false to hide it.
        markerLayer.filter(function(f) {
            return f.properties['start_year'] === '2010';
            //return f.properties['start_year'] == 2010;
        });
        return false;
    };

    all.onclick = function() {
        tweten.className = '';
        this.className = 'active';
        markerLayer.filter(function(f) {
            return true; //shows everything
        });
        return false;
    };

});
map.addLayer(markerLayer);*/