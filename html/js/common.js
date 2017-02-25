$(function() {


	//Выравнивание блоков по высоте

	$(".features__item-title").equalHeights();

	//popup

	$(document).ready(function() {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	//Прелоадер
	$(document).ready(function() {
		$("#preloader__img").fadeOut();
		$("#preloader").fadeOut("300");
	});

});
