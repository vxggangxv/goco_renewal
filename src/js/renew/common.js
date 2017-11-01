$(function() {
	$('#schBor input').focus(function() {
		$(this).closest('div.schBox').find('.schEx').fadeIn();
	});
	$('#schBor input').focusout(function() {
		$(this).closest('div.schBox').find('.schEx').fadeOut('fast');
	});
});