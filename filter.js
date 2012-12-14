//define map with base layer
var map = mapbox.map('map', mapbox.layer().id('crags617.cragin_homes_blnk'));

var markersLayer = mapbox.markers.layer().url('../../family/homesv5.geojson', function() {

      var tweten = document.getElementById('twenty-ten');
      var all = document.getElementById('ever');

      tweten.onclick = function(e) {
          all.className = '';
          this.className = 'active';
          // The filter function takes a GeoJSON feature object
          // and returns true to show it or false to hide it.
          markersLayer.filter(function(f) {
              return f.properties['start_year'] === 2010;
          });
          return false;
      };

      all.onclick = function() {
          tweten.className = '';
          this.className = 'active';
          markersLayer.filter(function(f) {
                //Show all:
              return true;
          });
          return false;
      };

  });

  map.addLayer(markersLayer);

map.zoom(2).center({lat:25, lon:-43});

map.ui.attribution.add().content('<a href="http://mapbox.com/about/maps">Terms &amp; Feedback</a>');
