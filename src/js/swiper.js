let swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 50,
  speed: 800,
  slidesPerGroup: 2,
  loop: true,
  navigation: {
    nextEl: '.testimonials__btn-next',
    prevEl: '.testimonials__btn-prev',
  },
});
