$(document).ready(function($){
	var lastScroll = $(window).scrollTop();
	$(window).scroll(function(){
		var currentScroll = $(window).scrollTop();
		if($(window).scrollTop()===0) {
			$('nav').removeClass('hidden');
		}
		if (lastScroll>currentScroll) {
			$('nav').removeClass('hidden');
		} else {
			$('nav').addClass('hidden');
		}
		lastScroll = $(window).scrollTop();
	});
});