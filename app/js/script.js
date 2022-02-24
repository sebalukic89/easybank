const hamburgerBtn = document.getElementById('btnHamburger');
const body = document.body;
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

hamburgerBtn.addEventListener('click', () => {
  if (header.classList.contains('open')) {
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElements.forEach((element) => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElements.forEach((element) => {
      element.classList.add('fade-in');
      element.classList.remove('fade-out');
    });
  }
});
