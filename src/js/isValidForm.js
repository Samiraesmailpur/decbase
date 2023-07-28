const name = document.querySelector('.name');
const surname = document.querySelector('.surname');
const email = document.querySelector('.email');
const form = document.querySelector('.subscribe__form');
const errorName = document.querySelector('#error-name');
const errorSurname = document.querySelector('#error-surname');
const errorEmail = document.querySelector('#error-email');

const date = new Date().toLocaleDateString('uk-UA');

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const fullNameRegex = /^[A-Z][a-zA-Z]*$/;

let messagesFullName =
  'Only Latin letters are allowed. The first letter must be capitalized. Numbers and spaces are not allowed.';
let messagesEmail = 'Please enter a valid email address';

form.addEventListener('submit', e => {
  e.preventDefault();
  let isValidForm = true;

  if (name.value === '') {
    errorName.textContent = messagesFullName;
    isValidForm = false;
  } else if (!fullNameRegex.test(name.value)) {
    errorName.textContent = messagesFullName;
    isValidForm = false;
  } else {
    errorName.textContent = '';
  }

  if (surname.value === '') {
    errorSurname.textContent = messagesFullName;
    isValidForm = false;
  } else if (!fullNameRegex.test(surname.value)) {
    errorSurname.textContent = messagesFullName;
    isValidForm = false;
  } else {
    errorSurname.textContent = '';
  }

  if (email.value === '') {
    errorEmail.textContent = messagesEmail;
    isValidForm = false;
  } else if (!emailRegex.test(email.value)) {
    errorEmail.textContent = messagesEmail;
    isValidForm = false;
  } else {
    errorEmail.textContent = '';
  }

  if (isValidForm) {
    const formData = {
      name: name.value,
      surname: surname.value,
      email: email.value,
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    form.reset();
    getDiscount();
  }
});

function getDiscount() {
  const data = JSON.parse(localStorage.getItem('formData'));
  if (data.name === 'Sigma') {
  }
}
