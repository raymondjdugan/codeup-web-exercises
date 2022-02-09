// Data for three restaurants
let locArray = [];
locArray[0] = {
    name: 'Central Texas BBQ',
    location: [-95.234762, 29.548016],
    address: "4110 Broadway St, Pearland, TX 77581",
    popupHTML: {
        imgSrc: 'img/bbq.jpeg',
        alt: 'BBQ Picture',
        heading: 'Best BBQ In Texas',
        link: "https://centralbbq.com/our-menu/"
    }
};
locArray[1] = {
    name: 'The Plaza',
    location: [-101.9382339, 35.1901106],
    address: '2101 S Soncy Rd, Amarillo, TX 79124',
    popupHTML: {
        imgSrc: 'img/marg.jpg',
        alt: 'BBQ Picture',
        heading: 'Best BBQ In Texas',
        link: "https://www.theplazarestaurant.com/menu/"
    }
};
locArray[2] = {
    name: 'Casa Bonita',
    location: [-105.0710252, 39.7419409],
    address: '6715 W Colfax Ave, Lakewood, CO 80214',
    popupHTML: {
        imgSrc: 'img/casa.jpg',
        alt: 'Casa Bonita Image',
        heading: '🔥Flaming Waterfalls🔥',
        link: "https://www.casabonitadenver.com/"
    }
};

// Token Declaration
mapboxgl.accessToken = RAYMOND_DUGAN_KEY;

// Creating the map
const map = new mapboxgl.Map(mapOptions());

// Function to create map options
function mapOptions() {
    return {
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/satellite-streets-v11', // style URL
        center: [-101.9382339, 35.1901106], // starting position [lng, lat]
        zoom: 10, // starting zoom
        pitch: 45,
        bearing: -17.6,
        antialias: true
    };
}

// Function to create geocoder and create the on function to set marker on the geocoder input
function geoCoder(){
    // Create geocoder
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken, // Set the access token
        mapboxgl: mapboxgl, // Set the mapbox-gl instance
    });

    // Add geocoder to map
    geocoder.addTo(map)

    // Function to get the coordinates and name of the input
    // Calls the create marker function
    geocoder.on('result', function(event){
        createMarker(event.result.center, event.result.place_name)
    })
}
geoCoder()

// Function to add zoom
function addZoom(mapObj){
    return mapObj.addControl(new mapboxgl.NavigationControl());
}
addZoom(map)


//Function to create the marker and call the create popup function
function createMarker(location, popInfo){
    return new mapboxgl.Marker()
        .setLngLat(location)
        .addTo(map)
        .setPopup(createPopup(popInfo));
}

// Function to create the popup
function createPopup(info){
    return new mapboxgl.Popup()
        .setHTML(info);
}


// Function to create the popup html string for the hard-coded data
function createHTML(htmlInfo){
    return `<div class="popup">
            <img src="${htmlInfo.popupHTML.imgSrc}" alt="${htmlInfo.popupHTML.alt}">
            <h6>${htmlInfo.popupHTML.heading}</h6>
            <p>Menu: <a href="${htmlInfo.popupHTML.link}">${htmlInfo.name}</a></p>
            </div>`
}

// Function to get the location of the hard coded data and call the create marker function
function getLocation(info, token) {
    geocode(info.address, token).then(function (coordinates) {
        createMarker(coordinates, createHTML(info))
    });
}

// This was looping through the hard coded data and setting marker for each.
function setRest(restData) {
    restData.forEach(function (restaurant) {
        getLocation(restaurant, RAYMOND_DUGAN_KEY)
    });
}
setRest(locArray)

const layerList = document.getElementById('menu');
const inputs = layerList.getElementsByTagName('input');

for (const input of inputs) {
    input.onclick = (layer) => {
        const layerId = layer.target.id;
        map.setStyle('mapbox://styles/mapbox/' + layerId);
    };
}

$('#hide').click(function (){
    $('svg').toggleClass('hidden')
})

map.on('load', () => {
// Insert the layer beneath any symbol layer.
    const layers = map.getStyle().layers;
    const labelLayerId = layers.find(
        (layer) => layer.type === 'symbol' && layer.layout['text-field']
    ).id;

// The 'building' layer in the Mapbox Streets
// vector tileset contains building height data
// from OpenStreetMap.
    map.addLayer(
        {
            'id': 'add-3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
                'fill-extrusion-color': '#aaa',

// Use an 'interpolate' expression to
// add a smooth transition effect to
// the buildings as the user zooms in.
                'fill-extrusion-height': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    15,
                    0,
                    15.05,
                    ['get', 'height']
                ],
                'fill-extrusion-base': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    15,
                    0,
                    15.05,
                    ['get', 'min_height']
                ],
                'fill-extrusion-opacity': 0.6
            }
        },
        labelLayerId
    );
});
// Added click functionality but did not like it for this exercise
// map.on('click', function (e) {
//     createMarker(e.lngLat)
// })

// function reverseLookUpSet(coords, token, map) {
//     reverseGeocode(coords, token).then(function (coordinates) {
//         console.log(coordinates)
//         // var popup = new mapboxgl.Popup()
//         //     .setHTML(info.popupHTML);
//         var marker = new mapboxgl.Marker()
//             .setLngLat(coordinates)
//             .addTo(map)
//         // .setPopup(popup);
//     });
// }
