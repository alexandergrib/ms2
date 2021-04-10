// let country = "gb";
const newsList = document.querySelector("#news .news--class");

function fetchNews(country){
    const newsUrl =  `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=38057be975f643f5b37c7094f9f3617c`
    fetch(newsUrl)
        .then(response => response.json())
        .then((data) => populateNews(data))
};


function populateNews(data) {
    if (data.status ==="ok"){
        console.log(data);
    //    -----------------------------------------------------------------------
        const {articles, totalResults} = data;

        if (document.querySelector(".cities li:last-child")) {
                const listItem = document.querySelector(".news--class li:last-child");
                const li = document.createElement("li");
                li.classList.add("article");
                const markup = `
                <a href="${articles[0].url}">
                <h2 class="article-name">${articles[0].title}</h2>
                </a>
                
              //  place HTML tamplate here
              `;
                li.innerHTML = markup;

                listItem.parentNode.replaceChild(li, listItem);

            }else {

                //Executes on first search for the city
                const li = document.createElement("li");
                li.classList.add("article");
                const markup = `
                <a href="${articles[0].url}">
                <h2 class="article-name">${articles[0].title}</h2>
                </a>
                
              `;
                li.innerHTML = markup;


                newsList.appendChild(li);
            }






    //    ------------------------------------------------------------
    }else{
        console.log("unable fetch news");
    }

}
