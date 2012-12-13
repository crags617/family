// Create and load map
$('#map').mapbox('http://a.tiles.mapbox.com/v3/crags617.craginfam.jsonp', function(map, tilejson) {

    map.setZoomRange(0, 8);

    // Add share control
    mapbox.share().map(map).add();

    // Get description from tilejson
    $('p.description').text(tilejson.description);


    var container = $('#markerfilters');
    $.each(tilejson.markers.markers(), function(index, homes) {
        var y = m.data.properties['start_year'];

        if (container.find('[href="#' + y + '"]').length) return;

        var el = $(document.createElement('a'))
            .addClass('markerfilter')
            .attr('href', '#' + y)
            .css('background-image', 'url(http://dl.dropbox.com/u/28523686/rHouse-24.png)')
            .bind('click', filter);
        container.append(el);
    });


    $('[href="#all"]').bind('click', filter);


    function filter(e) {
        container.find('a').removeClass('selected');
        var id = $(this).addClass('selected').attr('href').replace('#', '');
        tilejson.markers.filter(function(feature) {
            return feature.properties['marker-symbol'] == id || id == 'all';
        });
        return false;
    }
});