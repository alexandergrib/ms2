

# Milestone 2 project  
  
## [Live website on github pages](https://alexandergrib.github.io/ms2/)  
  
![Responsive display](assets/img/responsive.PNG)

---

# Table of contents  

- [UX](#ux)
  * [Website owner business goals](#website-owner-business-goals)
  * [User goals](#user-goals)
- [Structure of the website](#structure-of-the-website)
    + [Medium size](#medium-size)
    + [Mobile screen](#mobile-screen)
- [Wireframes](#wireframes)
- [Surface](#surface)
  * [Fonts](#fonts)
  * [Colors](#colors)
  * [Images](#images)
  * [Text](#text)
- [Features](#features)
- [Technologies used](#technologies-used)
- [Testing](#testing)
- [Site logic](#site-logic)
- [Deployment](#deployment)
- [Problems encountered:](#problems-encountered)
- [Credits](#credits)
  * [Credits for text and modules](#credits-for-text-and-modules)
  * [Credits for images used](#credits-for-images-used)




# UX  
  
## Website owner business goals  
-	My website is built to help people explore their local area by providing them with real time information relevant to their current location or manually selected location in combination with the directory of Entertainment options in the area. It should help people to stay up-to-date on the weather, news, covid related stats and entertaintment information for their chosen selection. 
-	My goal is to provide information about current weather in a selected location
-	My goal is to provide news for a selected location by displaying news headlines with clickable links to the full article
-   My goal is to provide a user up to date information about COVID-19 situation in the world and in their country
-   My goal is to provide entertainment updates to the user through places to see, places to stay and places to eat in the selected location
-   My goal is to also allow the user to click and follow to their selected business' website to complete their interaction
-   My goal is to provide the user all features on desktop and mobile devices
-	Website user should have a possibility to switch between Centigrade and Fahrenheit for their convenience 
-	Website user should be able to click on the "pins" displayed on map to get more info about their place of interest
-	Website user should have a possibility to switch between restaurants, things to do and stay(hotels) after results displayed 



## User goals  
-	As a user I want to be able to search for the required destination and be able to get relevant information 
-	As a user I want to have possibility of my location to be identified automatically  
-	As a user I want to be able to choose in which units to display weather information  
-	As a user I want to be able to see current weather in specified destination
-   As a user I want to be able to see current and up to date COVID-19 information in the selected destination  
-	As a user I want to be able to see news in the selected destination  
-	As a user I want to be able to see places to stay, eat, or points of interests in the selected destination  
  
  
 

  
  




# Structure of the website  

The website consists one page with the search field and search button. With brief instructions what this website is about.  
On the first-time visiting website, user will be offered to automatically detect their location.
Once current city is identified automatically or entered manually, information for searched place will be displayed and map section will get updated.
User will be offered to select which units to display by clicking on setting button and pick between “C” or “F” selector, located next to the search button. 
By default, “C” option will be active. 
To clearly display which one is active now, “C” or “F” will show next to setting button.

The main page is split into 3 different sections:
1.	News section utilizes news API to display general news for the searched location
2.	Weather section is divided into 2 subsections:
    - First section displays current temperature and the icon of the current weather (clouds, sun, rain, etc.)
    - Secondary section displays COVID-19 information of global statistics and local information based on searched country. 
3.	“Things to do” section located under first two and occupying full screen width, consists of three clickable tabs.
4.	Last Section consists of the map with pins displayed based on selection made in section 3(things to do). 
    - Each pin displayed on the map is clickable
    - A click on pin opens a ribbon displayed over map with place information (Business name, Business address, and Business website).

5. Bottom of the page contains a footer with contact site owner information and icon for the GitHub repository.
  

# logic of website

On the first load browser tries to get user location with a banner requesting user to allow to use their location.
If allowed, browser will pass detected coordinates to weather API, which will get weather information and city name from API for the coordinates received.
Weather API will then call News API and pass over city name from weather API response to fetch news. Then weather API calls google Places API to display places around current location. And send request to covid19API to get the latest data about COVID-19 statistics.

If user reject detection location from the browser, site will load "generic/static" information for the city of London. Then after loading, the website will wait for the user to make a search, to update weather, news, COVID-19, and map information.








##Adaptivity
Website adapts to screen size by rearranging sections and adjusting their width to fit into smaller screen. Minimum screen size supported is 300px wide.

### Medium size
On medium screen size webpage keeps its layouts as on the larger screen but will get downsized to fit into user screen size.


### Mobile screen
On mobile devices and other small screens each section occupies full width of the screen and is moved one under another. 


# Wireframes  
Wireframes can be found here: 
- [Desktop](wirefames/wireframes/Desktop.png)
- [Mobile](wirefames/wireframes/Mobile.png)
To open links please use CTR+click to open in the new window.
  ---
# Surface  
## Fonts  
I decided to use Google Roboto font and Sans-Serif as a fallback font.  
I think Roboto font is a most used font across whole internet and it would not look too different for the user coming from any website they used to use.  This will create a more familiar feeling for the users.
## Colors  
I used following colours:  
- Body background color: #8F8F8F26
- News section color: #97A1B5
- Weather section background: #6A7488 
- menu color: #4DA5EF7F  
- Info section color: #FBFBFB
- Text color: #25383F  

    
## Images    
## Text  



# Features    
## Existing Features    
### Home (index.html)
-	Search field with search button
-	Search field should contain typeahead(autocomplete) functionality.
-	Pop up message asking user to allow to use user device location
-	Information section how to use this website and what it offers to the user
-	News section occupying left side 40% of the screen
-	Weather section located next to the news section and occupying 60% of the screen
-	“Things to do” section occupying 100% of the width located below weather and news section
-	After “things to do”, is a map section with location pins displayed on the map. Location for the pins taken from “things to do” section and should be updated on user choice of selection in “things to do” section.
### Footer
-	 Footer containing website owner information

## Features  left to implement
  - Add forecasted weather to show 7 days forecast
  - Add selector which user can expand to show hourly forecast by clicking daily forecast.

 
# Technologies used  
*	HTML   
*	Javascript
*   Jquery
*	Bootstrap  
*	Fontawesome  
*	Google API    
*	Github  
*	Git  
*	Balsamiq  
*   RapidApi
*	[Trello](https://trello.com/b/fu6IEy31/ms2-prject) for KANBAN project organizing
*	CSS  
  
# Testing
[Testing.md](testing.md)


# Deployment  
- Deployment made via GitHub pages.  Fork my repository, then go to Setting on forked repository scroll down to GitHub Pages and select in Source section the branch to be used.  
  
# Problems encountered: 
- After searching for place map did not center itself to that selected location
  - Fixed by setting new boundaries instead of extending previous (bounds = new google.maps.LatLngBounds();) 

- News API free version worked only on localhost, to use it online I had to upgrade to paid account.
    - switched API to Rapidapi.com. Tried to use Google search news, but response time was 3-4 seconds, this caused significant delay after page loaded and populating news feed.
    - Switched to Newscatcher API from Rapidapi.com this helped to decrease response time down to 200-300ms.


- Console error (Failed to load resource: the server responded with a status of 403 ())
    - error coming from google API (need to investigate more what is causing it)
    
- Sometimes warning in console shows-up about security for API
    - error disappears on the page refresh
    
- Console displaying: "Error with Permissions-Policy header: Unrecognized feature: 'interest-cohort'."
    - don't know where this one is coming from, need to investigate it further.
    
- Gap is visible between edge of the page and side of the browser where scroll is located (Chrome only) and scroll bar itself styled by the browser, there is no gap visible in mozilla browser.
    - it looks like bug of Chrome browser itself. If the classic scroll bar disisplayed then issue is not present.
  
# Credits  


## Credits for text and modules
  - [Weather api](https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893)
  - [typeahead](http://twitter.github.io/typeahead.js/examples/)
  - [world cities database](https://simplemaps.com/data/world-cities)
  - [map](https://developers.google.com/maps/documentation/javascript/examples/place-search-pagination#maps_place_search_pagination-css)

## Credits for images used
  - [Favicon creator tool](https://realfavicongenerator.net/)
  - [Logo](https://pixabay.com/illustrations/vintage-sign-nautical-ship-compass-1064142/)Image by Oberholster Venita from Pixabay
  - [Background](<a href='https://www.freepik.com/vectors/background'>Background vector created by rawpixel.com - www.freepik.com</a>)
  
