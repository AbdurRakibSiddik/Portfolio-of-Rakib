$(function () {

    'use strict';


    // ++++++++++++++++++ manu fixed start ++++++++++++++++
var manu = $('.main_manu').offset().top
$(window).scroll(function(){
    var fix = $(this).scrollTop();
    if( fix > manu ){
        $('.main_manu').addClass('fixed');
    }
    else{
        $('.main_manu').removeClass('fixed');

    }
});
    // ++++++++++++++++++ manu fixed end ++++++++++++++++
    //+++++++++++++++++ back to top start+++++++++++++++++
$('.back_to_top').click(function(){
    var scroll = $('html, body').animate({
        scrollTop: 0,
    },1000);
  });
  
  $(window).scroll(function(){
      var scrolli = $(this).scrollTop();
      if( scrolli > 500 ){
          $('.back_to_top').fadeIn();
      }
      else{
          $('.back_to_top').fadeOut();
  
      }
  });
  //+++++++++++++++++ back to top end +++++++++++++++++
  /*++++++++++++++++++++++hamburger icon start+++++++++++++++++*/  
$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });
/*++++++++++++++++++++++hamburger icon end+++++++++++++++++*/  
    // ++++++++++++++++++ banner types start ++++++++++++++++
    var typed = new Typed(".types_one", {
        strings: ["Student.", "Designer.", "Freelancer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // ++++++++++++++++++ banner types end ++++++++++++++++
    // ++++++++++++++++++ about types start ++++++++++++++++
    var typed = new Typed(".types_about", {
        strings: ["Student.", "Designer.", "Freelancer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // ++++++++++++++++++ about types start ++++++++++++++++
    // ++++++++++++++++++ team slide owl carosel start ++++++++++++++++
  

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
      // ++++++++++++++++++ team slide owl carosel end ++++++++++++++++
});