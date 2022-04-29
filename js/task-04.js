let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');


decrementBtn.addEventListener('click', () => {
     counterValue -= 1;
    return document.querySelector('#value').innerHTML = counterValue; 
}); 


incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    return document.querySelector('#value').innerHTML = counterValue; 
});











