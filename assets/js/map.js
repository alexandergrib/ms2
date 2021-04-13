//Map example taken from https://developers.google.com/maps/documentation/javascript/examples/place-search-pagination#maps_place_search_pagination-css


let pos;





//https://developers.google.com/maps/documentation/javascript/places?csw=1#place_search_requests
//https://stackoverflow.com/questions/17912281/how-to-get-search-string-parameter-for-google-maps-api-v3
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };


    });
} else {
  pos = { lat: -33.866, lng: 151.196 };
}



// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function initMap() {

  // Create the map.

  const map = new google.maps.Map(document.getElementById("map"), {
    center: pos,
    zoom: 15,
    mapId: "8d193001f940fde3",
  });


  // Create the places service.
  const service = new google.maps.places.PlacesService(map);
  let getNextPage;
  const moreButton = document.getElementById("more");

  moreButton.onclick = function () {
    moreButton.disabled = true;

    if (getNextPage) {
      getNextPage();
    }
  };
  // Perform a nearby search.
  service.nearbySearch(
    { location: pos, radius: 5000, type: "cafe" }, //store
    (results, status, pagination) => {
      if (status !== "OK" || !results) return;
      addPlaces(results, map);
      moreButton.disabled = !pagination || !pagination.hasNextPage;

      if (pagination && pagination.hasNextPage) {
        getNextPage = () => {
          // Note: nextPage will call the same handler function as the initial call
          pagination.nextPage();
        };
      }
    }
  );
}

function addPlaces(places, map) {
  const placesList = document.getElementById("places");

  for (const place of places) {
    if (place.geometry && place.geometry.location) {
      const image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };
      new google.maps.Marker({
        map,
        icon: image,
        title: place.name,
        position: place.geometry.location,
      });
      const li = document.createElement("li");
      li.textContent = place.name;
      placesList.appendChild(li);
      li.addEventListener("click", () => {
        map.setCenter(place.geometry.location);
      });
    }
  }
}



