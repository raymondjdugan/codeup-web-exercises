let city = "Amarillo"

function geocode(search, token = RAYMOND_DUGAN_KEY) {
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

geocode(city)

function getWeatherData(lon, lat) {
    console.log(lon, lat)
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_KEY,
        lat: lat,
        lon: lon,
        units: "imperial"
    }).then(function (data) {
        console.log('The entire response:', data);
        console.log('Diving in - here is current information: ', data.current);
        console.log('A step further - information for tomorrow: ', data.daily[1]);
        $('#top-info').html(createHTML(data.timezone, data.current.temp, data.current.humidity, data.current.wind_deg, Math.round(data.daily[0].temp.max), Math.round(data.daily[0].temp.min), city))

        data.daily.forEach(function (day, i) {
            if (i > 0 && i < 7) {
                $('#weather-cards').append(fiveDayForcastHTML(day.temp.max, day.temp.min, day.weather[0].icon, day.weather[0].description, day.humidity, day.wind_deg))
            }

        })
    })
}
