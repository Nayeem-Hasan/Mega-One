$(".menu-trigger").on("click", function () {
	$(".sidenav-overlay").addClass("active");
	return false;
});

$(".closebtn").on("click", function () {
	$(".sidenav-overlay").removeClass("active");
});

// sidenav black btn===
$(window).on('scroll', function() {
    if($(this).scrollTop() > 180){
        $('.sidenavs').addClass('sticky');
    } else{
        $('.sidenavs').removeClass('sticky');
    }
  });

// sidenav black btn===

// parallaxie js ====

if ($(window).width() > 992) {
    $(".parallax").parallaxie({
        speed: 0.55,
        offset:-100,
    });
}

// parallaxie js ====

// ===================================
//      Mouse parallax
// ====================================== 

if($(window).width() > 991) {


    $('.homepage-banner,header').mousemove(function (e) {
        $('[data-depth]').each(function () {
            var depth = $(this).data('depth');
            var amountMovedX = (e.pageX * -depth / 4);
            var amountMovedY = (e.pageY * -depth / 4);

            $(this).css({
                'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            });
        });
    });

}

$('.team-sliders').owlCarousel({
    loop:true,
    margin:10,
    center: true,
    nav:true,
    nextArrow: "<i class='bx bx-chevron-right right'></i>",
  	prevArrow: "<i class='bx bx-chevron-left left'></i>",
  	dots:false,
  	arrow:true,
    responsive:{
        0:{
            items:1
        },
        991:{
            items:1
        },
        1000:{
            items:3
        }
    }
});



$('.clients-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
  	dots:false,
    responsive:{
        0:{
            items:1
        },
        991:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

$(function(){


    $('.brand-sliders').owlCarousel({
	    loop:true,
	    margin:30,
	    center:false,
	    nav:false,
	  	dots:false,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:2,
	        },
	        1000:{
	            items:4
	        }
	    }
	});

}); 

// filtering area====

$(document).ready(function() {
	$('.filtering-item-list').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tPrev: "<i class='bx bx-chevron-right right'></i>",
    		tNext: "<i class='bx bx-chevron-left left'></i>",
		},
		
	});
});

// filtering area====

// blog area js
 $('.blog-slider-content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: "<i class='bx bx-chevron-left left'></i>",
  nextArrow:false,
  fade: false,
  dots:false,
  asNavFor: '.blog-img-slider'
});
$('.blog-img-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.blog-slider-content',
  dots: false,
  prevArrow:false,
  nextArrow: "<i class='bx bx-chevron-right right'></i>",
  focusOnSelect: true,
  vertical:true,
  verticalSwiping:true,
});
// blog area js

/*  WOW */

   if ($(window).width() > 991) {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    new WOW().init();
}

