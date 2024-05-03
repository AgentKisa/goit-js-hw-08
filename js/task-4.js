const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    console.log('Please fill in all the fields!');
    return;
  }

  const info = {
    email: elements.email.value,
    password: elements.password.value,
  };
  console.log(info);
  event.currentTarget.reset();
}
