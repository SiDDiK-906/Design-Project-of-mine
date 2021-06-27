// // ======================================
// // 		Banner Plugin Section Start
// // ======================================
// $('.banner_plugin').slick({
//     dots: false,
//     arrows: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: false,
//     autoplay: true, 
//     autoplaySpeed: 2000,
//     prevArrow: '<li class="first"><a href="#"><i class="fa fa-angle-left prev" aria-hidden="true"></i></a></li>',
//     nextArrow: '<li class="last"><a href="#"><i class="fa fa-angle-right next" aria-hidden="true"></i></a></li>',
// });
// ======================================
// 		Banner trailer Section Plugin
// ======================================
$('.venobox').venobox(); 
// ======================================
// 		Banner Form Section Start
// ======================================
$(".close").click(function(){
    $(".form").fadeOut();
})
$(".sign_up").click(function(){
    $(".register_form").fadeIn();
})
$(".login").click(function(){
    $(".login_form").fadeIn();
})
// ======================================
// 		Counter Plugin Section Start
// ======================================
// $('.counter').counterUp({
//     delay: 10,
//     time: 1000
// });
// ====================================================
// 		        Serial 2 Plugin 
// ====================================================
$('.serial_plugin').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 800,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
});
// ====================================================
// 		    Mixitup Plugin Start
// ====================================================
var mixer = mixitup('.mixitup_plugin');
// ====================================================
// 		    Serial 2 Plugin Start
// ====================================================
// $('.plugin2').slick({
//     dots: false,
//     arrows: false,
//     // autoplay: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: 0,
//     asNavFor: '.txt_plug',
// });
