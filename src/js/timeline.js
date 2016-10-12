$(".main .year .list").each(function(e, target){
	var $target=  $(target),
	$ul = $target.find("ul");
	$target.height($ul.outerHeight()), $ul.css("position", "absolute");
}); 
$(".main .year>.time-title>.time-btn").click(function(e){
	e.preventDefault();
	var temp = $(this).parents(".year").hasClass("closein")?1:0;
	$(".year").addClass("closein");
	if(temp == 1){
		$(this).parents(".year").removeClass("closein");
	}
	else{
		$(this).parents(".year").addClass("closein");
	}
});

$(".close-toggle").click(function(){
	$(".timeline .content").toggleClass("hidden");
	if($(".timeline .content").hasClass("hidden")){
		$(this).attr("src", "images/time_arrow/arrow_down.png");	
	}
	else{
		$(this).attr("src", "images/time_arrow/arrow_up.png");
	}
	if($(".close-toggle").hasClass("arrow_up")){
		$(".close-toggle").removeClass("arrow_up").addClass("arrow_down");
	}
	else{
		$(".close-toggle").removeClass("arrow_down").addClass("arrow_up");
	}
})

$(".close-toggle").mouseover(function(){
	if($(this).hasClass("arrow_up")){
		$(this).attr("src", "images/time_arrow/arrow_up_active.png");
	}
	else{
		$(this).attr("src", "images/time_arrow/arrow_down_active.png");
	}
})

$(".close-toggle").mouseout(function(){
	if($(this).hasClass("arrow_up")){
		$(this).attr("src", "images/time_arrow/arrow_up.png");
	}
	else{
		$(this).attr("src", "images/time_arrow/arrow_down.png");
	}
})

