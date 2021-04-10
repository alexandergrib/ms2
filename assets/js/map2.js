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





function setMarkers(name, coord) {

    infowindow = new google.maps.InfoWindow();
// Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var myLatlng = new google.maps.LatLng(coord.lat, coord.lon);
    var mapOptions = {
        zoom: 10,
        center: myLatlng
    };

const locations = [
    {lat: 51.4541078, lng: 0.364},
    {lat: 51.4541078, lng: 0.3651},
    {lat: 51.4541078, lng: 0.3662},
    {lat: 51.4541078, lng: 0.3673},
    {lat: 51.4541078, lng: 0.3684},
    {lat: 51.4541078, lng: 0.3695}
];
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });


}
