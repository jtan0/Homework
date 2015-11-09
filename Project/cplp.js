$(document).ready(function(){
	  $(".btn").click(function(e) {
        e.preventDefault();
        $(this).modal('show');
    });
});