/*jshint esversion: 6 */
function fetchNews(searchQuestion) {
    fetch(`https://newscatcher.p.rapidapi.com/v1/search_free?q=${searchQuestion}%2Bnews&lang=en&page_size=50&media=True`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "7c79620503msha75a133aec10eb3p1c3ab8jsn3ff262c13833",
            "x-rapidapi-host": "newscatcher.p.rapidapi.com"
        }
    })
        .then(response => response.json())
        .then((data) => populateNews(data))
        .catch(err => {
            console.error(err);
        });
}



function populateNews(data) {

    const newsList = document.querySelector("#news .news--class");
    const articles = data.articles;

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
