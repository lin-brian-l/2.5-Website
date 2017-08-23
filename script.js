$(document).ready(function() {
	$("header").click(function(){
 		$("img").toggle("slow");
	});

	var store_w_h = function() {

		$("img").click(function() {
			var w = $(this).width();
			var h = $(this).height();
			return [w, h]
		});
	};

	$("img").toggle(function() {
	    $(this).stop().animate({
	        width: "350px",
	        height: "300px"
	    }, 500);
	}, function(store_w_h) {
	    $(this).stop().animate({
	        width: store_w_h[0],
	        height: store_w_h[1]
	    }, 500);
	});

	// $('img').click(function() {
	// 	$(this).click( function() {
	// 		var toggleSize = $(this).width "200px" : "300px" ;
	// 		$(this).animate({ width: toggleSize});
	// 	});
		// $(this).css("cursor", "pointer");
		// $(this).css({
		// 	height: "100px",
		// 	width: "100px"
		// });
	// });

});

// var $img = $('img'); // finds all image tags

// $img.click(function resize(e) { // bind click event to all images
//   $img.css({ // resize the image
//      height: '300px',
//      width: '300px'
//   });
// });

console.log("Test");