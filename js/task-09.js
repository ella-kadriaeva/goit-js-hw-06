const button = document.querySelector('.change-color');
const color = document.querySelector('.color')
const body = document.body;

button.addEventListener('click', ChangeColor);

function ChangeColor() {
  const currentColor = getRandomHexColor();
  color.textContent = `${currentColor}`;
  body.style.backgroundColor = `${currentColor}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



