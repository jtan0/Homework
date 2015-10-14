// Make sure to wait until the page is loaded to initiate code

$(document).ready(function() {


// Create a function when user submits a string
	$('.container').submit(function(event) {
		event.preventDefault();
		// Store the user input value into a variable called city
			var city = $('#city-type').val();
		// If user puts in variation of NYC,
		if(city === "nyc" || city === "New York" || city === "New York City"){
			// Remove background and addClass nyc
			$('body').removeClass().addClass('nyc');
		// If user puts in variation of San Fransisco
		} else if (city === "San Fransisco" || city === "SF" || city == "Bay Area") {
			// Remove background and add class
			$('body').removeClass().addClass('sf');
		// If user puts in variation of Los Angeles
		} else if (city === "Los Angeles" || city === "LA" || city == "LAX") {
			// Remove background and add class
			$('body').removeClass().addClass('la');
		// If user puts in variation of austin
		} else if (city === "Austin" || city === "AUX") {
			// Remove Background add class 'la'
			$('body').removeClass().addClass('austin');
		// If user puts in variation of Sydney
		} else if (city === "Sydney" || city === "SYD") {
			// Remove background
			$('body').removeClass().addClass('sydney');
		};
	});
})