

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
-	My website is aimed to target traveling visitors, to provide them "all in one" source of information they can check before visiting their destination
-	My goal is to provide information about current weather in selected city.
-	My goal is to provide information about relative news for selected city by displaying news headlines with clickable links to full article
-	My goal is to provide information about entertainment places, places to stay and things to do around selected location
-	Website user should have possibility to switch between restaurants, things to do and stay(hotels) after results are displayed
-	Website user should have possibility to switch between Centigrade and Fahrenheit for their convenience 
-	Website user should be able to click on the "pins" displayed on map to get more info about their plaice of interest


## User goals  
-	As a user I want to be able to search for the required destination and be able to get relevant information 
-	As a user I want to have possibility of my location to be identified automatically  
-	As a user I want to be able to choose in which units to display information metric or imperial  
-	As a user I want to be able to see current weather in specified destination
-	As a user I want to be able to see news in the selected destination  
-	As a user I want to be able to see places to stay, eat, or points of interests in the selected destination  

  
  
 

  
  




# Structure of the website  

The website consists one page with the search field and search button. With brief instructions what is this website about and how to use it.  
On the first-time visiting website, user will be offered to automatically detect their location.
Once current city identified automatically or entered manually, searched Information will  be displayed and map section updated.
User will be offered to select which units to display by clicking on setting button and pick either “C” or “F” selector, located next to the search button. 
By default, “C” option will be active. To clearly display which one is active now, “C” or “F” will show next to setting button.

Main page split into 3 different sections
1.	News section utilize news API to display current city general news for the searched place.
2.	Weather section divided into 2 subsections. 
    -	Main section will display current weather forecast, current temperature, and icon for the current weather(clouds, sun, rain, etc.)
3.	“Things to do” section located under first two and occupying full screen width, will consist three clickable tabs.
4.	Last Section consist map with pins displayed based on selection made in section 3(things to do). 
    - Each pin displayed on the map is clickable
    - Click on pin will open ribbon displayed over map with place information(Business name, Business address, and Business website).

Bottom of the page will contain footer with contact site owner information and icons for GitHub repository.
  


##Adaptivity
Website will adapt to screen size by rearranging sections and adjusting their width to fit into smaller screen.

### Medium size
On medium screen size webpage will keep its layouts as on the larger screen but will get downsized to fit into user screen size.


### Mobile screen
On mobile devices and other small screens each section will occupy full width of the screen and will be moved one under another. 


# Wireframes  
Wireframes can be found here:
#### [Desktop](wirefames/wireframes/Desktop.png)
#### [Mobile](wirefames/wireframes/Mobile.png)
  ---
# Surface  
## Fonts  
I decided to go with Google Roboto font and sans-serif as a fallback font.  
I think Roboto font is a most used font across whole internet, and it would not look too different for the user coming from any website they used to use.  This will create a more familiar feeling for the users.
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
-	After “things to do”, map section with location pins displayed on the map. Location for the pins taken from “things to do” section and should be updated on user choice of selection in “things to do” section.
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
- After searching for place map not center itself to that location
  - Fixed by setting new boundaries instead of extending previous (bounds = new google.maps.LatLngBounds();) 

- News API free version works only on localhost, to use it online i have to upgrade to paid account.
    - switched API to Rapidapi.com. Tried to use Google search news, but response time was 3-4 seconds, this caused significant delay after page loaded and populating news feed.
    - Switched to Newscatcher API from Rapidapi.com this helped to decrease response time down to 200-300ms.


- Console error (Failed to load resource: the server responded with a status of 403 ())
    - error coming from google API (need to investigate more what is causing it)
    
- Sometimes warning in console show-up about security for API
    - error disappear on the page refresh
    
- Console displaying: "Error with Permissions-Policy header: Unrecognized feature: 'interest-cohort'."
    - don't know where this one coming from, need to investigate it.
    


# Credits  


## Credits for text and modules
- [Weather api](https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893)
- [typeahead](//http://twitter.github.io/typeahead.js/examples/)
- [world cities database](https://simplemaps.com/data/world-cities)
- [map](https://developers.google.com/maps/documentation/javascript/examples/place-search-pagination#maps_place_search_pagination-css)

## Credits for images used
 - [Favicon creator tool](https://realfavicongenerator.net/)
 
