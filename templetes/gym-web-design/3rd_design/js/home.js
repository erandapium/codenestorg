$(document).ready(function() {
    
	var windowHeight = $(window).height();
	var windowScrollPosTop = $(window).scrollTop();
	var windowScrollPosBottom = windowHeight + windowScrollPosTop;
	
	$.fn.revealOnScroll = function(){
		
		return this.each(function(){
			
		var objectOffset = $(this).offset();
		var objectOffsetTop = objectOffset.top;
		
		if(!$(this).hasClass("hidden")){
			
			$(this).css("opacity", 0).addClass("hidden");
			
		}
		
	
		
		if(!$(this).hasClass("animation-complete")){
				
				if(windowScrollPosBottom > objectOffsetTop) {
			
			    $(this).animate({"opacity" : 1}, 1000).addClass("animation-complete");
			
			      }
			}
		
			
		});
		
		
		}
	
	$(window).scroll(function() { 
		
		windowHeight = $(window).height();
		windowScrollPosTop = $(window).scrollTop();
		windowScrollPosBottom = windowHeight + windowScrollPosTop;
		
		$(".our-team-des").revealOnScroll();
		$(".people").revealOnScroll();
	    $(".client-comment").revealOnScroll();
		
		});
	
	
});