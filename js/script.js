$(window).on('load', function(){
  setTimeout(() => {
    $('.areaForLoader').addClass('loaded_hiding');
    setTimeout(() => {
      $(this).addClass('loaded');
      $(this).removeClass('loaded_hiding');
    }, 500);
  }, 1500);
});
$(function(){
  setTimeout(() => {
    $('.areaForLoader').css('z-index', '0');
  }, 1500);
  $('.header .animated').css('animation-delay', '1.9s');
  $('.hero h1').css('animation-delay', '2.5s');
  $('.hero h4').css('animation-delay', '3s');
  $('.about-us .animated').css('animation-delay', '4s');
  $('.projects button').css('animation-delay', '4.5s');
  $('.footer').css('animation-delay', '5s');
});