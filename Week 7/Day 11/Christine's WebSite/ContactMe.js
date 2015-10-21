$(document).ready(function(e) {
	e.preventDefault();
	$('form').validate( {
		rules: {
			field: {
				required: true;
				email: true;
			}
		}
	}
});