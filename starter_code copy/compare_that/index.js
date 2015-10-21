

	var result;

// Step 1: on click of button Compare, get value of inputA and inputB

	$("#submit").click(compareNumbers);

// Step 2: Compare numbers, 

function compareNumbers() {

	// Get the Value of a & b

	var inputA = $('#a').val();
	var inputB = $('#b').val();

	// Convert inputA and inputB into numbers
	inputA = parseInt(inputA);
	inputB = parseInt(inputB);

	// if a > b, then place greater than sign inside comparison span

	if(inputA === inputB) {
		result = "=";
	} else if (inputA > inputB) {
		result = ">";
	} else {
		result = "<"
	}
	
	// if a < b, then place less than sign inside comparison span
	
	// if a === b, then place the equal sign inside the comparison span

	// Update span with Comparison Result

	$("#comparison").text(result);

}

