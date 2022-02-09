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
        para: 'Menu',
        link: ["https://centralbbq.com/our-menu/", 'Central Texas BBQ Menu']
    }
};
locArray[1] = {
    name: 'The Plaza',
    location: [-101.9382339, 35.1901106],
    address: '2101 S Soncy Rd, Amarillo, TX 79124',
    popupHTML: {
        imgSrc: 'img/bbq.jpeg',
        alt: 'BBQ Picture',
        heading: 'Best BBQ In Texas',
        para: 'Menu',
        link: ["https://www.theplazarestaurant.com/menu/", 'The Plaza Menu']
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
        para: 'Menu',
        link: ["https://www.casabonitadenver.com/", 'Casa Bonita']
    }
};


mapboxgl.accessToken = RAYMOND_DUGAN_KEY;

const map = new mapboxgl.Map(mapOptions());

function mapOptions() {
    return {
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/satellite-streets-v11', // style URL
        center: [-101.9382339, 35.1901106], // starting position [lng, lat]
        zoom: 10 // starting zoom
    };
}

function geoCoder(){
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken, // Set the access token
        mapboxgl: mapboxgl, // Set the mapbox-gl instance
    });

    geocoder.addTo(map)

    geocoder.on('result', function(event){
        console.log(event.result)
        createMarker(event.result.center, event.result.place_name)
    })
}
geoCoder()


function addZoom(mapObj){
    return mapObj.addControl(new mapboxgl.NavigationControl());
}
addZoom(map)

function createMarker(location, popInfo){
    return new mapboxgl.Marker()
        .setLngLat(location)
        .addTo(map)
        .setPopup(createPopup(popInfo));
}

function createPopup(info){
    return new mapboxgl.Popup()
        .setHTML(info);
}

function createMarkerAndPopup(location, info) {
    var popup = new mapboxgl.Popup()
        .setHTML(info);
    return new mapboxgl.Marker()
        .setLngLat(location)
        .addTo(map)
        .setPopup(popup);
}

function getLocation(info, token) {
    geocode(info.address, token).then(function (coordinates) {
        createMarkerAndPopup(coordinates, createHTML(info))
    });
}


// This was looping through the hard coded data and setting marker for each.
function setRest(restData) {
    restData.forEach(function (restaurant) {
        getLocation(restaurant, RAYMOND_DUGAN_KEY)
    });
}
setRest(locArray)


// Added click functionallity but did not like it for this exercise
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
