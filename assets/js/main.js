/*SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME
ALONG WITH THE COUNTRY CODE (e.g. athens,gr)*/

// const form = document.getElementById("#search--form");
const input = document.querySelector("#searchField");
const msg = document.querySelector(".search-div .msg");
const list = document.querySelector(".ajax-section .cities");


let temperature;
let tempIndicator;

function clearInputField(){
    input.value='';
}


input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("search-button").click();
    }
});


function handleInputData(){
    let text = input.value;
    let inputVal = text.replace(/,\s+/g, ',');  //uses regex to fix formatting, if entered (city, country) removes space after ","
    console.log(text);

    //check if there's already a city
    const listItems = list.querySelectorAll(".ajax-section .city");
    const listItemsArray = Array.from(listItems);


    if (listItemsArray.length > 0) {

        const filteredArray = listItemsArray.filter(el => {
            let content = "";
            //athens,gr
            if (inputVal.includes(",")) {
                //"athens,grrrrrr"->invalid country code, so we keep only the first part of inputVal
                if (inputVal.split(",")[1].length > 2) {
                    inputVal = inputVal.split(",")[0];
                    content = el
                        .querySelector(".city-name span")
                        .textContent.toLowerCase();
                } else {
                    content = el.querySelector(".city-name").dataset.name.toLowerCase();
                }
            } else {
                //athens
                content = el.querySelector(".city-name span").textContent.toLowerCase();
            }


            return content == inputVal.toLowerCase();
        });

        if (filteredArray.length > 0) {
            msg.textContent = `You already know the weather for ${
                filteredArray[0].querySelector(".city-name span").textContent
            }`;
            return;
        }
    }

    // deleteMarkers();
    getWeather(inputVal);
}



//typeahead code used from example provided by typeahead
//http://twitter.github.io/typeahead.js/examples/

var states = citiesList; //reads cities.js to get array with cities for typeahead suggestions

//----------------------------------------------------------------------
//Typeahead
// constructs the suggestion engine
var states = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // `states` is an array of state names defined in "The Basics"
    local: states
});

$('#search-div2 .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
    {
        name: 'states',
        source: states
    });

//-------------switch between C and F----------------------------------------------------  //maincolor

//handle click on setting-gears
function toggleDropDownMenu() {
    let dropdownMenu = document.getElementsByClassName("dropdown-content").item(0);
    dropdownMenu.classList.toggle("show-dropdown-content");
}




function switchToC() {
    let tempC = document.getElementById("temp-c");
    let tempF = document.getElementById("temp-f");
    let  tempIndicator = document.getElementById("temp-indicator");
    if (typeof (temperature) === "undefined") {
        temperature = 20;
    }
    let weatherItem = document.getElementsByClassName("city-temp").item(0);
    weatherItem.innerHTML = `${Math.round(temperature)}<sup>°C</sup>`;
    tempF.classList.remove("switch-highlight");
    tempF.classList.add("switch-base-color");
    tempC.classList.add("switch-highlight");
    toggleDropDownMenu()
    tempIndicator.innerHTML="°C"
}

function switchToF() {
    let tempC = document.getElementById("temp-c");
    let tempF = document.getElementById("temp-f");
    let  tempIndicator = document.getElementById("temp-indicator");
    if (typeof (temperature) === "undefined") {
        temperature = 20;
    }

    let weatherItem = document.getElementsByClassName("city-temp").item(0);
    weatherItem.innerHTML = `${Math.round((temperature * 1.8) + 32)}<sup>°F</sup>`;
    tempC.classList.remove("switch-highlight");
    tempC.classList.add("switch-base-color");
    tempF.classList.add("switch-highlight");
    toggleDropDownMenu()
    tempIndicator.innerHTML="°F"
}


// Event listener to close map side panel on click
function closeRibbon() {
    document.getElementById("panel").classList.remove("open");
    document.getElementById("panel").innerHTML = "";
}

