const xhr = new XMLHttpRequest();
const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.5285582%2C-0.2416782&radius=10000&keyword=things%20to%20do%20in%20London&rankby=prominence&key=AIzaSyA8QVgU4Ry5cuU67JUZVg7cnIOzInvCt0c';

xhr.open('GET', url);
xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
xhr.send();


function setData(jsonData){
    data = jsonData;
};



setTimeout(function () {
    console.log(data);
}, 500)
