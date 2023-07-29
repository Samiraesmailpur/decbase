const newsBlock = document.querySelectorAll('.news__block');

const options = {
  rootMargin: '500px',
  threshold: 1,
};

let firstEl = false;

const trueCallback = function (entries, observer) {
  entries.forEach(entry => {
    Array.from(newsBlock).forEach((item, index) => {
      if (entry.isIntersecting) {
        item.classList.add('show');
        item.classList.remove('hide', 'hide--delay');
      } else {
        item.classList.remove('show');
        item.classList.add(index === 0 ? 'hide' : 'hide--delay');
      }
    });
  });
};

const observer = new IntersectionObserver(trueCallback, options);
newsBlock.forEach(item => {
  observer.observe(item);
});
