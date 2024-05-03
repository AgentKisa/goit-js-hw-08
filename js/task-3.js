const text = document.querySelector('#name-input');
const pismo = document.querySelector('#name-output');

text.addEventListener(
  'input',
  event => (pismo.textContent = event.currentTarget.value.trim() || 'Anonymous')
);
