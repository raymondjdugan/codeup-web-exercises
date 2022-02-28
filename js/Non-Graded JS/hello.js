const map = function (){
    mapboxgl.accessToken = RAYMOND_DUGAN_KEY;
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 10,
        center: [-101.8313, 35.2220],
        pitch: 50, // pitch in degrees
    });
}
console.log(map())
const geocoder = function() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });
}
console.log(geocoder())
