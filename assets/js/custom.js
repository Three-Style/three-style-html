/*--------- INDEX ----------*/
/* ===========================
1.Wow Js
3.menu fixed on scroll
=========================== */



/* ----- 1.Wow Js ----- */
new WOW().init();



/* ----- 3.menu fixed on scroll ----- */
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



// ALL SLIDER JS START FROM HERE

/* ----- 1.top-bar slider ----- */
var swiper = new Swiper(".announcement-main-bar", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 800,
});

/* ----- 2.occasion-Product-Swiper slider ----- */
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
        slidesPerView: 2
      },
      576: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 5,
      }
    }
  });
}
// ALL SLIDER JS START FROM HERE


