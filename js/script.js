$(document).ready(function () {
	window.addEventListener('scroll', function () {
		if (pageYOffset < 10) {
			header.classList.remove('header-dark')
		}
		if (pageYOffset > 10) {
			header.classList.add('header-dark')
		}
	});

	$('.team__slider').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		speed: 1200,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: true
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	});

	$('a[href^="#"]').click(function () {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1200);
		return false;
	});
	$('.burger').on('click', function () {
		$(this).toggleClass('burger-act');
		$('.header ul').toggleClass('open');
	});
	$('.header ul li a').on('click', function () {
		$('.open').removeClass('open');
		$('.burger').removeClass('burger-act');
	});
	$('.works__tab-link').click(function () {
		if (!$(this).hasClass('works__tab-link-active')) {
			$(this).siblings().removeClass('works__tab-link-active');
			$(this).addClass('works__tab-link-active');
		}
	});
	$('#link-all').on('click', function () {
		$('.works__tab').css({
			'display': 'none',
		});
		$('#tab-all').css({
			'display': 'block',
		});
	});
	$('#link-web').click(function () {
		$('.works__tab').css({
			'display': 'none',
		});
		$('#tab-web').css({
			'display': 'block',
		});
	});
	$('#link-des').click(function () {
		$('.works__tab').css({
			'display': 'none',
		});
		$('#tab-des').css({
			'display': 'block',
		});
	});
	$('#link-moc').click(function () {
		$('.works__tab').css({
			'display': 'none',
		});
		$('#tab-moc').css({
			'display': 'block',
		});
	});
});