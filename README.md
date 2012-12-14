# About Map

This map site displays a [TileMill Map](http://a.tiles.mapbox.com/v3/crags617.cragin_homes_blnk.html#0/0/0) with [colored Maki icons](http://mapbox.com/tilemill/docs/guides/adding-colors-to-maki-icons) from a [googledoc exported to geojson](http://devsummit.aspirationtech.org/index.php?title=Advanced_TileMill:_Taking_Mapping_to_Places_It_Has_Not_Gone).  My starting template was a blend of the [DC Weekend Picks Template](https://github.com/mapbox/weekend-picks-template) and [Live Tweets Template](https://github.com/mapbox/live-tweets-template).

### CSS styles

I forked style.css from the Live Tweets Template and added styles from the [Simple Timeline Example](http://mapbox.com/mapbox.js/example/timeline/) before making my own edits.  I used [Color Scheme Designer](http://colorschemedesigner.com/) to choose colors for the map and the site itself.

###JavaScript Interaction

Right now, the map is configured in `simpletimeline.js` rather than the standard `script.js`, because I'm still working on some other features (listed in the coming soon section) and testing them out via separate .js files.  There's lots of room for improvement here, but my focus was on getting a better understanding of JavaScript, JSON, and the [MapBox.js API](http://mapbox.com/mapbox.js/api/v0.6.7/#map.panBy). I explored many and implemented several functionalities based on [MapBox.js Examples](http://mapbox.com/mapbox.js/examples/).

### Other tools

I used [InkScape](http://inkscape.org/) (ran with [XQuartz](http://xquartz.macosforge.org/) on MAC OSX) to color the maki icons, [Prose.io](http://prose.io/) as my content editor for GitHub, and [Firebug](https://getfirebug.com/javascript) as my JavaScipt debugger.