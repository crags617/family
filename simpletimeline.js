var map = mapbox.map('map');
map.addLayer(mapbox.layer().id('crags617.cragin_homes_blnk'));
map.ui.zoomer.add();
map.ui.zoombox.add();
map.centerzoom({ lat: 25, lon: -43 }, 2).setZoomRange(1, 8);
var timeline = document.getElementById('timeline'),
    controls = document.getElementById('controls');

var markerLayer = mapbox.markers.layer()
    
    // hide all markers before filtering
    .filter(function() { return false })
    .url('../../family/homesv5.geojson', function(err, features) {

        // closure for clicking years
        function click_year(y) {
            return function() {
                var active = document.getElementsByClassName('year-active');
                if (active.length) active[0].className = '';
                document.getElementById('y' + y).className = 'year-active';
                markerLayer.filter(function(f) {
                    return f.properties.start_year == y;
                });
                return false;
            };
        }
    
        /*var years = {},
            yearlist = [],
            year_links = [];
    
        for (var i = 0; i < features.length; i++) {
            years[features[i].properties.start_year] = true;
        }
    
        for (var y in years) yearlist.push(y);
        yearlist.sort();
    
        for (var i = 0; i < yearlist.length; i++) {
            var a = timeline.appendChild(document.createElement('a'));
            a.innerHTML = yearlist[i] + ' ';
            a.id = 'y' + yearlist[i];
            a.href = '#';
            a.onclick = click_year(yearlist[i]);
        }*/
      
              //find earliest data year to include:
        var first = features[0].properties.start_year,
            current = 2012,
            years = {};
        
        for (var i = 0; i < features.length; i++) {
            current = features[i].properties.start_year;
            if (first > current) first = current;
            years[current] = true;
        }
        
        //find current/latest year:
        current = new Date().getFullYear();
        
        //make timeline:
        for (var y = first; y <= current; y++) {
            var a = timeline.appendChild(document.createElement('a'));
             a.innerHTML = y + ' ';
             a.id = 'y' + y;
             a.href = '#';
             a.onclick = click_year(y);
        }

    
        var play = controls.appendChild(document.createElement('a')),
            stop = controls.appendChild(document.createElement('a')),
            playStep;
            
        play.innerHTML = 'PLAY ▶';
        play.href='#';
        stop.innerHTML = 'STOP ■';
        stop.href='#';
        
    
        play.onclick = function() {
            var step = 0;
            playStep = window.setInterval(function() {
            //Only click start_years, and stop animation current year.
                if (step < current) {
                  	if (years[y]) click_year(yearlist[step])();
                    step++;
                } else {
                    window.clearInterval(playStep);
                }
            }, 500);
        };
    
        stop.onclick = function() {
            window.clearInterval(playStep);
        };
    
        click_year(1990)();
    })
    .factory(function(f) {
        var img = document.createElement('img');
        img.className = 'marker-image';
        img.setAttribute('src', 'http://dl.dropbox.com/u/28523686/mHouse-18.png');
        return img;
    });

map.addLayer(markerLayer);

// Attribute map
map.ui.attribution.add()
    .content('<a href="http://mapbox.com/about/maps">Terms &amp; Feedback</a>');
