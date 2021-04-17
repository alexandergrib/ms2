https://www.w3.org/TR/geolocation-API/



# Milestone 2 project  
  
## [Live website on github pages](https://alexandergrib.github.io/ms2/)  
  
![Responsive display](helping_materials/responcive-img.JPG)

---
# Table of contents  
-
-
-


# UX  
  
## Website owner business goals  
-	My website is aimed to target traveller visitors, to provide them all in one source of information they can check before visiting their destination.
-	My goal is to provide information about current and forecasted weather in selected city.
-	My goal is to provide information about what is happening in the country of selected city by displaying news headlines
-	My goal is to provide information about entertainment places and things to do around selected city
-	Website user should have possibility to switch between restaurants, things to do and stay(hotels) after results are displayed
-	Website user should have possibility to switch between Centigrade and Fahrenheit for their convenience this also should reflect in other units of measure (wind speed for example)
-	Website user should be able to click on the card with a “things of interest” provided to get redirected over to the provided place own website which will open in the new window.


## User goals  
-	As a user I want to be able to search for the required destination and be able to get relevant information 
-	As a user I want to have possibility of my location to be identified automatically  
-	As a user I want to be able to choose in which units to display information metric or imperial  
-	As a user I want to be able to see current weather in specified destination
-	As a user I want to be able to see news in the selected destination  
-	As a user I want to be able to see places to visit in the selected destination  
-	As a user I want to be able to see places to stay in the selected destination  
-	As a user I want to be able to see places to eat in the selected destination
-	As a user I want to be able to open a link to webpage of the place provided
  
  
 

  
  




# Structure of the website  

The website consists one page with the search field and search button. And have brief instructions what is this website about and how to use it.  On the first-time visiting website, user will be offered to automatically detect their location, or manually enter their city.
Once current city is identified automatically or entered manually, brief description will disappear, and searched Information will  be placed instead.
User will be offered to select which units to display by clicking on either “C” or “F” button, located next to the search button. By default, “C” option will be active. To clearly display which one is active now, “C” or “F” will show in different font size, active will have 50% bigger font size.

Main page is split into 4 different sections
1.	News section utilize news API to display current countrywide general news for the searched place.
2.	Weather section is divided into 2 sub  sections. 
a.	Main section will display today weather forecast with today date, current temperature, and icon for the current weather(clouds, sun, rain, etc.)
b.	Second section will display minimalistic forecast for the next 3 days, and will include date, temperature, and weather icon.
3.	“Things to do” section located under first two and occupying full screen width, will consist with cards displaying relevant search information for the desired destination.
a.	On the top of this section will also display selectors where user can choose between (Things to do, Places to eat, Places to stay), after selection made card will be updated with relevant information based on user selection.
b.	Each card will be linked to relevant webpage for the place found, allowing user to explore place in interest. Page will open in the new page.
4.	Last Section is a map with pins displayed based on selection made in section 3(things to do). 

Bottom of the page will contain footer with contact site owner information and icons for GitHub repository.
  

In case of any of the API get failed, error message will be displayed with an option to choose to load default information for the failed API. (Fill with dummy data if button was clicked).

##Adaptivity
Website will adapt to screen size by rearranging sections and adjusting their width to fit into smaller screen.

### Medium size / tablet
On medium screen size webpage will keep its layouts as on the larger screen but will get downsized to fit into user screen size.

### Mobile screen
On mobile devices and other small screens each section will occupy full width of the screen and will be moved one under another.  
# Wireframes  
Wireframes can be found here:
##### [Desktop / Tablet](wireframes/mobile.png)
##### [Mobile](wireframes/mobile.png)
  ---
# Surface  
## Fonts  
I decided to go with Google Roboto font and sans-serif as a fallback font.  
I think Roboto font is a most used font across whole internet, and it would not look too different for the user coming from any website they used to use.  This will create a more familiar feeling for the users.
## Colors  
I used following colours:  
- Body background color: #C6E7C6  
- jumbotron color: #215020
- Headings color: #474545
- Text color: #474545  
- Background color header and footer: #93C47D
    
## Images    
## Text  

 
 

# Features    
## Existing Features    
### Home (index.html):  
•	Search field with search button
o	Search field should contain typeahead functionality.
•	Pop up message asking user to allow to use user device location
•	Information section how to use this website and what it offers to the user
•	Once search is made, Informational section will disappear and new 4 sections will be displayed
o	News section occupying left side 30% of the screen
o	Weather section located next to the news section and occupying 60% of the screen
o	“Things to do” section occupying 90% of the width located below weather and news section
o	After “things to do”, map section with location pins displayed on the map. Location for the pins taken from “things to do” section and should be updated on user choice of selection in “things to do” section.
### Footer: 
•	 Footer containing website owner contact information and icons for the GitHub repository


  
### Contact form (contact.html):  
•	Contact form will be made of modulo and contain following field
o	Your full name (required)
o	Your email (required)
o	Your message  (required)
o	Would you like to be contacted selector.
•	On submit, "Thank you" message will be shown. And email will be sent to me.

## Features left to implement:  
 
# Technologies used:  
	HTML   
	CSS  
	Javascript
	Bootstrap  
	Fontawesome  
	Google Fonts    
	Github  
	Git  
	Balsamiq  
	[Trello](https://trello.com/b/AimOKUHW/ms1-project) for KANBAN project organizing
  
# Testing
Testing.md  

# Deployment  
- Deployment made via GitHub pages.  Fork my repository, then go to Setting on forked repository scroll down to GitHub Pages and select in Source section the branch to be used.  
  
# Problems encountered: 
- Google debug console shows "places.js:37 Uncaught ReferenceError: google is not defined
    at places.js:37" 
    * This is not real error, it occurs due to code being in separate file from where maps init was declared
- After searching for place map not center itself to that location

- News API free version works only on localhost, to use it online i have to upgrade to piad account.
    - switched API to Rapidapi.com. Tried to use Google search news, but response time was 3-4 seconds, this caused significant delay after page loaded and populating news feed.
    - Switched to Newscatcher API from Rapidapi.com this helped to decrease response time down to 200-300ms.


- Console error (Failed to load resource: the server responded with a status of 403 ())
    - error coming from google API (need to investigate more what is causing it)
    


# Credits  

## Credits for text and modules
- [Weather api](https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893)
- [typeahead](//http://twitter.github.io/typeahead.js/examples/)
- [world cities database](https://simplemaps.com/data/world-cities)
## Credits for images used
 

