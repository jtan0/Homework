$(document).ready(function() {

// Step 1: Store variable so it can show result

var result = 0;

// Step 2: On click of zero button, add 0 to the result. show new result

$('#zero').click(function() {
	updateResult(0);
});

// Step 3: On click of +5 button, add +5 to the result. show new result

$('#add5').click(function() {
	updateResult(5);
});

// Step 4: On click of +10 button, add 10 to the result. show new result

$('#add10').cclick(function() {
	updateResult(10);
});

// Step 5: On click of -1 button, subtract -1 to the new result. show new result

$('#sub1').click(function() {
	updateResult(-1);
});

function updateResult(newNum) {
	result = result + newNum;

	$('#result').text(result);
}

});