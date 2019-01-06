$(document).ready(function(){

  /* Slick Slider */
  var homeSlideshow = $('.home-slideshow').slick({
    infinite: true,
    speed: 1200,
    appendArrows: false,
    autoplay: true,
    pauseOnHover: false,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  });

  var slideshow = $('.project-slideshow').slick({
    autoplay: true,
    pauseOnHover: false,
    draggable: true,
    arrows: false,
    dots: true,
    fade: true,
    speed: 900,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100
  });

  /* Nav Dropdown */
  $('[data-nav-button]').click(function(e) {
    $('[data-nav]').addClass('active')
  });

  $('[data-nav-close]').click(function(e) {
    $('[data-nav]').removeClass('active')
  });
});

