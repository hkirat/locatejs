# Locate.js [![npm version](https://badge.fury.io/js/locatejs.svg)](https://badge.fury.io/js/locatejs)

Easy encapsulation of geolocation api

[Demo](https://hkirat.github.io/locate.js/)

## Installing
 - Use `npm` or `git clone` to download the module.
   - `npm install locatejs`
   - `git clone https://github.com/hkirat/locate.git`
 - include `locate.js` or `locate.min.js`
 - Initialise with `locate.init()`

## Methods
-----
* `locate.init` - Initialises the locate variable
* `locate.getLatitude` - Returns users Latitude
* `locate.getLongitude` - Returns users Longitude
* `locate.getImage` - Returns [Image](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image) variable to users map image
* `locate.getImageLink` - Returns users map location image's link
* `locate.getAdress` - Returns an array of users possible adresses.
	* formattedAddress : Formatted Address of user
	* address_components : Array of components of users address

## Browser Support

Works best on latest versions of Google Chrome, Firefox and Safari.