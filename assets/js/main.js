/*jshint esversion: 6 */

/*SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME
ALONG WITH THE COUNTRY CODE (e.g. athens,gr)*/


const input = document.querySelector("#searchField");
const msg = document.querySelector(".search-wrapper .msg");
const list = document.querySelector(".ajax-section .cities");
let temperature;
let tempIndicator;

function clearInputField() {
    input.value = '';
}

input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("search-button").click();
    }
});

function handleInputData() {
    let text = input.value;
    let inputVal = text.replace(/,\s+/g, ',');  //uses regex to fix formatting, if entered (city, country) removes space after ","
    //check if there's already a city
    const listItems = list.querySelectorAll(".ajax-section .city");
    const listItemsArray = Array.from(listItems);
    if (listItemsArray.length > 0) {
        const filteredArray = listItemsArray.filter(el => {
            let content = "";
            //example: athens,gr
            if (inputVal.includes(",")) {
                //example: "athens,grrrrrr"->invalid country code, so we keep only the first part of inputVal
                if (inputVal.split(",")[1].length > 2) {
                    inputVal = inputVal.split(",")[0];
                    content = el
                        .querySelector(".city-name span")
                        .textContent.toLowerCase();
                } else {
                    content = el.querySelector(".city-name").dataset.name.toLowerCase();
                }
            } else {
                //example: athens
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
    //Checks if input field data empty
    if (inputVal) {
        getWeather(inputVal);
    } else {
        //if empty call for "london" as a default data
        getWeather('london');
    }
}

//typeahead code used from example provided by typeahead
//http://twitter.github.io/typeahead.js/examples/
//----------------------------------------------------------------------
//Typeahead
// constructs the suggestion engine
const states = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: citiesList //reads cities.js to get array with cities for typeahead suggestions
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

//-------------switch between C and F--------------------------------//

//handle click on setting-gears
function toggleDropDownMenu() {
    let dropdownMenu = document.getElementsByClassName("dropdown-content").item(0);
    dropdownMenu.classList.toggle("show-dropdown-content");
}

//Select 'C' temperature display
function switchToC() {
    let tempC = document.getElementById("temp-c");
    let tempF = document.getElementById("temp-f");
    let tempIndicator = document.getElementById("temp-indicator");
    if (typeof (temperature) === "undefined") {
        temperature = 20;
    }
    let weatherItem = document.getElementsByClassName("city-temp").item(0);
    weatherItem.innerHTML = `${Math.round(temperature)}<sup>??C</sup>`;
    weatherItem.innerHTML = `${Math.round(temperature)}<sup>??C</sup>`;
    let ribbonWeatherItem = document.getElementsByClassName("ribbon-temp").item(0);
    ribbonWeatherItem.innerHTML = `${Math.round(temperature)}??C`;
    tempF.classList.remove("switch-highlight");
    tempF.classList.add("switch-base-color");
    tempC.classList.add("switch-highlight");
    toggleDropDownMenu();
    tempIndicator.innerHTML = "??C";
}

//Select 'F' temperature display
function switchToF() {
    let tempC = document.getElementById("temp-c");
    let tempF = document.getElementById("temp-f");
    let tempIndicator = document.getElementById("temp-indicator");
    if (typeof (temperature) === "undefined") {
        temperature = 20;
    }
    let weatherItem = document.getElementsByClassName("city-temp").item(0);
    weatherItem.innerHTML = `${Math.round((temperature * 1.8) + 32)}<sup>??F</sup>`;
    //switch temperature indicator under header ribbon
    let ribbonWeatherItem = document.getElementsByClassName("ribbon-temp").item(0);
    ribbonWeatherItem.innerHTML = `${Math.round((temperature * 1.8) + 32)}??F`;
    tempC.classList.remove("switch-highlight");
    tempC.classList.add("switch-base-color");
    tempF.classList.add("switch-highlight");
    toggleDropDownMenu();
    tempIndicator.innerHTML = "??F";
}

// Event listener to close map side panel on click
function closeRibbon() {
    document.getElementById("panel").classList.remove("open");
    document.getElementById("panel").innerHTML = "";
}

