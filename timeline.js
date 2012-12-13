var map = mapbox.map('map');
map.addLayer(mapbox.layer().id('http://a.tiles.mapbox.com/v3/crags617.craginfam.jsonp'))
  .zoom(2)
  .center({lat:25,lon:-43});
map.interaction.auto(); //not working?
map.ui.zoomer.add();
map.setZoomRange(1,8);
map.smooth(true);

/*var timeline = document.getElementById('timeline'),
    controls = document.getElementById('controls');

var markerLayer = mapbox.markers.layer()

.filter(function() { return false })
.url('http://a.tiles.mapbox.com/v3/crags617.craginfam.jsonp', function(err, features) {

function click_year(y) {
    return function() {
        var living = document.getElementsByClassName('start_year');
        if (active.length) active[0].className = '';
        document.getElementById('y' + y).className = 'start_year'';
        markerLayer.filter(function(f) {
            return f.properties.year == y;
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

map.ui.attribution.add()
.content('<a href="http://mapbox.com/about/maps">Terms &amp; Feedback</a>');*/