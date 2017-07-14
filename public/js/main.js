(function ($) {

  "use strict";

  /*----------------------------------|| Loader ||----------------------------------------------*/

  $(window).load(function () {
    $('#loader').fadeOut(500);
  });

  /*----------------------------------|| Wow.js Initialization ||----------------------------------------------*/

  new WOW().init();

  /*----------------------------------|| Flex Slider ||----------------------------------------------*/

  $(document).on('click','.overTop .Slider',function () {

    setTimeout(function () {
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

    }, 1000);
  })




    $(document).on('click','.overTop .Testimonials',function () {

      setTimeout(function () {
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
      }, 500);
    })


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



  $(document).on('click','.overTop .Portfolio',function () {

    setTimeout(function () {
      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      });
    }, 1000);
  });


})(jQuery);