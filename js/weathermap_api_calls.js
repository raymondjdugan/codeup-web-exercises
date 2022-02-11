let city = "Amarillo"

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function (res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function (data) {
            let [lon, lat] = data.features[0].center;
            getWeatherData(lon, lat)
        });
}
geocode(city, RAYMOND_DUGAN_KEY)

function getWeatherData(lon, lat) {
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_KEY,
        lat: lat,
        lon: lon,
        units: "imperial"
    }).then(function (data) {

        $('#top-info').html(createHTML(data.timezone, data.current.temp, data.current.humidity, data.current.wind_deg, Math.round(data.daily[0].temp.max), Math.round(data.daily[0].temp.min), city))
        $('#weather-cards').html("")
        $('#carousel-append').html('')

        data.daily.forEach(function (day, i) {
            if (i > 0 && i < 7) {
                $('#weather-cards').append(fiveDayForcastHTML(day.temp.max, day.temp.min, day.weather[0].icon, day.weather[0].description, day.humidity, day.wind_deg, setDailyBackground(day.weather[0].icon), day.dt))

            if (i === 1) {
                    $('#carousel-append').append(createCarousel(day.temp.max, day.temp.min, day.weather[0].icon, day.weather[0].description, day.humidity, day.wind_deg, 'carousel-item active', setDailyBackground(day.weather[0].icon), day.dt))
            } else if (i > 1 && i <= 7) {
                    $('#carousel-append').append(createCarousel(day.temp.max, day.temp.min, day.weather[0].icon, day.weather[0].description, day.humidity, day.wind_deg, 'carousel-item', setDailyBackground(day.weather[0].icon), day.dt))
                }
            }
        })
        $('body').addClass(currentBackground(data.current.dt))
    })
}
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            console.log(data)
            const cityArray = data.features[0].place_name.split(', ')
            city =  cityArray[1]
            geocode(city, RAYMOND_DUGAN_KEY)
            createMarker(coordinates, data.features[0].place_name)
        });
}
