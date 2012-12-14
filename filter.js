var map = mapbox.map('map', mapbox.layer().id('crags617.cragin_homes_blnk'));

/*var markerLayer = mapbox.markers.layer().url('../../family/homesv5.geojson');
map.addLayer(markerLayer);*/

//map.addLayer(mapbox.markers.layer().url('../../family/homesv5.geojson'));

var markersLayer = mapbox.markers.layer().url('../../family/homesv5.geojson', function() {

      // This code is in the second callback to id because it depends
      // on the features being loaded asynchronously. If it were put right
      // after the call to .id(), the markers layer wouldn't contain any
      // data - it would still be on its way from MapBox to the browser.

      // Cinch the map display to show all markers

      var tweten = document.getElementById('twenty-ten');
      var all = document.getElementById('ever');

      tweten.onclick = function(e) {
          all.className = '';
          this.className = 'active';
          // The filter function takes a GeoJSON feature object
          // and returns true to show it or false to hide it.
          markersLayer.filter(function(f) {
              return f.properties['start_year'] === '2010';
              //OR return f.properties['start_year'] == 2010; //look up
          });
          return false;
      };

      all.onclick = function() {
          tweten.className = '';
          this.className = 'active';
          markersLayer.filter(function(f) {
              // Returning true for all markers shows everything.
              return true;
          });
          return false;
      };

  });

  map.addLayer(markersLayer);

map.zoom(2).center({lat:25, lon:-43});

map.ui.attribution.add().content('<a href="http://mapbox.com/about/maps">Terms &amp; Feedback</a>');
