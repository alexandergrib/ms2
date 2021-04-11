// const xhr = new XMLHttpRequest();
// const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.5285582%2C-0.2416782&radius=10000&keyword=things%20to%20do%20in%20London&rankby=prominence&key=AIzaSyA8QVgU4Ry5cuU67JUZVg7cnIOzInvCt0c';
// let data;
// xhr.open('GET', url);
// xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
// xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             cb(JSON.parse(this.responseText));
//         }
//     };
// xhr.send();
//
//
// function setData(jsonData){
//     data = jsonData;
// };
//
//
//
// setTimeout(function () {
//     console.log(data);
// }, 500)

//https://developers.google.com/maps/documentation/javascript/places?csw=1#place_search_requests
//https://stackoverflow.com/questions/17912281/how-to-get-search-string-parameter-for-google-maps-api-v3
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        let pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        // var search = "restaurant";
        //service is a PlacesService instance.



        var placeService = new google.maps.places.PlacesService(map);
        let req = {
            location: pos,
            radius: '50000',
            types: ['restaurant'],
        };
        placeService.nearbySearch(req, callback);
    });
} else {

}


function getPlaces(coord) {
    var placeService = new google.maps.places.PlacesService(map);
    let req = {
        location: coord,
        radius: '50000',
        types: ['restaurant'],

    };
    placeService.nearbySearch(req, callback);
}


function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
            // locations.push(results[i])
        }

    }
}


function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;

    const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
    });
    // google.maps.event.addListener(marker, "click", () => {
    //   infowindow.setContent(place.name || "");
    //   infowindow.open(map);
    // });
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(place.name || "");
            infowindow.open(map, marker);
        }
    })(marker));

}

//

let markers = [];

function setMapOnAll() {
    const haightAshbury = coordinates;
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: haightAshbury,
        mapTypeId: "terrain",
    });
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function clearMarkers() {
    setMapOnAll(null);
}

function deleteMarkers() {
    clearMarkers();
    markers = [];
}