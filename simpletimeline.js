var map = mapbox.map('map');
map.addLayer(mapbox.layer().id('cragin_homes_blnk'));

var timeline = document.getElementById('timeline'),
    controls = document.getElementById('controls');

var markerLayer = mapbox.markers.layer()
    // this is a quick optimization - otherwise all markers are briefly displayed
    // before filtering to 2001
    .filter(function() { return false })
    .url('../../family/homes_v5.geojson', function(err, features) {

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

    var stop = controls.appendChild(document.createElement('a')),
          play = controls.appendChild(document.createElement('a')),
          playStep;

    stop.innerHTML = 'STOP ■';
    play.innerHTML = 'PLAY ▶';

    play.onclick = function() {
        var step = 0;
        // Every quarter-second (250 ms) increment the year
        // we're looking at and show a new year. When
        // the end is reached, call clearInterval to stop
        // the animation.
        playStep = window.setInterval(function() {
            if (step < yearlist.length) {
                click_year(yearlist[step])();
                step++;
            } else {
                window.clearInterval(playStep);
            }
        }, 250);
    };

    stop.onclick = function() {
        window.clearInterval(playStep);
    };

    click_year(2010)();
});

map.addLayer(markerLayer);
map.zoom(3).center({ lat: 40, lon: -130 });

// Attribute map
map.ui.attribution.add()
    .content('<a href="http://mapbox.com/about/maps">Terms &amp; Feedback</a>');
