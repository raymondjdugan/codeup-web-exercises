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
            createMarker(data.features[0].center, data.features[0].place_name)

        });
}
geocode(city, RAYMOND_DUGAN_KEY)

function getWeatherData(lon, lat) {
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_KEY,
        lat: lat,
        lon: lon,
        units: "imperial"
    }).then(function (weatherData) {
        const CURRENT_UTC_TIME = weatherData.current.dt
        const CURRENT_TEMP = weatherData.current.temp
        const CURRENT_HUMIDITY = weatherData.current.humidity
        const CURRENT_WIND_DIRECTION = findWindDirection(weatherData.current.wind_deg)
        const CURRENT_MAX_TEMP = Math.round(weatherData.daily[0].temp.max)
        const CURRENT_MIN_TEMP = Math.round(weatherData.daily[0].temp.min)

        $('#weather-cards').html(" ")
        $('body').addClass(currentBackground(CURRENT_UTC_TIME))

        $('#top-info').html(createHTML(CURRENT_UTC_TIME, CURRENT_TEMP, CURRENT_HUMIDITY, CURRENT_WIND_DIRECTION, CURRENT_MAX_TEMP, CURRENT_MIN_TEMP, city))

        $('#carousel-append').html(' ')
        weatherData.daily.forEach(function (day, i) {
            const DAILY_MAX_TEMP = day.temp.max
            const DAILY_MIN_TEMP = day.temp.min
            const DAILY_WEATHER_ICON = day.weather[0].icon
            const DAILY_WEATHER_DESCRIPTION = day.weather[0].description
            const DAILY_HUMIDITY = day.humidity
            const DAILY_WIND_DIRECTION = day.wind_deg
            const DAILY_BACKGROUND = setDailyBackground(day.weather[0].icon)
            const DAILY_TIME = day.dt

            if (i > 0 && i < 7) {
                $('#weather-cards').append(fiveDayForcastHTML(DAILY_MAX_TEMP, DAILY_MIN_TEMP,DAILY_WEATHER_ICON, DAILY_WEATHER_DESCRIPTION, DAILY_HUMIDITY, DAILY_WIND_DIRECTION, DAILY_BACKGROUND, day.dt))

            if (i === 1) {
                    $('#carousel-append').append(createCarousel(DAILY_MAX_TEMP, DAILY_MIN_TEMP, DAILY_WEATHER_ICON, DAILY_WEATHER_DESCRIPTION, DAILY_HUMIDITY, DAILY_WIND_DIRECTION, 'carousel-item active', DAILY_BACKGROUND, DAILY_TIME))
            } else if (i > 1 && i <= 7) {
                    $('#carousel-append').append(createCarousel(DAILY_MAX_TEMP, DAILY_MIN_TEMP, DAILY_WEATHER_ICON, DAILY_WEATHER_DESCRIPTION, DAILY_HUMIDITY, DAILY_WIND_DIRECTION, 'carousel-item', DAILY_BACKGROUND, DAILY_TIME))
                }
            }
        })

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
