const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');




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
            addToDisplay(e.target.dataset.contains);
            break;
    }
}

function handleClear()
{
    display.textContent = '';
}

function handleEvaluate()
{
    console.log('more work here');
}


function addToDisplay(char)
{
    display.textContent += char;
}










buttons.forEach(button => button.addEventListener('click', (e) => {
    handleClick(e);
}));


// buttons.forEach(button => button.addEventListener('click', (e) => {
//     console.log(e.target.dataset.contains);
// }));



