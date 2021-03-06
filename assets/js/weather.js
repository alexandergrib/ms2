/*jshint esversion: 6 */

const apiKey = "888a73a8b27eb54c8d1ba56ed02ec435";
let coordinates;
const message = document.querySelector(".search-wrapper .msg");


function getWeather(inputVal) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => weatherHandler(data))
        .catch(() => {
            message.textContent = "Please search for a valid city.";
        });
    message.textContent = "";
}

function getWeatherByCoordinates(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => weatherHandler(data));
    message.textContent = "";
}

function weatherHandler(data) {
    const {coord, main, name, sys, weather} = data;
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    let temperature = main.temp;
    let tempIndicator = "C";
    //Check if weather item exists and replaces itself with new data
    if (document.querySelector(".cities li:last-child")) {
        const listItem = document.querySelector(".cities li:last-child");
        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
                <h2 class="city-name" data-name="${name},${sys.country}">
                  <span>${name}</span>
                  <sup>${sys.country}</sup>
                </h2>
                <div class="city-temp">${Math.round(temperature)}<sup>°${tempIndicator}</sup></div>
                <figure>
                  <img class="city-icon" src="${icon}" alt="${weather[0].description}">
                  <figcaption>${weather[0].description}</figcaption>
                </figure>`;
        li.innerHTML = markup;
        listItem.parentNode.replaceChild(li, listItem);
    } else {
        //Executes on first search for the city
        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
                <h2 class="city-name" data-name="${name},${sys.country}">
                  <span>${name}</span>
                  <sup>${sys.country}</sup>
                </h2>
                <div class="city-temp">${Math.round(temperature)}<sup>°${tempIndicator}</sup></div>
                <figure>
                  <img class="city-icon" src="${icon}" alt="${weather[0].description}">
                  <figcaption>${weather[0].description}</figcaption>
                </figure>`;
        li.innerHTML = markup;
        list.appendChild(li);
    }
    document.getElementById("textPlaceHolder").innerHTML = `<p>
         Your location: ${name}, ${coord.lat}, ${coord.lon} 
        </p>`;
    //Display your search query
    document.getElementById("current-city").innerHTML = `<div>         
         <span class="ribbon-temp">${Math.round(temperature)}°${tempIndicator}</span>              
         <span><img class="ribbon-weather-icon" src="${icon}" alt="${weather[0].description}"></span>
         <span>${name}, ${sys.country}</span>       
        </div>`;
    coordinates = {
        lat: coord.lat,
        lng: coord.lon
    };
    getNearbyPlaces(coordinates, 'restaurants');
    fetchNews(name);
    getCovidInfo(sys.country);
}

//Things TO DO ribbon handler
function searchOnClick(keyword) {
    let restaurants = document.getElementById("restaurants");
    let hotels = document.getElementById("hotels");
    let entertainment = document.getElementById("entertainment");
    getNearbyPlaces(coordinates, keyword);
    if (keyword === "restaurants") {
        restaurants.classList.add("mainColor");
        hotels.classList.remove("mainColor");
        entertainment.classList.remove("mainColor");
    } else if (keyword === "hotels") {
        restaurants.classList.remove("mainColor");
        hotels.classList.add("mainColor");
        entertainment.classList.remove("mainColor");
    } else {
        restaurants.classList.remove("mainColor");
        hotels.classList.remove("mainColor");
        entertainment.classList.add("mainColor");
    }
}
