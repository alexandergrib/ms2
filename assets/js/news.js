// let country = "gb";
const newsList = document.querySelector("#news .news--class");


function fetchNews(country) {
    const newsUrl = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=38057be975f643f5b37c7094f9f3617c`
    fetch(newsUrl)
        .then(response => response.json())
        .then((data) => populateNews(data))
}


function populateNews(data) {
    if (data.status === "ok") {
        // console.log(data.articles);
        //    -----------------------------------------------------------------------
        const articles = data.articles;

        if (document.querySelector("#news li:last-child")) {
            for (let i=0; i< articles.length; i++) {
                const li = document.createElement("li");
                // console.log(articles[i]);
                li.classList.add("article");
                let markup = `
                <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                <a href="${articles[i].url}" title="${articles[i].title}">
                    ${articles[i].title}
                </a>
                
              `;
                li.innerHTML = markup;

                newsList.appendChild(li);
            }



        } else {
            for (let i = 0; i < articles.length; i++) {
                let markup = `
                <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                <a href="${articles[i].url}" title="${articles[i].title}">
                    ${articles[i].title}
                </a>
                
              `;
                //Executes on first search for the city
                const li = document.createElement("li");
                li.classList.add("article");

                li.innerHTML = markup;


                newsList.appendChild(li);
            }
        }

        //    ------------------------------------------------------------
    } else {
        console.log("unable fetch news");
    }

}
