const burgerEl = document.querySelector('.nav__burger');
const crossEl = document.querySelector('.nav__cross');
const navBox = document.querySelector('.nav__box');
const navList = document.querySelector('.nav__list');

function openNavMenu() {
  navBox.style.display = 'flex';
  burgerEl.classList.add('hide-btn');
  burgerEl.classList.remove('show-btn');
  crossEl.classList.add('show-btn');
  crossEl.classList.remove('hide-btn');
}

function closeNavMenu() {
  navBox.style.display = 'none';
  burgerEl.classList.remove('hide-btn');
  burgerEl.classList.add('show-btn');
  crossEl.classList.remove('show-btn');
  crossEl.classList.add('hide-btn');
}

function toggleNavVisibility() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1200) {
    crossEl.classList.remove('show-btn');
    crossEl.classList.add('hide-btn');
    burgerEl.classList.add('hide-btn');
    burgerEl.classList.remove('show-btn');
    navBox.style.display = 'flex';
  } else {
    navBox.style.display = 'none';
    burgerEl.classList.add('show-btn');
    burgerEl.classList.remove('hide-btn');
  }
}
toggleNavVisibility();

window.addEventListener('resize', toggleNavVisibility);

burgerEl.addEventListener('click', openNavMenu);
crossEl.addEventListener('click', closeNavMenu);
navList.addEventListener('click', e => {
  if (e.target.classList.contains('nav__link')) {
    closeNavMenu();
  }
});
