const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const currentValue = event.currentTarget.elements;  
    if (currentValue.email.value === "" || currentValue.password.value === "") {
       return alert("Заполните поле валидными данными");
     }
     const data = {
       email: currentValue.email.value,
       password: currentValue.password.value,
     };
    console.log(data);
 
}