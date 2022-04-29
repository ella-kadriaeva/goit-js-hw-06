const input = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

input.addEventListener('input', onInput);

function onInput (event) {
const currentValue = event.currentTarget.value;
textSize.style.fontSize = `${currentValue}px`;
}