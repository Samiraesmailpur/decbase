const newsBlock = document.querySelectorAll('.news__block');

const options = {
  rootMargin: '500px',
  threshold: 1,
};

let firstEl = false;

const trueCallback = function (entries, observer) {
  entries.forEach(entry => {
    Array.from(newsBlock).forEach(item => {
      entry.isIntersecting ? (item.style.opacity = '1') : (item.style.opacity = '0');
    });
  });
};

const observer = new IntersectionObserver(trueCallback, options);
newsBlock.forEach(item => {
  observer.observe(item);
});
