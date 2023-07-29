const modalEl = document.querySelector('.modal');
const body = document.querySelector('body');
const btnEl = document.querySelector('.modal__btn');

const timeToOpenModal = 60000;
const timeToClosePage = 5000;

let isBtnClicked = false;
let closeTimer;

function closeModal() {
  modalEl.style.display = 'none';
  body.classList.remove('is-load');
}

function openModal() {
  modalEl.style.display = 'block';
  body.classList.add('is-load');
}

function resetTimer() {
  clearTimeout(closeTimer);
  closeTimer = setTimeout(() => {
    openModal();
    setTimeout(() => {
      closeModalAndClosePage();
    }, timeToClosePage);
  }, timeToOpenModal);
}

function closeModalAndClosePage() {
  if (!isBtnClicked) {
    console.log(!isBtnClicked);
    window.close();
  }
  isBtnClicked = false;
}

btnEl.addEventListener('click', () => {
  closeModal();
  isBtnClicked = true;
});

document.addEventListener('mousemove', resetTimer);
document.addEventListener('keydown', resetTimer);

resetTimer();
