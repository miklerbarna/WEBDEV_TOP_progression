const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');
let input = '';
let wasOperator = false;
const operators = '+-*/';



function handleClick(e)
{
    switch(e.target.dataset.contains){
        case 'C':
            handleClear();
            break;
        case '=':
            handleEvaluate();
            break;
        default:
            handleButtonPress(e.target.dataset.contains);
            break;
    }
}

function handleClear()
{
    display.textContent = '';
    input = '';
}

function handleEvaluate()
{
    let num1 = ''
    let i = 0;
    while(!operators.includes(input[i]))
    {
        num1 += input[i];
        i++;
    }
    
    let op = input[i];
    i++
    let num2 = '';
    while (i < input.length)
    {
        num2 += input[i];
        i++;
    }
    console.log(num1);
    console.log(op);
    console.log(num2);

    switch(op){
        case '+':
            input = parseInt(num1) + parseInt(num2);
            display.textContent = `${parseInt(num1) + parseInt(num2)}`;
            break;
        case '-':
            input = parseInt(num1) - parseInt(num2);
            display.textContent = `${parseInt(num1) - parseInt(num2)}`;
            break;
        case '*':
            input = parseInt(num1) * parseInt(num2);
            display.textContent = `${parseInt(num1) * parseInt(num2)}`;
            break;
        case '/':
            input = parseInt(num1) / parseInt(num2);
            display.textContent = `${parseInt(num1) / parseInt(num2)}`;
            break;
    }
    
}


function handleButtonPress(char)
{
    if (wasOperator && operators.includes(char))
    {
        console.log('operator after operator');
        return;
    }
    display.textContent += char;
    input += char;
    wasOperator = operators.includes(char);
}










buttons.forEach(button => button.addEventListener('click', (e) => {
    handleClick(e);
}));


// buttons.forEach(button => button.addEventListener('click', (e) => {
//     console.log(e.target.dataset.contains);
// }));



