function currentHTML(utc, temp, humid, windDir, curr_high, curr_low, icon, backgroundClass, city) {
    //language=HTML
    return `
        <div class="card ${backgroundClass}" id="main-info">
            <div class="card-header">
                <h3 class="m-0">Current Conditions</h3>
                <div class="flex-column d-none d-lg-flex">
                    <div class="h3 m-0">${city}</div>
                    <div>Time: ${setTime(utc)}</div>
                </div>
            </div>
            <div class="card-body">
                <div class="d-flex d-lg-none justify-content-between align-items-center">
                    <div class="h3 m-0">${city}</div>
                    <div>Time: ${setTime(utc)}</div>
                </div>
                <div class="mt-3 text-center" id="curr-temp">Current Temperature: ${Math.round(temp)} °F</div>
                <div class="d-flex" id="curr_temps">
                    <div class="d-flex" id="temps">
                        <div>High: ${Math.round(curr_high)}°F</div>
                        <div>Low: ${Math.round(curr_low)}°F</div>
                    </div>
                    <div>
                        <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">
                    </div>
                </div>
                <div class="d-flex flex-column" id="other-data">
                    <div>Humidity: ${humid}%</div>
                    <div>Wind: ${windDir}</div>

                </div>
            </div>
        </div>`
}

function hourlyHTML(utc, temp, icon, percentage, backgroundCLass) {
    //language=HTML
    return `
        <div class="card ${backgroundCLass} d-flex flex-column ">
            <div class="card-header">${setTime(utc)}</div>
            <div class="card-body">
                <div>${temp}°F</div>
                <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">
                <div>${percentage}%</div>
            </div>
        </div>`
}

function fiveDayForcastHTML(day_high, day_low, icon, desc, hum, windDir, backgroundClass, utc) {
    //language=HTML
    return `
        <div class="card d-none d-md-flex ${backgroundClass}">
            <div class="card-header m-0 p-0 text-center">${setDate(utc)}</div>
            <div class="card-body py-0 px-2">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column">
                        <div>High: ${Math.round(day_high)}°F</div>
                        <div>Low: ${Math.round(day_low)}°F</div>
                    </div>
                    <div>
                        <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">
                    </div>
                </div>
                <div>${setCapitaization(desc)}</div>
                <div>Humidity: ${hum}%</div>
                <div>Wind: ${windDir}</div>
            </div>
        </div>`
}

function createCarousel(day_high, day_low, icon, desc, hum, windDir, classNam, backgroundClass, utc) {
    //language=HTML
    return `
        <div class="${classNam} " data-interval="3000">
            <div class="card ${backgroundClass}">
                <div class="card-header d-flex justify-content-between">
                    <div class="h5 m-0">5 Day Forecast</div>
                    <div>${setDate(utc)}</div>
                </div>
                <div class="card-body px-3 pt-0 pb-5">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-column">
                            <div>High: ${Math.round(day_high)}°F</div>
                            <div>Low: ${Math.round(day_low)}°F</div>
                        </div>
                        <div>
                            <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">
                        </div>
                    </div>
                    <div>${setCapitaization(desc)}</div>
                    <div>Humidity: ${hum}%</div>
                    <div>Wind: ${windDir}</div>
                </div>
            </div>
        </div>`
}

function setTime(utc) {
    return new Intl.DateTimeFormat(navigator.language, {
        hour: "numeric",
        minute: "numeric"
    }).format(new Date(utc * 1000))
}

function setCapitaization(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function convertTime24Hour(utcTIme) {
    return new Date(utcTIme * 1000).toLocaleTimeString(navigator.language, {hour12: false})
}

function currentBackground(dt) {
    let currentTime = convertTime24Hour(dt)
    if (parseInt(currentTime.slice(0, 2)) > 7 && parseInt(currentTime.slice(0, 2)) < 18) {
        return 'clear-day'
    } else {
        return 'nightTime'
    }
}

function setDate(utc) {
    return new Date(utc * 1000).toLocaleDateString(navigator.language)
}

function setBackground(icon) {
    if (icon === '13d') {
        return 'snow' //snow
    } else if (icon === '09D' || icon === '10d' || icon === '11d') {
        return 'rain' // rain
    } else if (icon === '02d' || icon === '04d' || icon === '05d') {
        return 'cloudy' // cloud
    } else if (icon === '01n') {
        return 'nightTime'
    } else {
        return 'clear-day' // clear
    }
}

function rainPercentage(code) {
    let percentage = 0;
    const light = [200, 210, 230, 231, 232, 300, 301, 302, 310, 311, 312, 500, 520];
    const normal = [201, 211, 313, 321, 501, 521];
    const heavy = [202, 212, 221, 314, 502, 503, 504, 522, 531];

    light.forEach(weatherCode => {
        if (code === weatherCode){
            percentage = getRandomPercentage(1, 33);
        }
    })

    normal.forEach(weatherCode => {
        if (code === weatherCode){
            percentage = getRandomPercentage(34, 67);
        }
    })

    heavy.forEach(weatherCode => {
        if (code === weatherCode){
            percentage = getRandomPercentage(67, 100);
        }
    })
    return percentage;
}

function snowPercentage(code) {
    if (code === 200) {
        const lightSnow = [511, 600, 611, 612, 613];
        const normalSnow = [601, 615, 616, 620, 621];
        const heavySnow = [602, 622];
    }
}

function getRandomPercentage(max, min){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}
//Function to create the marker and call the create popup function
function createMarker(location, popInfo) {
    $('.mapboxgl-marker').remove()
    map.setCenter(location)
    return new mapboxgl.Marker()
        .setLngLat(location)
        .addTo(map)
        .setPopup(createPopup(popInfo));
}

// Function to create the popup
function createPopup(info) {
    return new mapboxgl.Popup()
        .setHTML(info);
}

function findWindDirection(deg) {
    if (deg > 11.25 && deg < 33.75) {
        return "NNE";
    } else if (deg > 33.75 && deg < 56.25) {
        return "ENE";
    } else if (deg > 56.25 && deg < 78.75) {
        return "E";
    } else if (deg > 78.75 && deg < 101.25) {
        return "ESE";
    } else if (deg > 101.25 && deg < 123.75) {
        return "ESE";
    } else if (deg > 123.75 && deg < 146.25) {
        return "SE";
    } else if (deg > 146.25 && deg < 168.75) {
        return "SSE";
    } else if (deg > 168.75 && deg < 191.25) {
        return "S";
    } else if (deg > 191.25 && deg < 213.75) {
        return "SSW";
    } else if (deg > 213.75 && deg < 236.25) {
        return "SW";
    } else if (deg > 236.25 && deg < 258.75) {
        return "WSW";
    } else if (deg > 258.75 && deg < 281.25) {
        return "W";
    } else if (deg > 281.25 && deg < 303.75) {
        return "WNW";
    } else if (deg > 303.75 && deg < 326.25) {
        return "NW";
    } else if (deg > 326.25 && deg < 348.75) {
        return "NNW";
    } else {
        return "N";
    }
}
