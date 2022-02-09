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
    popupHTML: `<h6>Best Ranch Waters In The State</h6>`
};
locArray[2] = {
    name: 'Casa Bonita',
    location: [-105.0710252, 39.7419409],
    address: '6715 W Colfax Ave, Lakewood, CO 80214',
    popupHTML: `<h6>Flaming Waterfall. Must I Say Anything More?</h6>`
};


mapboxgl.accessToken = RAYMOND_DUGAN_KEY;

const map = showMap(mapOptions());

function showMap(options) {
    return new mapboxgl.Map(options);

}

function mapOptions() {
    return {
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/satellite-streets-v11', // style URL
        center: [-95.28793, 29.563305], // starting position [lng, lat]
        zoom: 19 // starting zoom
    };
}

function createHTML(restInfo) {
    return `<div class="popup">
            <img src="${restInfo.popupHTML.imgSrc}" alt="${restInfo.popupHTML.alt}">
            <h6>${restInfo.popupHTML.heading}</h6>
            <p>${restInfo.popupHTML.para}: 
            <a href="${restInfo.popupHTML.link[0]}">${restInfo.popupHTML.link[1]}</a></p>
            </div>`
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

function setRest(restData) {
    restData.forEach(function (restaurant) {
        getLocation(restaurant, RAYMOND_DUGAN_KEY)
    });
}

setRest(locArray)

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);
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
