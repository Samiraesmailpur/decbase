let swiper = new Swiper('.mySwiper', {
  // slidesPerView: 2,
  // spaceBetween: 50,
  speed: 800,
  // slidesPerGroup: 2,
  loop: true,
  navigation: {
    nextEl: '.testimonials__btn-next',
    prevEl: '.testimonials__btn-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
  },
});
