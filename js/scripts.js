var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

$(document).ready(function(){
  $('.title').click(function(){
    $('.container').addClass('open');
  });


  $('.close').click(function(){
    $('.container').removeClass('open');
  });
});
