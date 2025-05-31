/*--------- INDEX ----------*/
/* ===========================
1.Wow Js
2.top-bar slider
3.Toggle cancel cross after 767px
=========================== */



/* ----- 1.Wow Js ----- */
new WOW().init();

/* ----- 2.top-bar slider ----- */
var swiper = new Swiper(".announcement-main-bar", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 800,
});

/* ----- 3.Toggle cancel cross after 767px ----- */

$(document).ready(function () {
  $('.navbar-toggler').click(function () {
    if ($(window).width() <= 767) {
      $(this).toggleClass('active');
      $('.navbar-collapse').toggleClass('show'); 
    }
  });
});

