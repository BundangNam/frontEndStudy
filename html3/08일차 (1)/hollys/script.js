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

	$('#fade_image li').first().show();
	$('#fade_btn li').first().addClass('red');
	$('#fade_btn li').click(function(){
		$('#fade_btn li').removeClass('red');
		$(this).addClass('red');
		var i=$(this).index();
		$('#fade_image li').stop().fadeOut();
		$('#fade_image li').eq(i).stop().fadeIn();
	});

	$('#tab_contents #tab1').show();
	$('#tab_btn li').first().addClass('line');
	$('#tab_btn li').click(function(){
		$('#tab_btn li').removeClass('line');
		$(this).addClass('line');
		var t=$(this).index();
		$('#tab_contents>div').hide();
		$('#tab_contents>div').eq(t).show();
	});
});