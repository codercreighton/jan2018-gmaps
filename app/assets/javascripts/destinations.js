$(document).ready(function() {

	var myCoords = new google.maps.LatLng(latitude,longitude);
	
	function initialize() {
      var mapOptions = {
      center: myCoords,
      zoom: 15,
      scrollwheel: false
      };
        
      var map = new google.maps.Map(document.getElementById('destination-map'), mapOptions);    
    	
    	// var image = {
    	// 	url: "http://warpcomputers.com/wp-content/uploads/2013/07/laptop_grey.png",

    	// 	size: new google.maps.Size(20, 32)
    	// };
    	var image =  "http://warpcomputers.com/wp-content/uploads/2013/07/laptop_grey.png";

    	// var image = "<%= image_path 'laptop_grey.png'%>";
    	
    	var marker = new google.maps.Marker({

    		position: myCoords,
    		map: map,
    		title: address,
    		animation: google.maps.Animation.DROP
			});


    	var contentString = "<h2>" + address + "</h2>";

    	var infoWindow = new google.maps.InfoWindow({
    		content: contentString
    	});

    	google.maps.event.addListener(marker, 'click', function() {
    		infoWindow.open(map,marker)
    	});

    }


      
    google.maps.event.addDomListener(window, 'load', initialize);
});


