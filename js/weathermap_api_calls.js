function createHTML(timeZ, temp, humid, deg, curr_high, curr_low, city) {
    return `<div class="d-flex main-info">
                    <div class="" id="city_time">
                        <h5 id="city_name">${city}</h5>
                        <div id="input" class="d-flex justify-content-center">
                            <input type="image" src="img/search.png" width="30" alt="Search" class="d-flex align-items-center" id="btn">
                             <input type="search" placeholder="Search a city" id="in">
                        </div>
                        <h5 id="time">Time: ${setTime(timeZ)}</h5>
                    </div>
                    <div id="curr-temp">
                        <h5>Current Tempature: ${Math.round(temp)} °F</h5>
                    </div>
                    <div class="d-flex right-info curr-options">
                        <h5>Humidity: ${humid}%</h5>
                        <h5>Wind: ${findWindDirection(deg)}</h5>
                        <h5>High: ${curr_high} °F</h5>
                        <h5>Low: ${curr_low} °F</h5>
                 </div>
             </div>`
}

function fiveDayForcastHTML(day_high, day_low, icon, desc, hum, wind) {
    return `<div class="card">
                        <div class="card-header m-0 p-0 text-center">Date</div>
                            <div class="card-body py-0 px-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex flex-column">
                                        <div>High: ${Math.round(day_high)}°F</div>
                                        <div>Low: ${Math.round(day_low)}°F</div>
                                    </div>
                                    <div><img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt=""></div>
                                </div>
                            <div>${setCapitaization(desc)}</div>
                            <div>Humidity: ${hum}%</div>
                            <div>Wind: ${findWindDirection(wind)}</div>
                        </div>
                    </div>
            </div>`
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

function setTime(timeZ) {
    return new Intl.DateTimeFormat(navigator.location, {
        timeZone: timeZ,
        hour: 'numeric',
        minute: 'numeric'
    }).format(new Date())
}

function setCapitaization(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

$("#btn").click(function () {
    geocode($("#in").val(), RAYMOND_DUGAN_KEY)
})
