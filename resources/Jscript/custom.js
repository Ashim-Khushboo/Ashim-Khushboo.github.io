(function($) { "use strict";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// jQuery

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function($) {

    "use strict";

    $('.tnp-subscription .tnp-email').attr('placeholder','Enter your e-mail');

    //Preloader
    $(window).load(function() {
        $('.images-preloader').fadeOut();
    });

    $('.home-top, .home-top-slider, .home-top-video').css({'height':($(window).height())+'px'});

        $(window).resize(function(){

        $('.home-top, .home-top-slider .home-top-video').css({'height':($(window).height())+'px'});

        });

    jQuery(".player").mb_YTPlayer();

     //Home Text Rotator
    $(document).ready(function(){
        $(".flippy .rotate").textrotator({
            animation: "dissolve",
            speed: 8000
        });
    });

    $('footer').find('.newsletter-submit').addClass('btn btn-primary');
	
	var header = $(".header-sticky");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 130) {
            header.addClass("sticked animated slideInDown");
        } else {
            header.removeClass("sticked animated slideInDown");
        }
    });
	

	/* nav bars */

	var width = $(window).width(); 

	if ((width > 767)){ 

		$('.navigation .main-nav nav ul li').hover(function() {

			$(this).find('> ul').stop(true, true).slideDown(200);

		}, function() {

			$(this).find('> ul').stop(true, true).slideUp(200);

		});

	}	



    $(".nav-toggle").on('click',function (e) {

        $(".main-nav nav").toggleClass("show-nav");

    });



// Add class for columns : 10, 11, 12 skeleton.
  $('#bkbtndiv').find('button').each(function(i, ojb) {
            $(this).addClass('btn btn-primary');
    });



//  Smooth Scroll
    $('.main-nav a[href^="#"], a[href^="#"].scroll').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });





//  Owl Carousel



    if( $(".owl-carousel").length ){

        $(".owl-carousel").owlCarousel({

            margin:30,

            items: 4,

            navText: []

        });

    }

$(".carousel-simple").owlCarousel({

        items: 1,

        nav: true,

        navText: ["",""]

    });

//  Fit Videos



    if( $(".video").length ){

        $(".video").fitVids();

    }







});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// On Load

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



$(window).load(function(){

    var $equalHeight = $('.container');

    for( var i=0; i<$equalHeight.length; i++ ){

        equalHeight( $equalHeight );

    }

});



$(window).resize(function(){

    var $equalHeight = $('.container');

    for( var i=0; i<$equalHeight.length; i++ ){

        equalHeight( $equalHeight );

    }

});



var $container = jQuery('#testimonial-masonry');

        $container.isotope({

            itemSelector: '.item',

            filter: '*'

    });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Functions

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function checkDate(id) {

    var date = $("#" + id).data("date");

    var hasEvent = $("#" + id).data("hasEvent");

    $('#modal').modal();

}



function equalHeight(container){

    var currentTallest = 0,

        currentRowStart = 0,

        rowDivs = new Array(),

        $el,

        topPosition = 0;



    $(container).find('.equal-height').each(function() {

        $el = $(this);

        $($el).height('auto');

        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {

            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {

                rowDivs[currentDiv].height(currentTallest);

            }

            rowDivs.length = 0; // empty the array

            currentRowStart = topPostion;

            currentTallest = $el.height();

            rowDivs.push($el);

        } else {

            rowDivs.push($el);

            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);

        }

        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {

            rowDivs[currentDiv].height(currentTallest);

        }

    });

}

if ($('#back-to-top').length) {
    var scrollTrigger = 500, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

$('#back-to-top2').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 1500);
});

})(jQuery);