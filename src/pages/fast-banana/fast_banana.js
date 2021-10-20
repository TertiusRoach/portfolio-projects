/*--|▼| Load jQuery |▼|--//
window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("jQuery linked");
    } else {
        // jQuery is not loaded
        alert("jQuery not linked");
    }
}
//--|▲| Load jQuery |▲|--*/
//--|▼| Header |▼|--//
$(document).ready(function () {
  $('.nav-logo').click(function () {
    $('.nav-links').slideToggle(3000);
  });
});
$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll >= 65) {
    $('#nav').addClass('new-nav');
  } else {
    $('#nav').removeClass('new-nav');
  }
});
$('nav a').click(function (link) {
  link.preventDefault();
  let target = $(this).attr('href');

  $('html, body').animate(
    {
      scrollTop: $(target).offset().top,
    },
    'slow'
  );
});
//--|▲| Header |▲|--//
//--|▼| Work Section |▼|--//
$(document).ready(function () {
  // init Isotope
  //--► 151. Fast Banana Project - Isotope.js - jQuery Plugin ◄--//
  var $grid = $('.picture-container').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  //--► 154. Fast Banana Project - Work Section Adding Isotope.js (02:27) ◄--//
  $grid.imagesLoaded().progress(function () {
    $grid.isotope('layout');
  });
});
//--|▲| Work Section |▲|--//
//--|▼| About Section |▼|--//
$(document).ready(function () {
  $('#accordion').accordion({
    animate: 500,
  });
});
//--|▲| About Section |▲|--//
//--|▼| Projects Section |▼|--//
$(document).ready(function () {
  $('#current-center').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      // options for gallery
      enabled: true,
    },
    // other options
  });
});
//--|▲| Projects Section |▲|--//
//--|▼| Progress Bars Section |▼|--//
$(document).ready(function () {
  //Progress Bars
  $('#p-bar-1').progressbar({
    value: 35,
  });
  $('#p-bar-2').progressbar({
    value: 70,
  });
  $('#p-bar-3').progressbar({
    value: 60,
  });
  $('#p-bar-4').progressbar({
    value: 10,
  });
});
//--|▲| Progress Bars Section |▲|--//
//--|▼| Quotes Section |▼|--//
//--► 164. Fast Banana Project - Quotes Owl ◄--//
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    smartSpeed: 2000,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
//--|▲| Quotes Section |▲|--//

//--|▼| Description |▼|--//
//--|▲| Description |▲|--//

//--► Note to Self ◄--//

//--|▼|Experimental Code|▼|*****************************************************************************************************************|▼|Experimental Code|▼|--//
// placeCodeHere
//--|▲|Experimental Code|▲|*****************************************************************************************************************|▲|Experimental Code|▲|--//

/*--|▼|Back-up Code|▼|***************************************************************************************************************************|▼|Back-up Code|▼|--//
placeCodeHere
//--|▲|Back-up Code|▲|***************************************************************************************************************************|▲|Back-up Code|▲|--*/
