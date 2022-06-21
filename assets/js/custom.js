(function($){

$(document).ready(function(){
  // Menu Slider
  $('.navber .nav li a').click(function(){
     $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
       }, 1000);
       return false;
    });

	$('.menu i').click(function(){
    	$('.nav').slideToggle(1000);
    });
   $('.nav li').click(function(){
    	$(this).addClass('navActive').siblings().removeClass('navActive');
    });

	$('.slider-carousel').owlCarousel({
		loop:true,
		items:1,
		nav:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	});

	$('.about-carousel').owlCarousel({
		loop:true,
		items:1,
		nav:false,
		dots:true,
	});	
	$('.blog-carousel').owlCarousel({
		loop:true,
		items:1,
		dots:false,
		nav:true,
		navText:['<i class="fa fa-angle-left"</i>','<i class="fa fa-angle-right"</i>'],
	});	
	$('.client').owlCarousel({
		loop:true,
		responsive:{
            0:{
            	items:1
            },
            767:{
            	items:2
            },
            991:{
            	items:3
            },
            1200:{
               items:5
            },       
		},
	});
	$('.works-carousel').owlCarousel({
		loop:true,
		dots:false,
		items:1,
		nav:true,
		navText:['<i class="fa fa-angle-left"</i>','<i class="fa fa-angle-right"</i>'],	
	});	
   $('.contact-button').click(function(){
     $('.contact').slideDown(1000);
   });
   $('.contact-hide').click(function(){
     $('.contact').slideUp(1000);
   });
});
})(jQuery);