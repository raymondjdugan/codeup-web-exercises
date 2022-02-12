    mapboxgl.accessToken = RAYMOND_DUGAN_KEY;
    mapboxgl.setRTLTextPlugin(
        'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js'
    );
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 10,
        center: [-101.8313, 35.2220],
        pitch: 60, // pitch in degrees
    });

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

    const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })

    $('#geocoder').append(geocoder.onAdd(map));
    $('.mapboxgl-ctrl-geocoder--input').attr('placeholder', 'Search Your City')

    geocoder.on('result', function (e){
        city = e.result.text
        geocode(city, RAYMOND_DUGAN_KEY)
    })

    map.on('click', function (e){
        reverseGeocode(e.lngLat, RAYMOND_DUGAN_KEY)
    })