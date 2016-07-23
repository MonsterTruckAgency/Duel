//********************* disables section "about" scroll**********************************************************************"

$('#bio').on({
	'mousewheel': function (e) {

		e.preventDefault();

	}
})

//***************************************************************** scroll to sections //************************************/



$('a[href^="#"]').on('click', function (event) {

	var target = $($(this).attr('href'));

	if (target.length) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 1000);
	}

});


//*****************************************************************animations on scroll //************************************/

// get targeted elements' offset //

var videosOffset = (Math.floor(($('#videos').offset()).top));

var photosOffset = Math.floor(($('#photos').offset()).top);

var contactOffset = Math.floor(($('#contact').offset()).top);

var aboutOffset = Math.floor(($('#about').offset()).top);

var musicOffset = Math.floor(($('#music').offset()).top);

var menuLinks = $("#menu a");


// letter spacing effect settings //

var letterEffectTargets = $(".letterEffect");

$(".letterEffect").addClass('spacingoff');


// executes on scroll //

$(window).scroll(function () {


	// scroll bottom offset //
	var offsetBottom = $(window).scrollTop() + $(window).height();
	// menu and logo offset //
	var menuOffset = Math.floor(($('#menu').offset()).top);

	var logoOffset = Math.floor(($('#backhome').offset()).top);

	// LETTER SPACING EFFECT //
	//execute effect//
	for (var n = 0; n < letterEffectTargets.length; n++) {



		// executes effect when scrolls into view //
		if (($(letterEffectTargets[n]).offset().top + $(letterEffectTargets[n]).height()) <= offsetBottom && $(letterEffectTargets[n]).hasClass('spacingoff') && $(letterEffectTargets[n]).offset().top > $(window).scrollTop()) {

			console.log('hi');

			$(letterEffectTargets[n]).animate({
				'letter-spacing': '1.5vw'
			}, 1500);

			$(letterEffectTargets[n]).removeClass('spacingoff');

			$(letterEffectTargets[n]).addClass('spacingon');
		}


	};



	// ADDS MENU FILTER  //

	/*
    
    if (menuOffset <= musicOffset){
        $('#menu').css('background', 'rgba(255,255,255, 0.0)'); 
        
    }
    
    else if (menuOffset >= musicOffset){
        $('#menu').css('background', 'rgba(255,255,255, 0.1)'); 
        
    }
   */


	// MANAGES LOGO CHANGE //

	if ((logoOffset >= videosOffset && logoOffset <= photosOffset) /*|| logoOffset >= contactOffset*/) {

		$('#logosmall').attr("src", 'img/logoduelwhite.svg');
	} else if (logoOffset >= photosOffset /*&& logoOffset <= contactOffset*/) {
		$('#logosmall').attr("src", 'img/logoduelblack.svg');

	} else if (logoOffset <= videosOffset) {

		$('#logosmall').attr("src", 'img/logoduelblack.svg');

	} else if (/*logoOffset <= contactOffset && */logoOffset <= aboutOffset) {

		$('#logosmall').attr("src", 'img/logoduelblack.svg');

	}
	// MANAGES LINKS COLORS  //

	var offsetLinks = [];


	for (var i = 0; i < menuLinks.length; i++) {
		offsetLinks.push($(menuLinks[i]).offset().top);


		if ((offsetLinks[i] >= videosOffset && offsetLinks[i] <= photosOffset) /*|| offsetLinks[i] >= contactOffset*/) {

			$(menuLinks[i]).css('color', 'white');


		} else if (offsetLinks[i] >= photosOffset /*&& offsetLinks[i] <= contactOffset*/) {


			$(menuLinks[i]).css('color', '#231f20');

		} else if (offsetLinks[i] <= videosOffset) {

			$(menuLinks[i]).css('color', '#231f20');

		} else if (/*offsetLinks[i] <= contactOffset &&*/ offsetLinks[i] <= aboutOffset) {

			$(menuLinks[i]).css('color', '231f20');

		}

	}




});



//*****************************************************************slider //************************************/
/*$(function () {
	SyntaxHighlighter.all();
});*/
$(window).load(function () {
	$('.flexslider').flexslider({
		animation: "slide"
		, start: function (slider) {
			$('body').removeClass('loading');
		}
	});
});


$(function () {
	var toggles = $('.toggle a')
		, codes = $('.code');

	toggles.on("click", function (event) {
		event.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("active")) {
			toggles.removeClass("active");
			$this.addClass("active");
			codes.hide().filter(this.hash).show();
		}
	});
	toggles.first().click();
});