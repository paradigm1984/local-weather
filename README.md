# local-weather
a weather app based on your location

## Technologies used:

- HTML5
- CSS3
- Javascript
- jQuery
- Node JS

## NPM packages used:

- express
- nodemon

## Usage

#### First, the application gets the user's coordinates (as long as the user shares their location) using the navigator.geolocation function.

![alt text](screenshots/ "first")

####  The web app then makes an AJAX call to a weather API to get the weather based on your coordinates. during this time, a loading widget appears.

![alt text](screenshots/ "second")

####  When the data is returned back from the API, the loading widget is hidden and the data is injected in to their appropriate <span> tags. 
