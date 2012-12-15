//May want to implement Ease features for zooming.

var map = mapbox.map('map');
map.addLayer(mapbox.layer().id('crags617.cragin_homes_blnk'));
map.ui.zoomer.add();
map.ui.zoombox.add();
map.centerzoom({ lat: 25, lon: -43 }, 2).setZoomRange(1, 8);
//map.centerzoom({ lat: 40, lon: -83 }, 4).setZoomRange(1, 8);
var timeline = document.getElementById('timeline'),
    controls = document.getElementById('controls');

var markerLayer = mapbox.markers.layer()
    
    // hide all markers before filtering
    .filter(function() { return false })
    .url('../../family/homesv5.geojson', function(err, features) {

      //Set standard delay between clicks (in ms)
      	var delay = 250;
      
        // closure for clicking years
        function click_year(y) {
            return function() {
                var active = document.getElementsByClassName('year-active');
                if (active.length) active[0].className = '';
                document.getElementById('y' + y).className = 'year-active';
              	//Reset delay to 250:
              	delay = 250;
                markerLayer.filter(function(f) {
                    return f.properties.start_year == y;
                });
                return false;
            };
        }
      
        //find earliest year to include:
      
        var first = features[0].properties.start_year,
            current = 2012,
            importantyears = {};
      
        for (var i = 0; i < features.length; i++) {
            current = features[i].properties.start_year;
            if (first > current) first = current;
            importantyears[current] = true;
        }
        
        //find current/latest year:
        current = new Date().getFullYear();
        
        //make timeline:
        for (var y = first; y <= current; y++) {
            var a = timeline.appendChild(document.createElement('a'));
            a.innerHTML = y + ' ';
            a.id = 'y' + y;
          	
          	//only allow clicks on important years
          	if (importantyears[y]) {
              	a.href = '#';
            	a.onclick = click_year(y);
            }
        }

        var play = controls.appendChild(document.createElement('a')),
            stop = controls.appendChild(document.createElement('a')),
            playStep;
            
        play.innerHTML = 'PLAY ▶';
        play.href='#';
        stop.innerHTML = 'STOP ■';
        stop.href='#';
    
        /*play.onclick = function() {
          	map.centerzoom({ lat: 40, lon: -83 }, 4);
            var step = first;
            playStep = window.setInterval(function() {
            //Only click (to re-filter) important yrs, & stop animation current year.
                if (step <= current) {
                  if (step === 2003) map.centerzoom({ lat: 25, lon: -43 }, 2);
                  if (importantyears[step]) click_year(step)();
                  step++;
                  count++;
                } else {
                    window.clearInterval(playStep);
                }
            }, 200);
        };*/
        play.onclick = function() {
              //or: map.ease.location({ lat: 40, lon: -83 }).zoom(4).optimal();
              map.centerzoom({ lat: 40, lon: -83 }, 4, true);
              var step = first;
              playStep = window.setInterval(function() {
              if (step <= current) {
                if (step === 2003) map.centerzoom({ lat: 25, lon: -43 }, 2, true);
                //Only re-filter map for important years:
                if (importantyears[step]) click_year(step)();
                else delay=100;
                step++;
                count++;
              } else {
              //Stop animation at last year listed:
                  window.clearInterval(playStep);
              }
              }, delay);
          };
    
        stop.onclick = function() {
            window.clearInterval(playStep);
          	map.centerzoom({ lat: 25, lon: -43 }, 2);
        };
    
        click_year(1952)();
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
