$(document).ready(function() {
	
   $(".hide-and-show-div").hide();
   
   $(".learn-more-btn").click(function(){
	   
	   $(this).next(".hide-and-show-div").slideToggle();
	   
	   });
    
});