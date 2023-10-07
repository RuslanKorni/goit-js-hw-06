const inputValidationEl = document.querySelector('#validation-input');
const inputLength = inputValidationEl.getAttribute('data-length');


inputValidationEl.addEventListener('blur', event => {
    if (event.currentTarget.value.length >= inputLength) {
        inputValidationEl.classList.add('valid');
        inputValidationEl.classList.remove('invalid');
    } else {
        inputValidationEl.classList.add('invalid');
    }
});