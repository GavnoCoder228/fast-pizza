$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#purchase-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$(".fancybox").fancybox({
		helpers : { 
			overlay: {
    opacity: 0.8,// or the opacity you want 
   } // overlay 
  } // helpers
});

	//Chrome Smooth Scroll
/*try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
		$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });*/
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});


// HeaderParallax
$(window).scroll(function() {
	
	var wScroll = $(this).scrollTop();
	
	$(".header-logo").css({
		'transform' : 'translate(0px, '+ wScroll /2.5 +'%)'
	})
	
	$(".mr").css({
		'transform' : 'translate(0px, '+ wScroll /10 +'%)'
	})
	
	$(".baz").css({
		'transform' : 'translate(0px, '+ wScroll /2 +'%)'
	})


});

// HeaderButtonDown

$(".button-down").click(function() {
	$("html, body").animate({ scrollTop: $(".parallax").height()}, 900);
	return false;
	
}); 


// Carousel

$(document).ready(function() {
	
	$("#carousel").owlCarousel({
		
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
      
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
      
    });
	
});