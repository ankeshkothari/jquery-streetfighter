$(document).ready(function(){
	$(".ryu").on("mouseenter",function(){
		$(this).find(".ryu-still").hide()
		$(this).find(".ryu-ready").show()
		$(this).find(".ryu-throwing").hide()
		$(this).find(".ryu-cool").hide()
	})
	$(".ryu").on("mouseleave",function(){
		$(this).find(".ryu-ready").hide()
		$(this).find(".ryu-still").show()
		$(this).find(".ryu-throwing").hide()
		$(this).find(".ryu-cool").hide()
	})
	$(".ryu").on("mousedown",function(){
		playHadouken(); 
		$(this).find(".ryu-ready").hide()
		$(this).find(".ryu-still").hide()
		$(this).find(".ryu-throwing").show()
		$(this).find(".ryu-cool").hide()
		$(".hadouken").finish().show().animate({"left":"300px"},function(){
			$(this).hide();
			$(this).css({"left":"-212px"});
		})
	})
	$(".ryu").on("mouseup",function(){
		$(this).find(".ryu-ready").show()
		$(this).find(".ryu-still").hide()
		$(this).find(".ryu-throwing").hide()
		$(this).find(".ryu-cool").hide()
	})
	$(document).keydown(function(event){
		var keyCode = (event.keyCode ? event.keyCode : event.which);
		if (keyCode == '88') {
		playCool();
		$(this).find(".ryu-ready").hide()
		$(this).find(".ryu-still").hide()
		$(this).find(".ryu-throwing").hide()
		$(this).find(".ryu-cool").show()
		};			
	})
	$(document).keyup(function(){
		$('#cool-sound')[0].pause();
    	$('#cool-sound')[0].load();
		$(this).find(".ryu-ready").hide()
		$(this).find(".ryu-still").show()
		$(this).find(".ryu-throwing").hide()
		$(this).find(".ryu-cool").hide()
	})
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
function playCool () {
  $('#cool-sound')[0].volume = 0.5;
  $('#cool-sound')[0].load();
  $('#cool-sound')[0].play();
}
