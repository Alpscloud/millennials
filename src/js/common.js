$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
			html = body.width(),
			timer; // for disable scroll
	// ========= =========== =========== ===========

	// Disable hover effect when client scrolles the page
	$(window).on('scroll',function() {
		clearTimeout(timer);
		if(!body.hasClass('disable-hover')) {
			body.addClass('disable-hover');
		}

		timer = setTimeout(function() {
			body.removeClass('disable-hover');
		}, 200);
	});


	$('.btn-toggle, li.last-item span').on('click', function(e) {
		e.preventDefault();
		$(this).next('.btn-toggle').toggleClass('is-active');
		$(this).toggleClass('is-active');
		$(this).parents('li').find('ul').stop().slideToggle(150);

	});


	$('.js-toggle-filter-labels-btn').on('click', function(e) {
		e.preventDefault();

		var filter = $(this).parents('.filter-params').find('.filter-params__labels');

		$(this).addClass('is-hidden');

		filter.animate({
			height: filter.get(0).scrollHeight
		}, 300, function(){
				$(this).height('auto');
		});
	});


	$('.js-open-filter-btn').on('click', function(e) {
		e.preventDefault();

		$('.js-filter').addClass('is-opened');
	});

	$('.js-close-filter-btn').on('click', function(e) {
		e.preventDefault();

		$('.js-filter').removeClass('is-opened');
	});

	$('.langs-current').on('click', function(e) {
		e.preventDefault();

		$(this).parents('.langs').toggleClass('is-active');
	});


	$('.advantage__title').on('click', function(e) {
		e.preventDefault();

		$(this).parents('.advantage').toggleClass('is-active');
		$(this).parents('.advantage').find('.advantage__text').stop().slideToggle(300);
	});


	$('.js-open-menu-btn').on('click', function(e) {
		e.preventDefault();

		$(this).addClass('is-active');

		$('html').addClass('is-fixed');
		$('.js-menu').addClass('is-opened');
	});


	$('.js-close-menu-btn').on('click', function(e) {
		e.preventDefault();
		
		$('.js-open-menu-btn').removeClass('is-active');

		$('html').removeClass('is-fixed');
		$('.js-menu').removeClass('is-opened');
	});


	$('.js-open-search-btn').on('click', function(e) {
		e.preventDefault();
		$('html').addClass('is-fixed');
		$('.js-search').addClass('is-opened');
	});

	$('.js-close-search-btn').on('click', function(e) {
		e.preventDefault();
		$('html').removeClass('is-fixed');
		$('.js-search').removeClass('is-opened');
	});




	if (html < 1100) {
		var headerPanelOffset = $('.header-content').offset().top;
		var headerPanelHeight = $('.header-content').innerHeight();

		$(window).on('scroll', function() {
			var scroll = $(this).scrollTop();

			if (scroll > headerPanelOffset) {
				$('.header-content').addClass('is-fixed');
				$('.header').css('padding-bottom', headerPanelHeight + 'px');
			} else {
				$('.header-content').removeClass('is-fixed');
				$('.header').css('padding-bottom', 0);
			}
		});
	}




	


	$('.js-promo-slider').slick({
		arrows: false,
		infinite: true,
		dots: false,
		autoplay: true,
		autoplaySpeed: 6000
	});


	function initProductSlider() {

		$('.js-product-slider').slick({
			arrows: false,
			dots: true,
			autoplay: false,
			infinite: true
		});

	}

	if(html < 1100) {
		initProductSlider();
	} 


	$('.js-another-products-slider').slick({
		arrows: false,
		dots: true,
		autoplay: false,
		slidesToShow: 5,
		centerMode: false,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('[data-fancybox]').fancybox({
		gallery: true,
		loop: true,
		buttons: ['close', 'zoom']
	})

	$('.product-imgs, .product-information__content').theiaStickySidebar({
		'additionalMarginTop': 100,
		'disableOn': false
	});

});
