const progressContainerEl = document.querySelector('.nav__progress-container');
const progressBarEl = document.querySelector('.nav__progress-bar');

function getScrollPercentage() {
  return (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
}

function updateProgressBar() {
  progressBarEl.style.width = `${getScrollPercentage()}%`;
  requestAnimationFrame(updateProgressBar);
}

updateProgressBar();
