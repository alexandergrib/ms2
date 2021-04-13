// let searchQuestion;// = 'Elmers+End+news';  //'things+to+do+in+london&num=10'



//receives call from weather L105
function doSearch(searchQuestion) {  //limit 600 query's/month

    fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${searchQuestion}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "7c79620503msha75a133aec10eb3p1c3ab8jsn3ff262c13833",
            "x-rapidapi-host": "google-search3.p.rapidapi.com"
        }
    })
        .then(response => response.json())
        .then((data) => searchResults(data))


}//

//Search results handler called from weather.js L109
function searchResults(data) {
    console.log(data.results[0].description);

}

