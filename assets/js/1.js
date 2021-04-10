// weather api code main logic from
// https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893
// part of this code modified by me.
const form = document.querySelector(".search-div form");
const input = document.querySelector("#searchField");
const msg = document.querySelector(".search-div .msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = "888a73a8b27eb54c8d1ba56ed02ec435";
var coordinates;
form.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;

    //ajax here
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const {coord, main, name, sys, weather} = data;
            const icon = `https://openweathermap.org/img/wn/${
                weather[0]["icon"]
            }@2x.png`;
            document.getElementById("info-text").classList.add("hide");  //hides instructions container
            document.getElementById("main").classList.remove("hide");  // show all data container
            // document.getElementsByClassName("cities").innerHTML = "";

            //checks status fo checkbox
            let checkbox = document.querySelector("input[name=checkbox]");
            if (checkbox.checked) {
                console.log("Checkbox is checked..");
            } else {
                console.log("Checkbox is not checked..");
            }
            //TODO add checkbox save its status on local storage when update page it keeps its selection

            const li = document.createElement("li");
            li.classList.add("city");
            //const
            let markup = `                
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;

            li.innerHTML = markup;

            list.appendChild(li);
            // list.replaceChild(li);
            document.getElementById("map").innerHTML = `${name}, ${coord.lat}, ${coord.lon} `;  //replace with call to google map api
            //TODO create news API call
            // populateNews();


            //post coordinates
            coordinates = {
                lat: coord.lat,
                lng: coord.lon
            };
            console.log(coordinates)
            setHome(name, coord); //sets home position marker


        })
        .catch(() => {
            msg.textContent = "Please search for a valid city 😩";
        });

    msg.textContent = "";
    form.reset();
    input.focus();
});


//typeahead code reused from example provided by typeahead
//http://twitter.github.io/typeahead.js/examples/
//TODO add states into file
var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
    'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

// constructs the suggestion engine
var states = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // `states` is an array of state names defined in "The Basics"
    local: states
});

$('#search-div .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
    {
        name: 'states',
        source: states
    });


// map
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = {lat: 51.4541078441724, lng: 0.36448899153277886};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: uluru,
    });
}


//displaying home marker on the map
function setHome(name, coord) {
    var myLatlng = new google.maps.LatLng(coord.lat, coord.lon);
    var mapOptions = {
        zoom: 10,
        center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        title: name
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
    //--------------------------------

//---------------------------------------
}


