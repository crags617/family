/*var map = mapbox.map('map');
map.addLayer(mapbox.layer().id('http://a.tiles.mapbox.com/v3/crags617.cragin_homes_blnk.jsonp'));
var markerLayer = mapbox.markers.layer();
mapbox.markers.interaction(markerLayer);
markerLayer.features(myobj);
map.addLayer(markerLayer);
map.zoom(2).center({lat:25, lon:-43});

markerLayer.add_feature({"id":"Valencia, Spain","properties":{"num_months":4,"Type":"Caroline","start_month":9,"start_year":2010,"geo_accuracy":"administrative","Location":"Valencia, Spain","geo_longitude":-0.554565424514237,"geo_latitude":39.4015242860252,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-0.554565424514237,39.4015242860252]}}
);*/



//map.addLayer(mapbox.markers.layer().markerLayer.url('http://dl.dropbox.com/u/28523686/homes_v5.geojson'));


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

var myobj = [{"id":"12 Lebanon St, Hamilton, NY, USA","properties":{"num_months":16,"Type":"Caroline","start_month":1,"start_year":2011,"geo_accuracy":"apartment","Location":"12 Lebanon St, Hamilton, NY, USA","geo_longitude":-75.5452473843546,"geo_latitude":42.8266391930919,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-75.5452473843546,42.8266391930919]}},{"id":"13 Oak Drive, Hamilton, NY, USA","properties":{"num_months":20,"Type":"Caroline","start_month":9,"start_year":2008,"geo_accuracy":"dorm","Location":"13 Oak Drive, Hamilton, NY, USA","geo_longitude":-75.5347437187958,"geo_latitude":42.819614906585,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-75.5347437187958,42.819614906585]}},{"id":"Valencia, Spain","properties":{"num_months":4,"Type":"Caroline","start_month":9,"start_year":2010,"geo_accuracy":"administrative","Location":"Valencia, Spain","geo_longitude":-0.554565424514237,"geo_latitude":39.4015242860252,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-0.554565424514237,39.4015242860252]}},{"id":"Bernal Heights, San Francisco, CA, USA","properties":{"num_months":3,"Type":"Caroline","start_month":6,"start_year":2011,"geo_accuracy":"apartment","Location":"Bernal Heights, San Francisco, CA, USA","geo_longitude":-122.4158042,"geo_latitude":37.7429861,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-122.4158042,37.7429861]}},{"id":"38 Porter Ave, Somerville, MA","properties":{"num_months":6,"Type":"Eli","start_month":10,"start_year":2012,"geo_accuracy":"house","Location":"38 Porter Ave, Somerville, MA","geo_longitude":-71.1116706839109,"geo_latitude":42.3895815890925,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-71.1116706839109,42.3895815890925]}},{"id":"Boulder, CO","properties":{"num_months":12,"Type":"Eli","start_month":8,"start_year":2011,"geo_accuracy":"apartment","Location":"Boulder, CO","geo_longitude":-105.2705456,"geo_latitude":40.0149856,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-105.2705456,40.0149856]}},{"id":"Idaho, USA","properties":{"num_months":19,"Type":"Eli","start_month":5,"start_year":2009,"geo_accuracy":"house","Location":"Idaho, USA","geo_longitude":-114.0154071,"geo_latitude":43.6447642,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-114.0154071,43.6447642]}},{"id":"Miami, FL","properties":{"num_months":3,"Type":"Eli","start_month":9,"start_year":2003,"geo_accuracy":"apartment","Location":"Miami, FL","geo_longitude":-80.1936589,"geo_latitude":25.7742658,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-80.1936589,25.7742658]}},{"id":"Near Fenway, Boston, MA","properties":{"num_months":21,"Type":"Eli","start_month":9,"start_year":2006,"geo_accuracy":"residential","Location":"Near Fenway, Boston, MA","geo_longitude":-70.1926249893508,"geo_latitude":41.6861695326402,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-70.1926249893508,41.6861695326402]}},{"id":"NYC","properties":{"num_months":18,"Type":"Eli","start_month":6,"start_year":2008,"geo_accuracy":"apartment","Location":"NYC","geo_longitude":-73.9381405944442,"geo_latitude":40.6637996645291,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-73.9381405944442,40.6637996645291]}},{"id":"Providence, RI","properties":{"num_months":12,"Type":"Eli","start_month":9,"start_year":2005,"geo_accuracy":"apartment","Location":"Providence, RI","geo_longitude":-71.42178394995,"geo_latitude":41.8234843168237,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-71.42178394995,41.8234843168237]}},{"id":"1301 Hamilton St, Allentown, PA, USA","properties":{"num_months":213,"Type":"John","start_month":12,"start_year":1951,"geo_accuracy":"college","Location":"1301 Hamilton St, Allentown, PA, USA","geo_longitude":-75.4993381319357,"geo_latitude":40.5946192130645,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-75.4993381319357,40.5946192130645]}},{"id":"Bethlehem, PA","properties":{"num_months":32,"Type":"John","start_month":9,"start_year":1969,"geo_accuracy":"apartment","Location":"Bethlehem, PA","geo_longitude":-75.3786521,"geo_latitude":40.6178915,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-75.3786521,40.6178915]}},{"id":"Boston, MA","properties":{"num_months":2,"Type":"John","start_month":"","start_year":1981,"geo_accuracy":"apartment","Location":"Boston, MA","geo_longitude":-71.0595678,"geo_latitude":42.3604823,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-71.0595678,42.3604823]}},{"id":"Brockton, MA","properties":{"num_months":2,"Type":"John","start_month":"","start_year":1981,"geo_accuracy":"apartment","Location":"Brockton, MA","geo_longitude":-71.0183787,"geo_latitude":42.0834335,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-71.0183787,42.0834335]}},{"id":"Center Valley, PA","properties":{"num_months":24,"Type":"John","start_month":6,"start_year":1973,"geo_accuracy":"house","Location":"Center Valley, PA","geo_longitude":-75.393236,"geo_latitude":40.529266,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-75.393236,40.529266]}},{"id":"Elizabeth City, NC","properties":{"num_months":2,"Type":"John","start_month":"","start_year":1981,"geo_accuracy":"house","Location":"Elizabeth City, NC","geo_longitude":-76.2329677731256,"geo_latitude":36.2944766509228,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-76.2329677731256,36.2944766509228]}},{"id":"Moultrie, Georgia","properties":{"num_months":12,"Type":"John","start_month":"","start_year":1975,"geo_accuracy":"house","Location":"Moultrie, Georgia","geo_longitude":-83.7699931073995,"geo_latitude":31.1599185528616,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-83.7699931073995,31.1599185528616]}},{"id":"Rehoboth, MA","properties":{"num_months":2,"Type":"John","start_month":"","start_year":1981,"geo_accuracy":"apartment","Location":"Rehoboth, MA","geo_longitude":-71.2494938,"geo_latitude":41.8403786,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-71.2494938,41.8403786]}},{"id":"Richmond, VA, USA","properties":{"num_months":30,"Type":"John","start_month":"","start_year":1976,"geo_accuracy":"apartment","Location":"Richmond, VA, USA","geo_longitude":-77.4420183,"geo_latitude":37.541239,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-77.4420183,37.541239]}},{"id":"South Bethlehem, PA","properties":{"num_months":4,"Type":"John","start_month":1,"start_year":1973,"geo_accuracy":"apartment","Location":"South Bethlehem, PA","geo_longitude":-75.3662911,"geo_latitude":40.6109319,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-75.3662911,40.6109319]}},{"id":"Washington, DC","properties":{"num_months":4,"Type":"John","start_month":9,"start_year":1972,"geo_accuracy":"apartment","Location":"Washington, DC","geo_longitude":-77.0363716,"geo_latitude":38.8951148,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-77.0363716,38.8951148]}},{"id":"10 Lanark Rd, Brookline, MA","properties":{"num_months":24,"Type":"Marilyn","start_month":"","start_year":1980,"geo_accuracy":"apartment","Location":"10 Lanark Rd, Brookline, MA","geo_longitude":-71.1462105,"geo_latitude":42.3388287857143,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-71.1462105,42.3388287857143]}},{"id":"Brighton, MA","properties":{"num_months":12,"Type":"Marilyn","start_month":"","start_year":1975,"geo_accuracy":"apartment","Location":"Brighton, MA","geo_longitude":-70.9424417780866,"geo_latitude":42.126963462488,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-70.9424417780866,42.126963462488]}},{"id":"Great Neck, NY","properties":{"num_months":84,"Type":"Marilyn","start_month":"","start_year":1962,"geo_accuracy":"house","Location":"Great Neck, NY","geo_longitude":-73.7284647,"geo_latitude":40.8006567,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-73.7284647,40.8006567]}},{"id":"Ithaca, NY","properties":{"num_months":44,"Type":"Marilyn","start_month":9,"start_year":1969,"geo_accuracy":"house","Location":"Ithaca, NY","geo_longitude":-76.5031801203721,"geo_latitude":42.4441317737705,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-76.5031801203721,42.4441317737705]}},{"id":"Jamaica Plain, Boston, MA","properties":{"num_months":24,"Type":"Marilyn","start_month":"","start_year":1978,"geo_accuracy":"apartment","Location":"Jamaica Plain, Boston, MA","geo_longitude":-71.1203299,"geo_latitude":42.3098201,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-71.1203299,42.3098201]}},{"id":"Kew Gardens, Queens, NY","properties":{"num_months":6,"Type":"Marilyn","start_month":1,"start_year":1952,"geo_accuracy":"hamlet","Location":"Kew Gardens, Queens, NY","geo_longitude":-73.830742,"geo_latitude":40.7139415,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-73.830742,40.7139415]}},{"id":"Malverne, NY","properties":{"num_months":120,"Type":"Marilyn","start_month":7,"start_year":1952,"geo_accuracy":"house","Location":"Malverne, NY","geo_longitude":-73.6740191,"geo_latitude":40.6789916,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-73.6740191,40.6789916]}},{"id":"Providence","properties":{"num_months":24,"Type":"Marilyn","start_month":"","start_year":1976,"geo_accuracy":"apartment","Location":"Providence","geo_longitude":-71.42178394995,"geo_latitude":41.8234843168237,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-71.42178394995,41.8234843168237]}},{"id":"Upper West Side, NYC, NY","properties":{"num_months":20,"Type":"Marilyn","start_month":9,"start_year":1973,"geo_accuracy":"apartment","Location":"Upper West Side, NYC, NY","geo_longitude":-73.9741874,"geo_latitude":40.7859464,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-73.9741874,40.7859464]}},{"id":"10 Lanark Rd","properties":{"num_months":24,"Type":"Marilyn AND John","start_month":"","start_year":1982,"geo_accuracy":"apartment","Location":"10 Lanark Rd","geo_longitude":-71.1462105,"geo_latitude":42.3388287857143,"num_cragins":2},"type":"Feature","geometry":{"type":"Point","coordinates":[-71.1462105,42.3388287857143]}},{"id":"118 Huntington Ave, Boston, MA","properties":{"num_months":10,"Type":"the whole gang!","start_month":5,"start_year":2010,"geo_accuracy":"apartment","Location":"118 Huntington Ave, Boston, MA","geo_longitude":-71.0810351176471,"geo_latitude":42.3457241764706,"num_cragins":3},"type":"Feature","geometry":{"type":"Point","coordinates":[-71.0810351176471,42.3457241764706]}},{"id":"288 Shawmut Ave, Boston, MA","properties":{"num_months":480,"Type":"the whole gang!","start_month":2,"start_year":2011,"geo_accuracy":"apartment","Location":"288 Shawmut Ave, Boston, MA","geo_longitude":-71.0695055555556,"geo_latitude":42.3426815555556,"num_cragins":3},"type":"Feature","geometry":{"type":"Point","coordinates":[-71.0695055555556,42.3426815555556]}},{"id":"44 Penniman Rd, Brookline, MA","properties":{"num_months":236,"Type":"the whole gang!","start_month":9,"start_year":1990,"geo_accuracy":"house","Location":"44 Penniman Rd, Brookline, MA","geo_longitude":-71.1485375251536,"geo_latitude":42.3331675047986,"num_cragins":5},"type":"Feature","geometry":{"type":"Point","coordinates":[-71.1485375251536,42.3331675047986]}},{"id":"Truro, MA","properties":{"num_months":100,"Type":"the whole gang!","start_month":5,"start_year":2004,"geo_accuracy":"house","Location":"Truro, MA","geo_longitude":-70.0497457,"geo_latitude":41.993437,"num_cragins":5},"type":"Feature","geometry":{"type":"Point","coordinates":[-70.0497457,41.993437]}},{"id":"University of Richmond","properties":{"num_months":3,"Type":"Will","start_month":9,"start_year":2005,"geo_accuracy":"college","Location":"University of Richmond","geo_longitude":-77.539614,"geo_latitude":37.573961,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-77.539614,37.573961]}},{"id":"U of R","properties":{"num_months":8,"Type":"Will","start_month":9,"start_year":2005,"geo_accuracy":"college","Location":"U of R","geo_longitude":-77.539614,"geo_latitude":37.573961,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-77.539614,37.573961]}},{"id":"Richmond, VA","properties":{"num_months":17,"Type":"Will","start_month":1,"start_year":2007,"geo_accuracy":"college","Location":"Richmond, VA","geo_longitude":-77.539614,"geo_latitude":37.573961,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[-77.539614,37.573961]}},{"id":"Arusha, Tanzania","properties":{"num_months":1,"Type":"Will","start_month":7,"start_year":2004,"geo_accuracy":"administrative","Location":"Arusha, Tanzania","geo_longitude":35.9595341377556,"geo_latitude":-2.99512722557166,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[35.9595341377556,-2.99512722557166]}},{"id":"Arusha","properties":{"num_months":6,"Type":"Will","start_month":1,"start_year":2006,"geo_accuracy":"administrative","Location":"Arusha","geo_longitude":35.9595341377556,"geo_latitude":-2.99512722557166,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[35.9595341377556,-2.99512722557166]}},{"id":"Dadaab, Kenya","properties":{"num_months":2,"Type":"Will","start_month":3,"start_year":2012,"geo_accuracy":"hut","Location":"Dadaab, Kenya","geo_longitude":40.3076134027655,"geo_latitude":0.052030305202653,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[40.3076134027655,0.052030305202653]}},{"id":"Dar Es Salaam, Tanzania","properties":{"num_months":6,"Type":"Will","start_month":7,"start_year":2007,"geo_accuracy":"administrative","Location":"Dar Es Salaam, Tanzania","geo_longitude":39.2431439294103,"geo_latitude":-6.82686023597028,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[39.2431439294103,-6.82686023597028]}},{"id":"Goma, Democratic Republic of Congo","properties":{"num_months":24,"Type":"Will","start_month":8,"start_year":2009,"geo_accuracy":"residential","Location":"Goma, Democratic Republic of Congo","geo_longitude":22.4033432062625,"geo_latitude":-5.90523896021617,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[22.4033432062625,-5.90523896021617]}},{"id":"Dolo Ado, Ethiopia","properties":{"num_months":1,"Type":"Will","start_month":2,"start_year":2012,"geo_accuracy":"hut","Location":"Dolo Ado, Ethiopia","geo_longitude":42.0794163,"geo_latitude":4.1641748,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[42.0794163,4.1641748]}},{"id":"South Sudan","properties":{"num_months":10,"Type":"Will","start_month":10,"start_year":2012,"geo_accuracy":"hut","Location":"South Sudan","geo_longitude":30.05489,"geo_latitude":7.2653861,"num_cragins":1},"type":"Feature","geometry":{"type":"Point","coordinates":[30.05489,7.2653861]}}];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  var map = mapbox.map('map');
map.addLayer(mapbox.layer().id('http://a.tiles.mapbox.com/v3/crags617.cragin_homes_blnk.jsonp'));
/*var markerLayer = mapbox.markers.layer();
mapbox.markers.interaction(markerLayer);
markerLayer.features(myobj); , function() {
	
map.extent(markerLayer.extent());

    var tweten = document.getElementById('twenty-ten');
    var all = document.getElementById('ever');

    tweten.onclick = function(e) {
        all.className = '';
        this.className = 'active';
        // The filter function takes a GeoJSON feature object
        // and returns true to show it or false to hide it.
        markerLayer.filter(function(f) {
            //return f.properties['start_year'] === '2010';
            return f.properties["start_year"] == 2010;
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
map.addLayer(markerLayer);
map.zoom(2).center({lat:25, lon:-43});*/