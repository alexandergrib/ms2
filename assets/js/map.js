// map
// Initialize and add the map


let map;
let service;
let infowindow;


function initMap() {
    // The location of Uluru
    const uluru = new google.maps.LatLng(51.4541078441724, 0.36448899153277886);
    infowindow = new google.maps.InfoWindow();
    // The map, centered at Uluru
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: uluru,
    });
}

//https://stackoverflow.com/questions/3059044/google-maps-js-api-v3-simple-multiple-marker-example
function setMarkers(locations, coord) {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(coord.lat, coord.lon),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

}
