// KONAMI!

var kkeys = [];
var konami = "38,38,40,40,37,39,37,39,66,65";

$(document).keydown(function(e) {
  kkeys.push( e.keyCode );
  if ( kkeys.toString().indexOf( konami ) >= 0 ){
    $(document).unbind('keydown',arguments.callee);

    $('body').css('background-color', '#db3f29');


  }
});


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


  $('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,

});



  $('.hamburger').on('click',function() {
    console.log('hello');
    $('nav').toggleClass('menu-open');
  });
