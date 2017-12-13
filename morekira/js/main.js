

  $('.clickme').click(function(e) {
      e.preventDefault();

      boxh = $('#popup').height();
      windowh = $(window).height();

      $('#popup').css('margin-top', windowh/2 - boxh/2);

      $('#popup').fadeIn();
  });
  $('.clicktoclose').click(function(fadeout) {
      $('#popup').fadeOut();
  });


  var offset = 250;

  var duration = 300;

  jQuery(window).scroll(function() {

  if (jQuery(this).scrollTop() > offset) {

  jQuery(‘.back-to-top’).fadeIn(duration);

  } else {

  jQuery(‘.back-to-top’).fadeOut(duration);

  }

  });



  jQuery(‘.back-to-top’).click(function(e) {

  jQuery(‘html, body’).animate({scrollTop: 0}, duration);

  return false;

  }

  });

  $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
