new Swiper('.reviews__swiper', {
  loop: false,
  speed: 800,
  navigation: {
    prevEl: '.reviews__btn--prev',
    nextEl: '.reviews__btn--next'
  },
  breakpoints: {
    1260: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },
    992: {
      slidesPerView: 4,
      slidesPerGroup: 2,
      spaceBetween: 12
    },
    860: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 12
    },
    515: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 12
    },
    300: {
      slidesPerView: 'auto',
      spaceBetween: 12,
      freeMode: {
        enabled: true
      },
    }
  }
})