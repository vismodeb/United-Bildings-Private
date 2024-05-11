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

  // Clients About Us
  var swiper = new Swiper(".card_CAU", {
    rewind: true,
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 50,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });


});