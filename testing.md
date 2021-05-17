# Website functionality

On the first page load browser tries to get  user location with banner requesting to allow use user location.
If successful it will pass coordinates to weather API, which will get weather information and city name for coordinates received.
weather API then call News API and passes over city name from weather API response and also calls google Places API to display relevant places for current location.

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
