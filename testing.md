# Testing
## Desktop
1. Load webpage with geolocation active(allow request from the browser)
    - Location should be detected automatically and no other user input required at this stage
    - Weather section updated with correct city
    - Icon with "founded" city name should be displayed on under site logo
2. Open setting menu next to the search icon and select "F" icon
    - Temperature should change to Fahrenheits units
    - Switch back to "C" and confirm it changed back to Centigrade 
3. News section
   - After the search/"auto-detection" is made, news headlines should get updated based on searched city.
4. News scrolling
    - news should scroll automatically every ~3 sec.
    - news can be scrolled with mouse wheel
5. News links
   - Clicking on news links new page should open with selected headline subject
6. COVID-19 info panels
   - Global info pulls data on the first load after location detected/search made, and it pulls data every time search performed but data itself updated only once a day.
   - Local information data updated every time search is made and fresh data loaded based on the city searched
7. Switch between RESTAURANTS, HOTELS and ENTERTAINMENT tabs
    - each should update results displayed on the map with relevant information according to selection
    
8. Click on the pin displayed on the map
    - this will open info window overlaying map, displaying place of interest with relevant info
    - select different 'markers', info window should refresh with each new selection
    - Close info window by pressing "X" this should close info window


9. Manually enter NEW city name
    - observe suggestions/autocomplete displaying
    - select suggestion/autocomplete or finish typing and press search button or press enter
        - new city should be displayed and weather, news, COVID-19, and map updated (there is possible error if city exists in more than one country, if that a case use search with country `city, (2 letter country - US, GB, RU...etc.)` )  
    - try search for non-existent city
        - Error message will be displayed
    - try search on empty field
        - Error message will be displayed
    - try search city,country (london,gb)
        - search should update results with correct city
    - try search city, country (london, gb) "note space after , "
        - search should update results with correct city
    - try search city, country (london,   gb) "note more spaces after , "
        - search should update results with correct city
    - try search city, country (london, gbbb) "note spelling of country wrongly"
        - search should update results with correct city, but will not be specific to country, results may differ if same city exists in different countries
    - try search city, country (london. gb) "note a '.'  after city"
        - Error message will be displayed
10. Manually enter SAME city name
    - error message will display ("You already know the weather for <city name>")
11. Reset browser cash reload page, disallow to detect location automatically. Do NOT enter any city name, leave search field blank, and press on search button.
    - error message will display ("Please search for a valid city.")


## Mobile
1. Load webpage with geolocation active(allow request from the browser)
   - Location should be detected automatically and no other user input required at this stage
   - Weather section updated with correct city
   - Icon with "founded" city name should be displayed on under site logo
2. Open setting menu next to the search icon and select "F" icon
    - Temperature should change to Fahrenheits units
    - Switch back to "C" and confirm it changed back to Centigrade     
3. COVID-19 info panels
   - Global info pulls data on the first load after location detected/search made, and it pulls data every time search performed but data itself updated only once a day.
   - Local information data updated every time search is made and fresh data loaded based on the city searched
4. News section
   - After the search/"auto-detection" is made, news headlines should get updated based on searched city.
5. News scrolling
    - news should scroll automatically every ~3 sec.
    - news can be scrolled manually
6. News links
   - Clicking on news links new page should open with selected headline subject
7. Switch between RESTAURANTS, HOTELS and ENTERTAINMENT tabs
    - each should update results displayed on the map with relevant information according to selection
    
8. Click on the pin displayed on the map
    - this will open info window overlaying map, displaying place of interest with relevant info
    - select different 'markers', info window should refresh with each new selection
    - Close info window by pressing "X" this should close info window

9. Manually enter NEW city name
    - observe suggestions/autocomplete displaying
    - select suggestion/autocomplete or finish typing and press search button
        - new city should be displayed and weather, news, COVID-19, and map updated (there is possible error if city exists in more than one country, if that a case use search with country `city, (2 letter country - US, GB, RU...etc.)` )  
    - try search for non-existent city
        - Error message will be displayed
    - try search on empty field
        - Error message will be displayed
    - try search city,country (london,gb)
        - search should update results with correct city
    - try search city, country (london, gb) "note space after , "
        - search should update results with correct city
    - try search city, country (london,   gb) "note more spaces after , "
        - search should update results with correct city
    - try search city, country (london, gbbb) "note spelling of country wrongly"
        - search should update results with correct city, but will not be specific to country, results may differ if same city exists in different countries
    - try search city, country (london. gb) "note a '.'  after city"
        - Error message will be displayed
10. Manually enter SAME city name
    - error message will display ("You already know the weather for <city name>")
11. Reset browser cash reload page, disallow to detect location automatically. Do NOT enter any city name, leave search field blank, and press on search button.
    - error message will display ("Please search for a valid city.")
    


# User Stories testing

-	`As a user I want to be able to search for the required destination and be able to get relevant information` 
     - Search input field implemented ([input field](assets/img/testing_img/search_field.png))
-	`As a user I want to have possibility of my location to be identified automatically`
     - Browser tries to get user location on page load ([Location access request](assets/img/testing_img/location_request.png))
-	`As a user I want to be able to choose in which units to display weather information`
     - Implemented setting selector where user can choose which units to display([Untints selector](assets/img/testing_img/units_selector.png))
-	`As a user I want to be able to see current weather in specified destination`
     - Weather section implemented ([weather section](assets/img/testing_img/weather.png)).Weather updated on user selected city, also weather and city in header ([weather small](assets/img/testing_img/weather_small.png))
-   `As a user I want to be able to see current and up to date COVID-19 information in the selected destination`    
     - COVID-19 info bars implemented [Covid section](assets/img/testing_img/covid_info.png)
-	`As a user I want to be able to see news in the selected destination` 
     - News section implemented, news are updated based on user selected city. ([news](assets/img/testing_img/news_section.png))
-	`As a user I want to be able to see places to stay, eat, or points of interests in the selected destination` 
     - Selection of choices implemented where user can choose between restaurants, hotels, and things to do in selected destination displayed on map. ([map display selection](assets/img/testing_img/things_to_do_ribbon.png))
     - Map section implemented displaying places to eat by default, and being updated with user selection. ([map](assets/img/testing_img/map.png))


# JSHINT code check
All of these *.js files below show undefined variables, those variables defined one .js and get call from another .js file. 
This done to keep individual section code separated for readability and keep files sizes low for faster loading.
- main.js
- map.js
- news.js
- weather.js

# HTML/CSS validation
- HTML validator: No errors or warnings to show.



# Usability testing done by a real user
Testing performed by a real person who is asked to load the website for the fist time and to provide feedback from their experience using the website.
## Case 1:
Assessment categories:
`Usabily`
Easy to understand what this site if for, updating all tabs to my selected city was easy and fast
`Quality`
Content is relevant to the selected location, website is not cluttered. Points of interest on the Maps allows to see the reviews ratings and click on the website link, taking me to the business' direct website to explore further if interested

`Responsivness`
Fast load of the data. Tried using the website on the mobile as well - all content aligned nicely, no overlaps.
`Stress test use cases`
Manually entered City incorrectly, entered City + the country in the search field incorrectly. Received a feedback reminding of the format to follow to search

`Strengths and weaknesses points`
Strengths - the website is clear and easy to use, data loads instantly. Weaknesses - additional functionality can be developed in the future to allow user to save places they are interested in visiting from the Entertainment tab

` Any potential future additions or enhancements`
Would be great to see extended forecast in the weather for a chosen location, currently shows today's weather. Would like to see 3, 10 day forecast
Ability to subscribe to the updates the website's content: example - email alerts when a new restaurant is added in my area.