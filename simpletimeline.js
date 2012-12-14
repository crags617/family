var map = mapbox.map('map');
map.addLayer(mapbox.layer().id('crags617.cragin_homes_blnk'));
map.ui.zoomer.add();
map.ui.zoombox.add();
map.centerzoom({ lat: 25, lon: -43 }, 2).setZoomRange(1, 8);
var timeline = document.getElementById('timeline'),
    controls = document.getElementById('controls');

var markerLayer = mapbox.markers.layer()
    
    // this is a quick optimization - otherwise all markers are briefly displayed
    // before filtering to 2001
    .filter(function() { return false })
    .url('../../family/homesv5.geojson', function(err, features) {

        // A closure for clicking years. You give it a year, and it returns a function
        // that, when run, clicks that year. It's this way in order to be used as both an
        // event handler and run manually.
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
    
        var years = {},
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
                if (step < yearlist.length) {
                    // Increment year every 750ms.
                    click_year(yearlist[step])();
                    step++;
                } else {
                    // Stop animation at end of yearlist.
                    window.clearInterval(playStep);
                }
            }, 750);
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
