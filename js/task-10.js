function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  box: document.querySelector('#boxes')
};


refs.input.addEventListener('change', getAmount);
refs.buttonCreate.addEventListener('click', createBoxes);
refs.buttonDestroy.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
  amount = getAmount();
  const divs =[];
  for(let i = 0; i < amount; i += 1) {
    divs[i] = document.createElement('div');
    divs[i].style.width = `${30 + 10 * i}px`;
    divs[i].style.height = `${30 + 10 * i}px`;
    divs[i].style.backgroundColor = getRandomHexColor();
    divs.push(divs[i]);
  }
    refs.box.append(...divs);
  }
function getAmount () {
     return refs.input.value;
  }
function destroyBoxes () {
  refs.box.innerHTML = ' ';
}
