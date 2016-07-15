var exittime = 2000;
var entrancetime = 2000;



var slides = $(".backgroundslider img");

var loopPictures;
var i;
var currentSlide;

//set z indexes //
for (var n = 0; n <= slides.length - 1; n++) {
	console.log(slides[n]);
	$(slides[n]).css('z-index', slides.length - n - 1);

}
//set first slide as currentSlide//
$(slides[0]).addClass('currentslide');

currentSlide = $(slides[0]);


function toggleCurrentslide() {

	currentSlide.css('z-index', 0);
	var queudedSlides = $(slides).not('.currentslide');
	for (var j = 0; j <= queudedSlides.length - 1; j++) {

		var currentZindex = parseInt($(queudedSlides[j]).css('z-index'));
		console.log(currentZindex);
		var newZindex = currentZindex + 1;
		console.log(newZindex);
		$(queudedSlides[j]).css('z-index', newZindex);
		console.log($(queudedSlides[j]).css('z-index'));

	}
	currentSlide.removeClass('currentslide');
	// update currentslide//
	if (i < slides.length - 1) {
		i++;
	} else {
		i = 0;
	}
	currentSlide = $(slides[i]);
	currentSlide.addClass('currentslide');

}


function startLoop() {
	i = 0;
	loopPictures = setInterval(loop, 4000);

}


function loop() {

	currentSlide.fadeOut(1000, function () {
		toggleCurrentslide();
	});

}
startLoop();

$(window).load(function () { //startloop//
	

});