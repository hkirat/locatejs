(function() {
	var supported = false;
	var latitude = null;
	var longitude = null;
	var address = null;
	var api_key = null;

	if (navigator.geolocation) {
		supported = true;
  	};

	function success(position) {
	    latitude  = position.coords.latitude;
	    longitude = position.coords.longitude;
	    loadAddress();
	}
	
	function error (err) {
		console.log(err);
	}

	function getLatitude() {
		return latitude;
	}
	
	function getLongitude() {
		return longitude;
	}

	function setKey(key) {
		api_key = key;
	}
	function getImage(width, height) {
		var width = width || 300;
		var height = height || 300;
	    var img = new Image();
	    if(api_key) {
			img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size="+width+"x"+height+"&key="+api_key;
	    }
	    else {
			img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size="+width+"x"+height+"";
	    }

	    return img;
	}

	function getImageLink(width, height) {
		var width = width || 300;
		var height = height || 300;
	    return "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size="+width+"x"+height+"";	
	}

	function loadAddress() {
	    var xmlhttp = new XMLHttpRequest();

	    xmlhttp.onreadystatechange = function() {
	        if(xmlhttp.readyState == XMLHttpRequest.DONE ) {
				if (xmlhttp.status == 200) {
					address = JSON.parse(xmlhttp.responseText).results;
				}
	        }
	    };
    	xmlhttp.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude, true);
    	console.log("https://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude);
    	xmlhttp.send();
	}

	function getAddress() {
		return address;
	}

	function init(key) {
  		if(!supported) {
  			return;
  		}
		if(key) {
			api_key = key;
		}
  		navigator.geolocation.getCurrentPosition(success, error);
  	}
	
	window.locate = {
		init: init,
		getLongitude: getLongitude,
		getLatitude: getLatitude,
		getAddress: getAddress,
		getImage: getImage,
		getImageLink: getImageLink,
		setKey: setKey
	}
})();