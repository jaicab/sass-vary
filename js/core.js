

// Respond - Uncomment this if you want extra support for media queries
// yepnope({
// 	test : Modernizr.mq('only all'),
// 	nope : ['/wp-content/themes/basecreative/js/vendor/respond.js']
// });



// ready(function(){		

// 	// Toggle nav
// 	document.querySelector(".nav-toggle-menu").addEventListener("click", function(event){
// 		(event.preventDefault) ? event.preventDefault() : event.returnValue = false; 
// 		var theTarget = document.querySelector(".nav-target-menu");

// 		if(theTarget !== undefined){
// 			// Use the active classes to change the style of both elements with CSS
// 			this.classList.toggle('active');
// 			theTarget.classList.toggle('active');
// 		}
// 	});

// });



$(function(){

	//Activate form validation (polyfiller.js)
	webshim.activeLang('en-GB');
 	webshim.polyfill('forms forms-ext');


 	//Navigation toggle
	$('.nav-toggle-menu').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.nav-target-menu').toggleClass('active');
	});

});