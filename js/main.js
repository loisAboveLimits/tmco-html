
jQuery(window).on("load", function(){

	

	const scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true,
		smartphone: {smooth: false},
		tablet: {smooth: false},
	});	

	const convertStyle = () => {
		const height = window.innerHeight;
		Array.from(document.getElementsByTagName("section")).forEach((element) => {
			element.style.height = `${height}px`;
		});
	};
	window.addEventListener("resize", convertStyle);
	window.addEventListener("DOMContentLoaded", convertStyle);

	const htmlLang = jQuery("html").attr("lang"); 
	var sliderlang = false;
	var sliderAnimateOut = "animate__fadeOutLeft";
	if(htmlLang == "ar"){
		sliderlang = true;
		sliderAnimateOut = "animate__fadeOutRight";
	}

	var getMobileMenuHeight = jQuery(".mobile-top-menu").height();
	var getDecktopMenuHeight = jQuery(".desktop-top-menu").height();
	jQuery(".mobile-menu-spacer").css("height", getMobileMenuHeight+"px");
	jQuery(".not-front .desktop-menu-spacer").css("height", getDecktopMenuHeight+"px");

	jQuery(".icon-float").each(function(){

		var getIFwidth = jQuery(this).width() + 60;
		jQuery(this).css("width", getIFwidth+"px");

	});

	/*---Banner--- */
    jQuery("#banner-slider").owlCarousel({
         loop: true,
         dots: false,
         nav: false,
         autoplay: true, 
         margin:10,             
         responsiveClass: true,
         mouseDrag: false,
         touchDrag: false,

         autoplayHoverPause: true,
         rtl: sliderlang,
         responsive: { 
           0: { items: 1 }, 
           600: { items: 1 }, 
           1000: { items: 1 } 
         },
    });	

	/*--- services list --- */
	jQuery("#services-slide").owlCarousel({
		loop: true,
		dots: true,
		nav: false,
		margin:0,  
		autoplayTimeout: 3000,  // 3 seconds
		animateOut: 'animate__fadeOut', // Fade out class
		animateIn: 'animate__fadeIn',   // Fade in class
		responsiveClass: true,
		mouseDrag: false,
		touchDrag: false,
		autoplay: true,
		autoplayHoverPause: true,
		// smartSpeed:450,
		rtl: sliderlang,
	     responsive: { 
	       0: { items: 1 }, 
	       600: { items: 1 }, 
	       1000: { items: 1 } 
	     },
	});

	/*--- store list --- */
	// jQuery("#consultation-store-list, #courses-store-list, #product-store-list").owlCarousel({
	//      loop: true,
	//      dots: false,
	//      nav: false,
	//      autoplay: false, 
	//      margin:20,       
	//      responsiveClass: true,
	//      mouseDrag: true,
	//      touchDrag: true,
	//      smartSpeed:450,
	//      rtl: sliderlang,
	//      responsive: { 
	//        0: { items: 2 }, 
	//        600: { items: 2 }, 
	//        1000: { items: 3 } 
	//      },
	// });

	jQuery(".store-list").each(function(){

		jQuery(this).owlCarousel({
		     loop: true,
		     dots: false,
		     nav: false,
		     autoplay: false, 
		     margin:20,       
		     responsiveClass: true,
		     mouseDrag: true,
		     touchDrag: true,
		     smartSpeed:450,
		     rtl: sliderlang,
		     responsive: { 
		       0: { items: 2 }, 
		       600: { items: 2 }, 
		       1000: { items: 3 } 
		     },
		});

	});

	jQuery("#storeTabOther .btn-nxt").on("click touch", function(e){

		e.preventDefault();
		var getNext = jQuery("#storeTabContent .tab-pane.show .owl-carousel").attr("id");
		jQuery("#"+getNext+"").trigger('next.owl.carousel'); 

	});

	jQuery("#storeTabOther .btn-prev").on("click touch", function(e){

		e.preventDefault();
		var getprev = jQuery("#storeTabContent .tab-pane.show .owl-carousel").attr("id");
		jQuery("#"+getprev+"").trigger('prev.owl.carousel'); 

	});

	/*--- join list --- */
    jQuery("#ticker-list").owlCarousel({
		loop: true,
		dots: false,
		nav: false,
		autoplay: true, 
		margin:0,            
		responsiveClass: true,
		mouseDrag: false,
		touchDrag: false,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplaySpeed: 4000, 
		smartSpeed: 4000, 
		slideTransition: 'linear',
		rtl: sliderlang,
		responsive: { 
		0: { items: 1 }, 
		600: { items: 1 }, 
		1000: { items: 1 } 
         },
    });

	/*--- testimony list --- */
    jQuery("#tesimony-list").owlCarousel({
		loop: true,
		dots: false,
		nav: false,
		autoplay: true, 
		margin:50,            
		responsiveClass: true,
		mouseDrag: false,
		touchDrag: false,
		autoplay: true,
		autoplayTimeout: 4500,
		autoplaySpeed: 4500, 
		smartSpeed: 4500, 
		slideTransition: 'linear',
		rtl: sliderlang,
		responsive: { 
		0: { items: 2 }, 
		600: { items: 3 }, 
		1000: { items: 4 } 
         },
    });

	/*--- join list --- */
    jQuery("#join-list").owlCarousel({
		loop: true,
		dots: false,
		nav: false,
		autoplay: true, 
		margin:0,            
		responsiveClass: true,
		mouseDrag: false,
		touchDrag: false,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplaySpeed: 4000, 
		smartSpeed: 4000, 
		slideTransition: 'linear',
		rtl: sliderlang,
		responsive: { 
		0: { items: 2 }, 
		600: { items: 3 }, 
		1000: { items: 4 } 
         },
    });

	jQuery("#about-offer-list").owlCarousel({
	     loop: true,
	     dots: false,
	     nav: false,
	     autoplay: false, 
	     margin:5,       
	     responsiveClass: true,
	     mouseDrag: true,
	     touchDrag: true,
	     autoplayHoverPause: true,
	     rtl: sliderlang,                                                 
	     responsive: { 
	       0: { 
	       	items: 1,
	       	center: false, 
	       }, 
	       600: { 
	       	center: true,
	       	items: 2 
	       }, 
	       1000: { 
	       	center: true,
	       	items: 3 
	       } 
	     },
	});

	jQuery("#aboutOfferArrow .btn-nxt").on("click touch", function(e){

		e.preventDefault();
		jQuery("#about-offer-list").trigger('next.owl.carousel'); 

	});

	jQuery("#aboutOfferArrow .btn-prev").on("click touch", function(e){

		e.preventDefault();
		jQuery("#about-offer-list").trigger('prev.owl.carousel'); 

	});	

	jQuery(".counter-title").each(function(){
		var getLength = jQuery(this).width()-30;
		jQuery(this).parent().find(".counter-value").css("text-indent",getLength+"px");
	});


	checkPosition(scroll);

});


function checkPosition(scroll){

    scroll.on("scroll",(instance) => {

	    //console.log(instance.scroll.y);

	    if (instance.scroll.y > 260) {
	      
	      jQuery("#main-navigation .desktop-view .navbar").addClass("scrolled");
	      //jQuery(".not-front #main-navigation").removeClass("nav-light");
  
	    }else{

	      jQuery("#main-navigation .desktop-view .navbar").removeClass("scrolled");
	      //jQuery(".not-front #main-navigation").addClass("nav-light");

	    }   

    });

    scroll.update();

} 

