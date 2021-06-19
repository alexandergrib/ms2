

# Milestone 2 project

`To open links please use CTR+click to open in the new window.`
  
## [Live website on github pages](https://alexandergrib.github.io/ms2/)  
  
![Responsive display](assets/img/responsive.png)

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
    - First section displays current temperature, and the icon of the current weather (clouds, sun, rain, etc.)
    - Secondary section displays COVID-19 information of global statistics and local information based on searched country. 
3.	“Things to do” section located under first two and occupying full screen width, consists of three clickable tabs.
4.	Last Section consists of the map with pins displayed based on selection made in section 3(things to do). 
    - Each pin displayed on the map is clickable
    - A click on pin opens a ribbon displayed over map with place information (Business name, Business address, and Business website).

5. Bottom of the page contains a footer with contact site owner information and icon for the GitHub repository.

# Logic of website

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

  ---

# Surface  
## Fonts  
I decided to use Google Roboto font and Sans-Serif as a fallback font.  
I think Roboto font is a most used font across whole internet, and it would not look too different for the user coming from any website they used to use.  This will create a more familiar feeling for the users.

## Colors  
I used following colours:  
- Body background color: #6AC4FF
- News section color: #D8EDFE
- Weather section background: #D8EDFE
- menu color: #6AC4FF
- Info section color: #4da5ef80

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

## Deploying on GitHub Pages
1.  Log into  [GitHub](https://github.com/)  or  [create an account](https://github.com/).
2.  Locate the  [GitHub Repository](https://github.com/alexandergrib/ms1).
3.  At the top of the repository, select Settings from the menu items.
4.  Scroll down the Settings page to the "GitHub Pages" section.
5.  Under "Source" click the drop-down menu labelled "None" and select "Master Branch".
6.  Upon selection, the page will automatically refresh meaning that the website is now deployed.
7.  Scroll back down to the "GitHub Pages" section to retrieve the deployed link.

## Forking the Repository

1.  Log into  [GitHub](https://github.com/)  or  [create an account](https://github.com/).
2.  Locate the  [GitHub Repository](https://github.com/alexandergrib/ms1).
3.  At the top of the repository, on the right side of the page, select "Fork".
4.  You should now have a copy of the original repository in your GitHub account.
    
## How to run this project within a local IDE, such as Pycharm/VScode

1.  Log into  [GitHub](https://github.com/)  or  [create an account](https://github.com/).    
2.  Locate the  [GitHub Repository](https://github.com/alexandergrib/ms1).    
3.  Under the repository name, click "Clone or download".    
4.  In the Clone with HTTPs section, copy the clone URL for the repository.    
5.  In your local IDE open the terminal.    
6.  Change the current working directory to the location where you want the cloned directory to be made.    
7.  Type 'git clone', and then paste the URL you copied in Step 3.    
    > git clone  [https://github.com/USERNAME/REPOSITORY](https://github.com/USERNAME/REPOSITORY)
8.  Press Enter. Your local clone will be created.

Further reading and troubleshooting on cloning a repository from GitHub  [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository). 

# Problems encountered: 
- After searching for place map did not center itself to that selected location
  - Fixed by setting new boundaries instead of extending previous (bounds = new google.maps.LatLngBounds();) 

- News API free version worked only on localhost, to use it online I had to upgrade to paid account.
    - switched API to Rapidapi.com. Tried to use Google search news, but response time was 3-4 seconds, this caused significant delay after page loaded and populating news feed.
    - Switched to Newscatcher API from Rapidapi.com this helped to decrease response time down to 200-300ms.

- Console error (Failed to load resource: the server responded with a status of 403 ())
    - Error coming from google API itself, after page refresh error disappear
    
- Sometimes warning in console shows-up about security for API
    - error disappears on the page refresh
    
- Console displaying: "Error with Permissions-Policy header: Unrecognized feature: 'interest-cohort'."
    - This issue coming from GitHub pages [more info about it here](https://github.blog/changelog/2021-04-27-github-pages-permissions-policy-interest-cohort-header-added-to-all-pages-sites/)
    
- Gap is visible between edge of the page and side of the browser where scroll located ([Chrome only](assets/img/testing_img/gap_chrome.png)) and scroll bar itself styled by the browser, there is no gap visible in [mozilla browser](assets/img/testing_img/no_gap_mozilla.png).
    - it looks like bug of Chrome browser itself. If the classic scroll bar displayed then issue is not present.
 

- When I tried using import/export functions I was getting [console errors](assets/img/testing_img/import_errors.png) and imported function was not working.
    - To solve this issue i decided to take different approach(maybe bit more challenging for future code maintenance) recommended by tutor assistant.
    - I separated files and added them in HTML in specific order, where main.js file loads last allowing other files to load fist. This done this way to preload functions into computer memory which are then called later in main.js file.
 
# Credits

## Acknowledgements
1. My mentor for his support and input.
2. Tutor support team for their helpful advice
3. My peers on slack for their generosity in sharing their knowledge and experience.

## Credits for text and modules
  - [Weather api](https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893)
  - [typeahead](http://twitter.github.io/typeahead.js/examples/)
  - [world cities database](https://simplemaps.com/data/world-cities)
  - [map](https://developers.google.com/maps/documentation/javascript/examples/place-search-pagination#maps_place_search_pagination-css)

## Credits for images used
  - [Favicon creator tool](https://realfavicongenerator.net/)
  - [Logo](https://pixabay.com/illustrations/vintage-sign-nautical-ship-compass-1064142/)Image by Oberholster Venita from Pixabay
  - [Background](https://www.freepik.com/vectors/background Background vector created by rawpixel.com - www.freepik.com)
  - [404 page background](Photo by https://unsplash.com/@nate_dumlao Nathan Dumlao)
