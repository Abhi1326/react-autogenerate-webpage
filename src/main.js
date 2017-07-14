(function ($) {

  "use strict";

  /*----------------------------------|| Loader ||----------------------------------------------*/

  $(window).load(function () {
    $('#loader').fadeOut(500);
  });

  /*----------------------------------|| Wow.js Initialization ||----------------------------------------------*/

  new WOW().init();

  /*----------------------------------|| Flex Slider ||----------------------------------------------*/

  $(window).load(function () {
    $('.flexslider').flexslider({
      animation: "slide",
      controlNav: true,
      easing: 'easeInCubic',
      slideshowSpeed: 4000,
      animationSpeed: 1200,
      pauseOnAction: true,
      touch: true,
      keyboard: true,
      after: function (slider) {
        $('.flex-active-slide').find('.flex-caption').hide().delay(0).show(0).addClass('animated');
      },
      before: function (slider) {
        $('.flexslider').find('.flex-caption').fadeOut(200).removeClass('animated');
        $('.flex-active-slide').find('.flex-caption').css('transform', '');
      }

    });


    $('.testimonial').flexslider({
      animation: "slide",
      animationLoop: false,
      itemMargin: 5,
      minItems: 1,
      directionNav: false,
      pauseOnAction: true,
      slideshowSpeed: 3000,
      animationSpeed: 800,
      maxItems: 1
    });

    $('.clients').flexslider({
      directionNav: false,
      animation: "slide",
      animationLoop: true,
      pauseOnAction: false,
      itemWidth: 210,
      itemMargin: 5,
      minItems: 2,
      maxItems: 4,
      slideshowSpeed: 4000,
      animationSpeed: 1500
    });

  });

  /*----------------------------------|| On Scroll Method ||----------------------------------------------*/

  $(window).scroll(function () {
    var $scroll_pos = 0;
    $scroll_pos = $(window).scrollTop();
    if ($scroll_pos >= 30) {
      $('#navigation').addClass('color_navigation');
    } else {
      $('#navigation').removeClass('color_navigation');
    }
  });

  /*----------------------------------|| Mobile Menu ||----------------------------------------------*/

  $('.nav-btn-open').click(function () {
    if ($(this).hasClass('ti-menu')) {
      $('#navigation').css('height', '100%');
      $(this).removeClass('ti-menu').addClass('ti-close');
    } else {
      $('#navigation').css('height', '80px');
      $(this).removeClass('ti-close').addClass('ti-menu');
    }
  });
  /*----------------------------------|| Lightbox ||----------------------------------------------*/

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });

  /*----------------------------------|| Sign in toggle ||----------------------------------------------*/

  $('#navigation a.login-btn').click(function (e) {
    e.preventDefault();
    if ($('#signin_box').find('.signin_cont').hasClass('show')) {
      $('#signin_box').find('.signin_cont').removeClass('show');
      $('#signin_box').fadeOut(200);
    } else {
      $('#signin_box').fadeIn(200);
      $('#signin_box').find('.signin_cont').addClass('show');
    }
  });

  $('#signin_box').find('span.close_btn').click(function () {
    $('#signin_box').find('.signin_cont').removeClass('show');
    $('#signin_box').fadeOut(200);
  });

})(jQuery);