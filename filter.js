var map = mapbox.map('map');

  map.addLayer(mapbox.layer().id('http://a.tiles.mapbox.com/v3/crags617.cragin_homes_blnk.jsonp'));

  var markersLayer = mapbox.markers.layer().id('http://a.tiles.mapbox.com/v3/crags617.homes_solo.jsonp', function() {

      map.extent(markersLayer.extent());

      var tweten = document.getElementById('twenty-ten');
      var all = document.getElementById('ever');

      tweten.onclick = function(e) {
          all.className = '';
          this.className = 'active';
          // The filter function takes a GeoJSON feature object
          // and returns true to show it or false to hide it.
          markersLayer.filter(function(f) {
              return f.properties['start_year'] === '2010';
              //return f.properties['start_year'] == 2010;
          });
          return false;
      };

      all.onclick = function() {
          tweten.className = '';
          this.className = 'active';
          markersLayer.filter(function(f) {
              return true; //shows everything
          });
          return false;
      };

  });

  map.addLayer(markersLayer);

  // Attribute map
  map.ui.attribution.add()
      .content('<a href="http://mapbox.com/about/maps">Terms &amp; Feedback</a>');