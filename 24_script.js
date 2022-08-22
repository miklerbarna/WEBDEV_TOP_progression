const username = document.querySelector("#username");
const submit = document.querySelector('.forJS');
const display = document.querySelector('.display');
const form = document.querySelector('form');
const toggler = document.querySelector('form [type="button"]');




submit.addEventListener('click', () => {
    display.textContent = `Hello, ${username.value}!`;
})


toggler.addEventListener('click', () => {
    (getComputedStyle(form).backgroundColor === "rgb(0, 255, 255)") ? form.style.backgroundColor = "rgb(255, 0, 0)" : form.style.backgroundColor = "rgb(0, 255, 255)";
})