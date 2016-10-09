var mq = window.matchMedia("(max-width: 800px)");
if (mq.matches) {}
else {
	$(".backgroundslider > div:gt(0)").hide();
	var backgroundLoop = setInterval(function () {
		$('.backgroundslider > div:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('.backgroundslider');
	}, 6000);
}