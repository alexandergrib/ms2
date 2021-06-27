/*jshint esversion: 6 */

//api example from here https://documenter.getpostman.com/view/10808728/SzS8rjbc#00030720-fae3-4c72-8aea-ad01ba17adf8

function getCovidInfo(country) {
    const url = `https://api.covid19api.com/summary`;
    fetch(url)
        .then(response => response.json())
        .then(data => covidHandler(data, country));
}

//Function to handle global statistics data received from API
function covidHandler(data, country) {
    const {Global, Countries} = data;
    const globalNewCases = document.getElementById("global_new_cases");
    const globalNewDeath = document.getElementById("global_new_death");
    const globalDeath = document.getElementById("global_death");
    globalNewCases.innerHTML = Global.NewConfirmed;
    globalNewDeath.innerHTML = Global.NewDeaths;
    globalDeath.innerHTML = Global.TotalDeaths;
    Countries.forEach(element => getEachCountry(element, country));
}

//Function to handle LOCAL statistics data received from API
function getEachCountry(e, country) {
    const localCountryHdr = document.getElementById("covid_local_hdr");
    const localNewCases = document.getElementById("local_new_cases");
    const localNewDeath = document.getElementById("local_new_death");
    const localDeath = document.getElementById("local_death");
    if (e.CountryCode === country) {
        localNewCases.innerHTML = e.NewConfirmed;
        localNewDeath.innerHTML = e.NewDeaths;
        localDeath.innerHTML = e.TotalDeaths;
        localCountryHdr.innerHTML = `COVID-19 in ${e.Country}`;
    }

}
