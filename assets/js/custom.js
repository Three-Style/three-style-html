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

  $('.user').click(function () {
    if ($(window).width() <= 767) {
      $('.navbar-toggler').removeClass('active');
    }
  });
});


/* ----- 6.Blur body js ----- */
$("body").on("click", ".navbar-toggler", function () {
  if (window.innerWidth <= 991) {
    $('header').addClass('sticky-menu');
  }
});

$("body").on("click", ".navbar-nav a", function () {
  $('body').removeClass('blur-body');
  // $('header').removeClass('sticky-menu');
});

/* ----- 7.menu fixed on scroll ----- */
$(document).ready(function () {
  headerFixed();
});
$(document).on('scroll', function () {
  headerFixed();
});
function headerFixed() {
  if ($(window).scrollTop() >= 20) {
    $('header').addClass('sticky-menu');
  }
  else {
    $('header').removeClass('sticky-menu');

  }
}


