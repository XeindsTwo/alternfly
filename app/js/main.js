new Swiper('.reviews__swiper', {
  loop: false,
  speed: 800,
  navigation: {
    prevEl: '.reviews__btn--prev',
    nextEl: '.reviews__btn--next'
  },
  scrollbar: {
    el: '.reviews__scrollbar'
  },
  breakpoints: {
    1260: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 12
    },
    860: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 12
    },
    560: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 12
    },
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 12,
    }
  }
})