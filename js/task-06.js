const input = document.querySelector("#validation-input");

input.addEventListener('blur', onInputBlur);


function onInputBlur (event) {
    const length = Number(input.getAttribute("data-length"));
    
    if(event.currentTarget.value.length === length) {
        if(input.classList.contains("invalid")) {
            input.classList.replace("invalid", "valid");
        }
        input.classList.add("valid");
          
     return    
    }
    if(input.classList.contains("valid")) {
        input.classList.replace("valid", "invalid");
    }
    input.classList.add("invalid");
   
 };