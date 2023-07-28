const form = document.querySelector('.subscribe__form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const name = form.elements.name.value;
  const surname = form.elements.surname.value;
  const email = form.elements.email.value;
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const formData = {
    name,
    surname,
    email,
  };

  if (formData.name.toLowerCase() === 'sigma') {
    alert('wow');
  }

  // if (formData.name === '' || formData.surname === '' || formData.email === '') {
  //   alert('Please fill in all fields');
  // }

  // if (emailRegex.test(email)) {
  //   console.log('good');
  // } else {
  //   console.log('bad');
  // }

  // console.log(formData);
}
