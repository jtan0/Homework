$(document).ready(function() {
$('form').on('submit', function(e) {
	e.preventDefault();
	$('#validate-form').validate() 
	});
	var firstName = $('input[name="first"]').val();
	var lastName = $('input[name="last"]').val();
	var phoneNumber = $('input[name="tel"]').val();
	var Address = $('input[name="address"]').val();
	var Address2 = $('input[name="address2"]').val();
	var city = $('input[name="city"]').val();
	var zipCode = $('input[name="zip"]').val();
	var course = $('select[name="course"]').val();
	var pastExperience = $('input[name="experience"]').val();
	var referral = $('select[name="referral"]').val();
	var comment = $('input[name="comment"]').val();

	var data = {
		firstName: firstName,
		lastName: lastName,
		phoneNumber:phoneNumber,
		Address: Address,
		Address2:Address2,
		city: city,
		zipCode: zipCode,
		course:course,
		pastExperience:pastExperience,
		referral:referral,
		comment:comment
	};


	console.log(comment);
	console.log(data);
	})
});