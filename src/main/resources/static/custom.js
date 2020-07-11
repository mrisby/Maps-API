let map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	    center: coords,
	    zoom: 14,
	    scrollwheel: false
	});

	let image = {url: '/flag-129531_640.jpg', scaledSize: new google.maps.Size(25, 25)};
	
	let marker = new google.maps.Marker({
		position: coords,
		map: map,
		icon: image,
		animation: google.maps.Animation.BOUNCE
	});

	let contentString = '<h2>' + city + ', ' + state + '</h2>';
	
	let infoWindow = new google.maps.InfoWindow ({
		content: contentString
	});

	google.maps.event.addListener(marker, 'click', function(){
		infoWindow.open(map, marker);
	});
}