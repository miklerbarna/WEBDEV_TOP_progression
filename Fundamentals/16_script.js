const button1 = document.getElementById('btn');

// button1.onclick = () => {console.log('CLIIIICK');};
//or
button1.addEventListener('click', () => {
    console.log('Method2 click');
});



//Methods with anonymous functions: (button2)
const alertme = function()
{
    alert('Alert');
}

const button2 = document.getElementById('btn2');

// button2.onclick = alertme;
//or
button2.addEventListener('click',alertme);



//Named function work the same..
const button3 = document.getElementById('btn3');

function write()
{
    console.log('Named functions are basic');
}


// button3.onclick = write;
//or
button3.addEventListener('click',write);




//The e in this function is an object that references the event itself
const button4 = document.getElementById('btn4');
button4.addEventListener('click', function (event)
{
    console.log(e);
    event.target.style.cssText = 'background: black; color: white;'
});




//for more than one button doing the same thing:
const listbuttons = document.querySelectorAll('.listbutton');
listbuttons.forEach(element => {
    element.addEventListener('click', function(event){
        event.target.style.cssText = 'width: 300px; height: 80px; background: gray; color: red; font-size: 45px; font-weight: 700'
    });
});

//event key and code
document.addEventListener('keypress', function(event){
    if (event.key == 'a') alert('AAAAAAAA');
    console.log('Key pressed: ' + event.key +' event code: ' + event.code);
});


