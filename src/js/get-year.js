const yearEl = document.querySelector('.copyrights__year');
yearEl.textContent = new Date().toLocaleDateString('uk-UA', { year: 'numeric' });
