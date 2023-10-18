$(document).ready(function(){

	$('#menu li, #sub, #sub_bg').mouseenter(function(){
		$('#sub_bg').stop().slideDown();
		$('#sub').stop().slideDown();
		$('#menu li span').css('opacity','1');
	});
	$('#sub_bg, #sub').mouseleave(function(){
		$('#sub_bg').stop().slideUp();
		$('#sub').stop().slideUp();
		$('#menu li span').css('opacity','0');
	});

	$('#banner #btn li').first().addClass('on');
	$('#banner #btn li').click(function(){
		$('#banner #btn li').removeClass('on');
		$(this).addClass('on');
		var n=$(this).index();
		var move=-(1903*n);
		$('#banner #image').animate({
			left:move
		}, 'slow');
	});

});