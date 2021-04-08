
function initMap() {
    // The location of Uluru
    const pin = {lat: -34, lng: 151};
    // const pin = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: pin,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: pin,
        map: map,
    });
}

async function geoFindMe() {

    function success(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        data = {
            lng: long,
            lat: lat,
            message: "success"
        };
        geoResult(data)

    }


    function error() {
        return console.log('Unable to retrieve your location');
        data = {message: "error",};
    }

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    } else {
        status.textContent = 'Locating…';
        await navigator.geolocation.getCurrentPosition(success, error);
    }

}


geoFindMe();


function geoResult(data) {
    document.getElementById('main').innerHTML = `<p>${data.lat}, ${data.lng} display</p>`;
    new google.maps.LatLng(data);
    let dataset = data;
    console.log(data);
    return dataset
}

