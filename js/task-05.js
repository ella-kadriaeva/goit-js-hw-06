const refs ={
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange (event) {
    if(refs.input.currentTurget === "") {
        refs.output.textContent = 'Anonymous';
    }
    refs.output.textContent = event.currentTarget.value;
}
