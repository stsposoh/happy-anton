document.addEventListener("DOMContentLoaded", function() {
  const preloader = document.querySelector('.preloader');
  const preloaderNum = preloader.querySelector('.preloader__num');
  const preloaderScale = preloader.querySelector('.preloader__scale-inner');
  const images = preloader.querySelectorAll('.preloader__image');

  const mainView = document.querySelector('.main-view')
  const btn = document.querySelector('.main-view__btn')
  const modal = document.querySelector('.modal')
  const hider = document.querySelector('.modal__hider')

  let progressPercentage = '14%';

  setTimeout(() => {
    preloader.classList.add('--visible')

    const tt= setInterval(() => { startTime() },1000);
    let counter = 1;

    function startTime() {
      if (counter === 7) {
        clearInterval(tt);

        preloader.classList.remove('--visible')

        setTimeout(() => {
          mainView.classList.add('--visible')
        }, 1000)

      } else {
        counter++;
      }

      images.forEach(image => {
        image.classList.remove('--active');
      });

      preloaderNum.innerHTML = counter;
      images[counter - 1].classList.add('--active');
      progressPercentage = (counter / 7) * 100;
      preloaderScale.style.width = progressPercentage + '%';
    }
  }, 1000)


  btn.addEventListener('click', function () {
    modal.classList.add('--visible');
  })

  hider.addEventListener('click', function () {
    modal.classList.remove('--visible');
  })
});