/*SUBSCRIBE HERE FOR API KEY: https://home.openweathermap.org/users/sign_up*/
const apiKey = "888a73a8b27eb54c8d1ba56ed02ec435";


//function called in main.js L71
function getWeather(inputVal) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const {coord, main, name, sys, weather} = data;
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
                weather[0]["icon"]
            }.svg`;


            temperature = main.temp;
            tempIndicator = "C"


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
                  <img class="city-icon" src="${icon}" alt="${
                    weather[0]["description"]
                }">
                  <figcaption>${weather[0]["description"]}</figcaption>
                </figure>
              `;
                li.innerHTML = markup;

                listItem.parentNode.replaceChild(li, listItem);
                locations.length = 0;  //empties array when searched for new location
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
                  <img class="city-icon" src="${icon}" alt="${
                    weather[0]["description"]
                }">
                  <figcaption>${weather[0]["description"]}</figcaption>
                </figure>
              `;
                li.innerHTML = markup;


                list.appendChild(li);
            }


            document.getElementById("textPlaceHolder").innerHTML = `${name}, ${coord.lat}, ${coord.lon} `;  //replace with call to google map api



            //post coordinates
            coordinates = {
                lat: coord.lat,
                lng: coord.lon
            };


            //requests news
            // fetchNews(sys.country.toLowerCase());
            doSearch("news", name);
            //sets home position marker
            // setMarkers(coord);
            //gets info for places around
            // deleteMarkers();  //if activated markers are erased but not shown

            // setTimeout(getPlaces(coordinates), 3000);


            getPlaces(coordinates);

        })
        .catch(() => {
            msg.textContent = "Please search for a valid city 😩";
        });

    msg.textContent = "";
    form.reset();

}


function getWeatherByCoordinates(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const {coord, main, name, sys, weather} = data;
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
                weather[0]["icon"]
            }.svg`;


            temperature = main.temp;
            tempIndicator = "C"


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
                  <img class="city-icon" src="${icon}" alt="${
                    weather[0]["description"]
                }">
                  <figcaption>${weather[0]["description"]}</figcaption>
                </figure>
              `;
                li.innerHTML = markup;

                listItem.parentNode.replaceChild(li, listItem);
                locations.length = 0;  //empties array when searched for new location
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
                  <img class="city-icon" src="${icon}" alt="${
                    weather[0]["description"]
                }">
                  <figcaption>${weather[0]["description"]}</figcaption>
                </figure>
              `;
                li.innerHTML = markup;


                list.appendChild(li);
            }


            document.getElementById("textPlaceHolder").innerHTML = `${name}, ${coord.lat}, ${coord.lon} `;  //replace with call to google map api



            //post coordinates
            coordinates = {
                lat: coord.lat,
                lng: coord.lon
            };

            // console.log(sys.country.toLowerCase());
            //requests news  name = city name

            doSearch("news", name);
            // fetchNews(sys.country.toLowerCase());

            //sets home position marker
            // setMarkers(coord);
            //gets info for places around
            getPlaces(coordinates);

        })
        .catch(() => {
            msg.textContent = "Please search for a valid city 😩";
        });

    msg.textContent = "";
    form.reset();

}