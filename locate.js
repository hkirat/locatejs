(function() {
	var initialsed = false;
	var supported = false;
	var latitude = null;
	var longitude = null;
	var address = null;

	if (!navigator.geolocation) {
		supported = true;
  	};

	function success() {
	    latitude  = position.coords.latitude;
	    longitude = position.coords.longitude;
	    loadAddress();
	}
	
	function getLatitude() {
		return latitude;
	}
	
	function getLongitude() {
		return longitude;
	}

	function getImage(width, height) {
		width = width || 300;
		height = height || 300;
	    var img = new Image();
	    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
	    return img;
	}

	function loadAddress() {
	    var xmlhttp = new XMLHttpRequest();

	    xmlhttp.onreadystatechange = function() {
	        if(xmlhttp.readyState == XMLHttpRequest.DONE ) {
				if (xmlhttp.status == 200) {
					address = xmlhttp.responseText
				}
	        }
	    };
    	xmlhttp.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude, true);
    	xmlhttp.send();
	}

	function getAddress() {
		return address;
	}

  	function init() {
  		if(!supported) {
  			return;
  		}
  		navigator.geolocation.getCurrentPosition(success, error);
  	}
	
	window.locate = {
		init: init,
		getLongitude: getLongitude,
		getLatitude: getLatitude,
		getAddress: getAddress
	}
})();