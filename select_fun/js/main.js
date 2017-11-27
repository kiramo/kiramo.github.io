$('header').on('click', function() {
  $('header').slideUp(1000);
});
$('#party-time').on('click', function() {
  $('#boxes').removeClass('boring');
  $('#row4 div').fadeOut('slowly');
  $('.box').addClass('snazzy');
  $('#box3').addClass('fun');
  $('h2').slideUp(100);
});


// BONUS: Add a paragraph that says "Time to party!!!" to all boxes with class .add-para (Hint: you'll need to look up the append() method)
// BONUS: Add an h4 that says "Wild!" to the beginning of #box12 (Hint: you'll need to look up the prepend() method)



// 3. When the anchor in #box2 is clicked (hint: your selector could be $('#box2 a') )
// a. Fade in the footer slowly


$('#box2 a').on('click', function() {
  $('footer').fadeIn(600);
});
$('#reset').on('click', function(){
  $('header').slideDown(600);
  $('footer').fadeOut(600);
  $('#row4 div').show(400);
  $('#boxes').addClass('boring');
  $('.box').removeClass('snazzy');
  $('#box3').removeClass('fun');
  $('#row div').removeClass('selected')
  $('h2').slideDown('200');
});

// BONUS: If you completed the above bonus tasks, look up "remove jquery"
// and then see if you can remove the paragraphs and h3s that you added in.
// make sure to ONLY remove those paragraphs and h3s you added, not all the paragraphs and h3s!
