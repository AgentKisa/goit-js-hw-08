function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

const arrDiv = amount => {
  const newArr = [];
  let width = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');

    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${width}px`;
    div.style.height = `${width}px`;
    width += 10;

    newArr.push(div);
  }
  boxes.append(...newArr);
};

const newFunk = event => {
  const inputValue = input.value;
  if (inputValue <= 100 && inputValue >= 1) {
    arrDiv(inputValue);
  }
};

const newDestroy = () => {
  boxes.innerHTML = '';
};

create.addEventListener('click', newFunk);
destroy.addEventListener('click', newDestroy);
