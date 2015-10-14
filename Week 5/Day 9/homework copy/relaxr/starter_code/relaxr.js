$(document).ready(function(e) {
	$('.readmore').click(function(){
		$('#show-this-on-click').slideDown('slow');
		$('.readless').show();
		$('.readmore').hide();
	});

	$('.readless').click(function() {
		$('#show-this-on-click').slideUp('slow');
		$('.readless').hide();
		$('.readmore').show();
	});

	$('.learnmore').click(function() {
		$('.hide').slideDown('slow');
		$('.learnmore').hide();
	});
})