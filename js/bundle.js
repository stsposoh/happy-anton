
document.addEventListener("DOMContentLoaded", function () {
  var preloader = document.querySelector('.preloader');
  var preloaderNum = preloader.querySelector('.preloader__num');
  var preloaderScale = preloader.querySelector('.preloader__scale-inner');
  var images = preloader.querySelectorAll('.preloader__image');
  var mainView = document.querySelector('.main-view');
  var btn = document.querySelector('.main-view__btn');
  var modal = document.querySelector('.modal');
  var hider = document.querySelector('.modal__hider');
  var progressPercentage = '14%';
  setTimeout(function () {
    preloader.classList.add('--visible');
    var tt = setInterval(function () {
      startTime();
    }, 1000);
    var counter = 1;
    function startTime() {
      if (counter === 7) {
        clearInterval(tt);
        preloader.classList.remove('--visible');
        setTimeout(function () {
          mainView.classList.add('--visible');
        }, 1000);
      } else {
        counter++;
      }
      images.forEach(function (image) {
        image.classList.remove('--active');
      });
      preloaderNum.innerHTML = counter;
      images[counter - 1].classList.add('--active');
      progressPercentage = counter / 7 * 100;
      preloaderScale.style.width = progressPercentage + '%';
    }
  }, 1000);
  btn.addEventListener('click', function () {
    modal.classList.add('--visible');
  });
  hider.addEventListener('click', function () {
    modal.classList.remove('--visible');
  });
});
var swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: true,
  effect: 'flip',
  'grab-cursor': true,
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});





