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

}
