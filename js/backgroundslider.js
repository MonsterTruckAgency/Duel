var loopPictures;
var slideIndex;
var slides;
var currentSlide;
var queudedSlides;

//set z indexes //
function setSlider() {
	slides = $(".backgroundslider img");
	for (var slideIndex = 0; slideIndex <= slides.length - 1; slideIndex++) {
		slides[slideIndex].style.opacity = "1";
		$(slides[slideIndex]).css('z-index', slides.length - slideIndex - 1);
	}
	$(slides[0]).addClass('currentslide');
	currentSlide = $(slides[0]);
	//set first slide as currentSlide//
	queudedSlides = $(slides).not('.currentslide');
	queudedSlides.addClass('queudedslides');
}


function toggleCurrentslide() {
	// change z index of current slide to 0// 
	$(currentSlide).css('z-index', 0);
	currentSlide[0].style.opacity = "1";
	// change z index of queuded slides //
	for (var jindex = 0; jindex <= queudedSlides.length - 1; jindex++) {

		var newZindex = parseInt($(queudedSlides[jindex]).css('z-index')) + 1;
		
		$(queudedSlides[jindex]).css('z-index', newZindex);
	
		

	}
	
	// update currentslide//
	if (slideIndex < slides.length - 1) {
		slideIndex++;
		// set next slide//

	} else {
		slideIndex = 0;
		// restart slider//

	}
	currentSlide.removeClass('currentslide');
	currentSlide.addClass('queudedslides');
	currentSlide = $(slides[slideIndex]);
	console.log(slideIndex);
	currentSlide.removeClass('queudedslides');
	currentSlide.addClass('currentslide');
	for (var slidei = 0; slidei <= slides.length - 1; slidei++) {
		slides[slidei].style.opacity = "1";
		
	}

}


function startLoop() {
	slideIndex = 0;
	loopPictures = setInterval(loop, 4000);

}


function fadeOutAndCallback(image, callback) {
	var opacity = 1;
	image = image[0];
	console.log(image);
	var timer = setInterval(function () {
		if (opacity < 0.1) {
			clearInterval(timer);
			callback(); //this executes the callback function!
		}
		image.style.opacity = opacity;
		opacity -= 0.1;
	}, 50);
}


function loop() {
	currentSlide = $('.currentslide');
	queudedSlides = $(slides).not('.currentslide');
	fadeOutAndCallback(currentSlide, function () {
		toggleCurrentslide();
	});

}


$(window).load(function () {

	setSlider();
	startLoop();

});