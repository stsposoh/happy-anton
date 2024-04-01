const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: true,
  effect: 'flip',
  'grab-cursor': true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
