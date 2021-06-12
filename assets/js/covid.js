//api from here https://documenter.getpostman.com/view/10808728/SzS8rjbc#00030720-fae3-4c72-8aea-ad01ba17adf8


// const country = 'RU'.toUpperCase()
//function called from weather.js L111
function getCovidInfo(country) {
    const url = `https://api.covid19api.com/summary`;
    fetch(url)
        .then(response => response.json())
        .then(data => covidHandler(data, country));
}


function covidHandler(data, country) {
    const {ID, Message, Global, Countries} = data;
    // console.log('data', data);


    //display global data
    //  console.log(Global);
    console.log('NewConfirmed', Global.NewConfirmed)
    console.log('NewDeaths', Global.NewDeaths)
    console.log('TotalDeaths', Global.TotalDeaths)
    console.log('NewRecovered', Global.NewRecovered)
    console.log('TotalRecovered', Global.TotalRecovered)
    //display by country
    // console.log(Countries);
    Countries.forEach(element => getEachCountry(element, country));
}

function getEachCountry(e, country){
    if (e.CountryCode === country) {
        console.log(e);
    }

}




// getCovidInfo(country)
// let oooo = {
//     "ID":
//         "677025b2-f69f-4f65-b706-37beca9a97ba",
//     "Message":
//         "",
//     "Global":
//         {
//             "NewConfirmed":
//                 264107,
//             "TotalConfirmed":
//                 175016501,
//             "NewDeaths":
//                 8719,
//             "TotalDeaths":
//                 3782491,
//             "NewRecovered":
//                 242685,
//             "TotalRecovered":
//                 113195943,
//             "Date":
//                 "2021-06-12T11:02:03.971Z"
//         }
//     ,
//     "Countries":
//         [{
//             "ID": "5ecb48e8-9078-43f7-9fff-a3b8c3acbc0b",
//             "Country": "Afghanistan",
//             "CountryCode": "AF",
//             "Slug": "afghanistan",
//             "NewConfirmed": 0,
//             "TotalConfirmed": 87716,
//             "NewDeaths": 0,
//             "TotalDeaths": 3412,
//             "NewRecovered": 0,
//             "TotalRecovered": 60598,
//             "Date": "2021-06-12T11:02:03.971Z",
//             "Premium": {}
//         },]
// }