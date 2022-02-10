$().ready(function (){
    mapboxgl.accessToken = RAYMOND_DUGAN_KEY;
    mapboxgl.setRTLTextPlugin(
        'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js'
    );
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 10,
        center: [-98.4916, 29.4252],
        pitch: 60, // pitch in degrees
    });

    mapboxgl.setRTLTextPlugin(
        'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js'
    );

    map.on('load', function(){
        map.addLayer({
            "id": "simple-tiles",
            "type": "raster",
            "source": {
                "type": "raster",
                "tiles": [`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${OPEN_WEATHER_KEY}`],
                "tileSize": 256
            },
            "minzoom": 0,
            "maxzoom": 22
        });
    });

    map.on('load', () => {
        map.setLayoutProperty('country-label', 'text-field', [
            'format',
            ['get', 'name_en'],
            { 'font-scale': 1.2 },
            '\n',
            {},
            ['get', 'name'],
            {
                'font-scale': 0.8,
                'text-font': [
                    'literal',
                    ['DIN Offc Pro Italic', 'Arial Unicode MS Regular']
                ]
            }
        ]);
    });

    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );

})
