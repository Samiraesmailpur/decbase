const loaderEl = document.querySelector('.loader');
const body = document.querySelector('body');

window.addEventListener('load', () => {
  body.classList.add('is-hidden');

  setTimeout(() => {
    body.classList.remove('is-hidden');
    loaderEl.style.display = 'none';
  }, 5000);
});
