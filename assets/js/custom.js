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


if ($(".occasion-Product-Swiper").length == "1") {
    var swiper = new Swiper(".occasion-Product-Swiper", {
        slidesPerView: 5,
        spaceBetween: 16,
        speed: 1000,
        autoplayDisableOnInteraction: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 5,
            }
        }
    });
}


