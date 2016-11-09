$(document).ready(function () {
	var titles = $('ul.nav.menu').children();
	var targetli = $('.accordiontarget').parent();
	$(targetli).addClass('targetli');
	var moveLi = $(titles).not('targetli');
	$(moveLi).addClass('accordionmove');
	$(targetli).removeClass('accordionmove');
	$('.nav').addClass('navclose');
	$('.content').addClass('animateupmain');
	$('.accordion').click(function (e) {
		e.preventDefault();
		$('.accordiontarget').toggleClass('accordionopen');
		$('.accordionmove').toggleClass('move');
	});
	$('#button').click(function () {
		$('.content').toggleClass('animatemain');
		$('.content').toggleClass('animateupmain');
		$('.nav').toggleClass('navopen');
		$('.nav').toggleClass('navclose');
		$('body').toggleClass('toggleoverflow');
		if ($(window).scrollTop() > 0) {
			$('#homelogo a').toggleClass('logoonhome');
		}
		
		
	});
	$('.accordion').click(function () {
		$('.content').toggleClass('movebottom');
	});
	var mobilenavlinks = $('.navmobile li a');
	mobilenavlinks.click(function (event) {
		
		var targ = $(event.target);
		if (targ.hasClass('accordion')) {}
		else if (targ.not('.accordion')) {
			$('#button').toggleClass('open');
			$('.content').toggleClass('animatemain');
			$('.content').toggleClass('animateupmain');
			$('.nav').toggleClass('navopen');
			$('.nav').toggleClass('navclose');
			$('body').toggleClass('toggleoverflow');
			
		}
	});
	// LOGO INVISIBLE WHEN NO SCROLL//
	$(window).scroll(function () {
		console.log($(window).scrollTop());
		if ($(window).scrollTop() === 0) {
			$('#homelogo a').addClass('logoonhome');
		}
		else{
			
			$.fn.scrollStopped = function (callback) {
				var that = this
					, $this = $(that);
				$this.scroll(function (ev) {
					$('#homelogo a').removeClass('logoonhome');
					$('#homelogo a').addClass('fadein');
					clearTimeout($this.data('scrollTimeout'));
					$this.data('scrollTimeout', setTimeout(callback.bind(that), 250, ev));
				});
			};
			$(window).scrollStopped(function (ev) {
				console.log(ev);
				if ($(window).scrollTop() === 0) {
			$('#homelogo a').addClass('logoonhome');
		}
				$('#homelogo a').removeClass('fadein');
				$('#homelogo a').addClass('fadeout');
			});
		};
	});
	$('#homelogo a').click(function () {
		$('#button').removeClass('open');
		$('.content').removeClass('animatemain');
		$('.content').removeClass('animateupmain');
		$('.nav').removeClass('navopen');
		$('.nav').addClass('navclose');
	});

	var codeElements = document.getElementsByTagName("code");
	var i = codeElements.length;
	var delimiter = "clicking on";
	var codeBlock;
	var codeBlockContent;
	while (i--) {
		var code = codeElements[i]
		var content = code.textContent.trim()
		if (content.lastIndexOf(delimiter, 0) === 0) {
			codeBlock = code;
			codeBlockContent = content;
			break;
		}
	}
	if (!codeBlock) return
	codeBlock.parentNode.removeChild(codeBlock)

	function InstructionParsing(instruction) {
		var separator = instruction.charAt(0)
		var instructionSplit = instruction.split(separator)
		this.clickSelector = instructionSplit[1]
		this.classBehavior = instructionSplit[2].trim().split(" ")[0]
		this.classValue = instructionSplit[3]
		this.targetSelector = instructionSplit[5]
	}

	function UIElement(clickSelector, classBehavior, classValue, targetSelector) {
		this.clickSelector = clickSelector;
		this.classBehavior = classBehavior.charAt(classBehavior.length - 1) == "s" ? classBehavior.substring(0, classBehavior.length - 1) : classBehavior;
		this.classValue = classValue.charAt(0) == "." ? classValue.substring(1, classValue.length) : classValue;
		this.targetSelector = targetSelector;
		this.createEventListener();
	}
	UIElement.prototype.createEventListener = function () {
		var self = this;
		var clicked = document.querySelectorAll(self.clickSelector);
		var i = clicked.length;
		if (i < 1) {
			throw new Error("There's no element matching your \"" + self.clickSelector + "\" CSS selector.");
		}
		while (i--) {
			clicked.item(i).addEventListener("click", clickCallback);
		}

		function updateClass(el) {
			el.classList[self.classBehavior](self.classValue);
		}

		function clickCallback(e) {
			switch (self.targetSelector) {
			case "target":
			case "this":
			case "it":
			case "itself":
			case undefined:
				updateClass(e.target)
				break;
			default:
				var target = document.querySelectorAll(self.targetSelector)
				var i = target.length
				while (i--) {
					updateClass(target.item(i))
				}
			}
			if (e.target.nodeName.toLowerCase() == "button") {
				e.preventDefault()
			}
		}
	}
	codeBlockContent.split(delimiter).forEach(function (data) {
		if (!data) return;
		var params = new InstructionParsing(data.trim());
		new UIElement(params.clickSelector, params.classBehavior, params.classValue, params.targetSelector);
	});
	/*
	// article adaptation
	var adaptArticle = $('.adapt-article');

	adaptArticle.on('click', clicAdaptArticle);

	function clicAdaptArticle(e) {


		$(this).toggleClass('adapt-article-infos-visible');

		var adaptInfos = $(this).find('.adapt-infos');
		adaptInfos.toggleClass('adapt-infos-visible');
	}*/
});