function createHTML(timeZ, temp, humid, deg, curr_high, curr_low, city) {
    return `<div class="d-flex main-info">
                    <div class="" id="city_time">
                        <h5 id="city_name">${city}</h5>
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
    return `<div class="card d-none d-md-flex">
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

function createCarousel(day_high, day_low, icon, desc, hum, wind, classNam, backgroundClass, utc){
        return `<div class="${classNam} " data-interval="3000">
                        <div class="card ${backgroundClass}">
                            <div class="card-header text-center">${setDate(utc)}</div>
                                <div class="card-body px-3 pt-0 pb-5">
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
    const time =  new Intl.DateTimeFormat(navigator.location, {
        timeZone: timeZ,
        hour: 'numeric',
        minute: 'numeric'
    }).format(new Date())
    return time;
}

function setCapitaization(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function convertTime24Hour(utcTIme){
    return new Date(utcTIme * 1000).toLocaleTimeString(navigator.language, {hour12: false})
}

function currentBackground(dt){
    let currentTime = convertTime24Hour(dt)
    if (parseInt(currentTime.slice(0,2)) > 7 && parseInt(currentTime.slice(0,2)) < 18) {
        return 'clear-day'
    } else {
        return 'nightTime'
    }
}

function setDate(utc){
    let date = new Date(utc * 1000).toLocaleDateString(navigator.language)
    return date
}

function setDailyBackground(icon){
    if(icon === '13d'){
        return 'snow' //snow
    } else if(icon === '09D' || icon === '10d' || icon === '11d') {
        return 'rain' // rain
    } else if (icon === '02d' || icon === '04d' || icon === '05d') {
        return 'cloudy' // cloud
    } else {
        return 'clear-day' // clear
    }
}

$("#btn").click(function () {
    geocode($("#in").val(), RAYMOND_DUGAN_KEY)
})
