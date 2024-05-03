function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btm = document.querySelector('.change-color');

const body = document.querySelector('body');

const span = document.querySelector('.color');

btm.addEventListener('click', () => {
  const colorRandom = getRandomHexColor();

  body.style.backgroundColor = colorRandom;

  span.textContent = colorRandom;
});
