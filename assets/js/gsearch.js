// let searchQuestion;// = 'Elmers+End+news';  //'things+to+do+in+london&num=10'
// let searchSelectors;// = "news"; // search //  images
const newsList = document.querySelector("#news .news--class");
let newsArray = [];
//receives call from weather L105
function doSearch(searchSelectors, searchQuestion) {
    let param;
    if (searchSelectors === "news") {
        param = "news";
        fetch(`https://google-search3.p.rapidapi.com/api/v1/${param}/q=${searchQuestion}+news`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7c79620503msha75a133aec10eb3p1c3ab8jsn3ff262c13833",
                "x-rapidapi-host": "google-search3.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then((data) => populateNews(data))


    } else {
        param = "search";
        fetch(`https://google-search3.p.rapidapi.com/api/v1/${param}/q=${searchQuestion}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7c79620503msha75a133aec10eb3p1c3ab8jsn3ff262c13833",
                "x-rapidapi-host": "google-search3.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then((data) => searchResults(data))


    }

}//

//Search results handler called from weather.js L109
function searchResults(data) {
    console.log(data.results[0].description);

}




//called from weather.js L105
function populateNews(data) {
    //    -----------------------------------------------------------------------
    const articles = data.entries;
    // console.log(articles);
    if (document.querySelector(".news--class").getElementsByTagName('li')) {
        document.querySelector(".news--class").innerHTML = "";
    }
    if (articles.length > 0) {
        for (let i = 0; i < articles.length; i++) {
            let markup = `
                <i class="fa fa-newspaper-o" aria-hidden="true"></i>                
                <a href="${articles[i].link}" title="${articles[i].title}" target="_blank">
                    ${articles[i].title}
                </a>
                
              `;
            //Executes on first search for the city
            const li = document.createElement("li");
            li.classList.add("article");

            li.innerHTML = markup;
            newsList.appendChild(li);
        }
    } else {
        let markup = `
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                <strong>No news found, please try again later.</strong>
                
              `;
        //Executes on first search for the city
        const li = document.createElement("li");
        li.classList.add("article");

        li.innerHTML = markup;
        newsList.appendChild(li);
    }

}
