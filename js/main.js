$(document).ready(function(){
$(".nav li:first-child").css("visibility", "hidden");
	var position = parseInt($(".storyboard").css("margin-left").replace("px", ""));
	var maxwidth = -Math.abs($(".storyboard").width());
	$(".nav li:last-child").click(function() {
		if ( position > ( maxwidth + 570) ) {
		$(".storyboard img.full").css("display", "none");
		$(".nav li:first-child").css("visibility", "visible");
		position -=570;
		$(".storyboard").css("margin-left", position + "px");
  		}
  		if (position < ( maxwidth + 2 * 570 )) {
  		 $(".nav li:last-child").css("visibility", "hidden");
  		 }
	});
	$(".nav li:first-child").click(function() {
	
		if (position < 0) {
		$(".storyboard img.full").css("display", "none");
		$(".nav li:last-child").css("visibility", "visible");
		position +=570;
		$(".storyboard").css("margin-left", position + "px");
  		}
  		if (position + 570 == 0 ) {
  		 $(".nav li:first-child").css("visibility", "hidden");
  		 }
	});
	$(".storyboard li span").click(function() {
		$(this).siblings("img.full").toggle();
	});
	
	
	
});