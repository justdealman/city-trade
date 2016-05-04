$(function() {
	$('.team-b > div').slick({
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		adaptiveHeight: true
	});
	$('input[type="checkbox"], input[type="radio"]').uniform();
	$('.warning-c .close-icon').on('click', function(e) {
		e.preventDefault();
		var t = $(this).parents('.warning-c');
		$(this).parent().remove();
		if ( t.children('div').size() == 0 ) {
			t.remove();
		}
	});
	$('[data-open]').on('click', function(e) {
		e.preventDefault();
		var t = $('[data-target="'+$(this).attr('data-open')+'"]');
		$('.fade').stop(true,true).fadeIn(400);
		var h = $(window).scrollTop()+($(window).height()-t.outerHeight())/2;
		if ( h < 0 ) {
			h = 0;
		}
		t.css({
			'top': h+'px'
		}).stop(true,true).fadeIn(400);
	});
	$('.fade, [data-target] .close-icon').on('click', function(e) {
		e.preventDefault();
		$('.fade, [data-target]').stop(true,true).fadeOut(400);
	});
	$('.form-e .upload').on('click', function() {
		$(this).siblings('input[type="file"]').trigger('click');
	});
	$(window).load(function() {
		if ( $('.preview-b .reviews > div').outerHeight() < $('.preview-b .news > div').outerHeight() ) {
			$('.preview-b .reviews h3').css({
				'margin-top': ($('.preview-b .news > div').outerHeight()-$('.preview-b .reviews > div').outerHeight())/2+'px'
			});
			$('.preview-b .reviews > div').outerHeight($('.preview-b .news > div').outerHeight());
			$('.preview-b .reviews').css({
				'opacity': '1'
			});
		}
		if ( $('.contacts-b .info').outerHeight() < $('.contacts-b .map').outerHeight() ) {
			$('.contacts-b .info').css({
				'margin-top': ($('.contacts-b .map').outerHeight()-$('.contacts-b .info').outerHeight())/2+'px'
			});
			$('.contacts-b .info').css({
				'opacity': '1'
			});
		}
	});
});