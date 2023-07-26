const loaderEl = document.querySelector('.loader');
const body = document.querySelector('body');

window.addEventListener('load', () => {
  body.classList.add('is-load');

  setTimeout(() => {
    body.classList.remove('is-load');
    loaderEl.style.display = 'none';
  }, 5000);
});
