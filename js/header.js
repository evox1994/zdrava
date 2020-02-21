$(document).ready(function(){

	$(document).on('click','.header-drop-btn',function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$(this).parents('.header').find('.service-drop').removeClass('active');
		} else {
			$(this).addClass('active');
			$(this).parents('.header').find('.service-drop').addClass('active');
		}
	});

	$(document).on('click','.header .service-drop .overlay',function(){
		$(this).parents('.service-drop').removeClass('active');
		$(this).parents('.header').find('.header-drop-btn').removeClass('active');
	});

	$(document).on('click','.header-select .text',function(){
		$(this).parents('.header-select').toggleClass('active');
	});

	$(document).on('click','.header-select .drop .item',function(){
		if ( !$(this).hasClass('active') ){
			var addres = $(this).find('.item-addres').text();
			var phone = $(this).find('.item-phone span').text();
			var tel = $(this).find('.item-phone').attr('data-tel');
			$(this).parents('.drop').find('.item').removeClass('active');
			$(this).addClass('active');
			$(this).parents('.header-select').find('.text span').text(addres);
			$(this).parents('.header-select-wrap').find('.header-phone span').text(phone);
			$(this).parents('.header-select-wrap').find('.header-phone').attr('href','tel:'+tel);
		}
		$(this).parents('.header-select').removeClass('active');
	});

	$(document).on('click','.header-service li',function(){
		if ( !$(this).hasClass('active') ){
			var el = $(this).attr('data-el');
			$(this).parents('.header-service').find('li').removeClass('active');
			$(this).parents('.wrap').find('.header-services ul').removeClass('active');
			$(this).addClass('active');
			$(el).addClass('active');
		}
	});

	$(document).on('click','.header-mobile-burger',function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('no-scroll');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('no-scroll');
		}
	});

	$(document).on('click','.mobile-menu-close',function(){
		$('.header-mobile-burger').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
		$('.drop-nav').removeClass('active');
	});

	$(document).on('click','.mobile-nav .drop-nav span',function(){
		$(this).parent('.drop-nav').addClass('active');
	});

	$(document).on('click','.drop-back',function(){
		$(this).parent('.drop-nav-wrap').parent('.drop-nav').removeClass('active');
	});

});