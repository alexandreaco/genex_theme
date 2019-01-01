$(document).ready(function(){

  var slideshow = $('.project-slideshow').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    appendArrows: false,
    autoplay: true,
    pauseOnHover: false
  });

  $('.project-slideshow').on('afterChange', function(e, slick, currentSlide) {
    var currentSlideIndex = currentSlide + 1
    $('[data-go-to-slide=' + currentSlideIndex + ']').addClass('active').siblings().removeClass('active')
  });

  $("[data-go-to-slide]").click(function(el) {
    var slideIndex = $(el.target).data("go-to-slide")
    $('.project-slideshow').slick('slickGoTo', slideIndex, true);
  });
});
