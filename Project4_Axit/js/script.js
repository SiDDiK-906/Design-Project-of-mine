//  ===================================
//      Slick Slider part Start
//  ===================================
$('.slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 800,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
});
//  ===================================
//      Slick Slider part End
//  ===================================
//  ===================================
//      Application part Start
//  ===================================
new WOW().init();