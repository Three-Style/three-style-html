/*--------- INDEX ----------*/
/* ===========================
1.Wow Js
2.top-bar slider
=========================== */



/* ----- 1.Wow Js ----- */
new WOW().init();

  var swiper = new Swiper(".announcement-main-bar", {
    loop: true, 
    autoplay: {
      delay: 2500, 
         disableOnInteraction: false,
    },
    speed: 800, 
  });