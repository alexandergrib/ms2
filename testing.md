# Website functionality

On the first load browser tries to get user location with banner requesting to allow using user location.
If successful it will pass coordinates to weather API, which will get weather information and city name for coordinates received.
Weather API then call News API and passes over city name from weather API response and also calls google Places API to display relevant places for current location.

# Testing
## Desktop
1. Load webpage with geolocation active(approve request from the browser)
    - Location should be detected automatically and no other user input required at this stage
    - Icon with "found" city name should be displayed on the same line with search field
2. Open dropdown menu next to the search icon and select F bubble
    - Temperature should change to Fahrenheits units
    - Switch back to "C", and it will change back to Centigrade 
3. Switch between RESTAURANTS, HOTELS and ENTERTAINMENT tabs
    - this should update results displayed on the map with relevant information according to selection
4. Click on the pin on map
    - this will open info window over map displaying place of interest relevant info
    - try to select different markers' info window show be updated with selection
    - Close info window by pressing "X" this should hide info window
5. News scroll
   - news should scroll automatically
6. News links
   - Opening news links should open in new window
7. Manually enter any city name
    - observe suggestions displaying
    - select suggestion or finish typing and press search button
        - new city should be displayed and weather, news and map should be updated
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
    
## Mobile
1. Same functionality as Desktop version
2. Layout should change to stacked    
3. Minimum screen width is 290px, if less than that layout looks broken
4. Mini-game not working properly on mobile screens as it monitors mouse position to function.

# User Stories testing

-	`As a user I want to be able to search for the required destination and be able to get relevant information` 
     - Search input field implemented ([input field](assets/img/testing_img/search_field.png))
-	As a user I want to have possibility of my location to be identified automatically  
     - Browser tries to get user location on page load ([Location access request](assets/img/testing_img/location_request.png))
-	As a user I want to be able to choose in which units to display information metric or imperial 
     - Implemented setting selector where user can choose which units to display([Untints selector](assets/img/testing_img/units_selector.png))
-	As a user I want to be able to see current weather in specified destination
     - Weather section implemented ([weather section](assets/img/testing_img/weather.png)).Weather updated on user selected city, also weather and city in header ([weather small](assets/img/testing_img/weather_small.png))
-	As a user I want to be able to see news in the selected destination  
     - News section implemented, news are updated based on user selected city. ([news](assets/img/testing_img/news_section.png))
-	As a user I want to be able to see places to stay, eat, or points of interests in the selected destination 
     - Selection of choices implemented where user can choose between restaurants, hotels, and things to do in selected destination displayed on map. ([map display selection](assets/img/testing_img/things_to_do_ribbon.png))
     - Map section implemented displaying places to eat by default, and being updated with user selection. ([map](assets/img/testing_img/map.png))
  
  