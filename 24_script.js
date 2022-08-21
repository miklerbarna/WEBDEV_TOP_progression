const username = document.querySelector("#username");
const submit = document.querySelector('.forJS');
const display = document.querySelector('.display');




submit.addEventListener('click', () => {
    display.textContent = `Hello, ${username.value}!`;
})