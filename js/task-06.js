const input = document.querySelector("#validation-input");

input.addEventListener('blur', onInputBlur);


function onInputBlur (event) {
    
    if(event.currentTarget.value.length === 6) {
    
     input.classList.remove("invalid")  
     return  input.classList.add("valid");    
    }

    return input.classList.add("invalid");
 };
 
 

