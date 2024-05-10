$(document).ready(function(){
  // Mobile Nav Toggle
  $('#toggleNav-icon').click(function(){
    $(this).toggleClass('open');
    $('.menu').slideToggle();
  });

  // Swiper Slider Property Types
  var swiper = new Swiper(".propertyTypesItem", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerView: "auto",
    rewind: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 60,
      },
    },
  });
  
});