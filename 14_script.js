/*
let myArray = ['This', 'is', 'an', 'array', 'with', 'strings'];
myArray[5] = 'words';

console.log(myArray);
let stringfromArray = myArray.join(' ');
console.log(typeof stringfromArray);
let str = stringfromArray.replace('array', 'string');
str2 = replaceCharAt(str,9,'');
console.log(str2);

console.log (replaceCharAt('alma',-3,'x') === undefined);

//return values can differ
//return without value exits the program (return value is undefined)
function replaceCharAt(str, index, replacement)
{
    if (index < 0) return;
    if (index > str.length-1) return false;
    return str.slice(0,index) + replacement + str.slice(index+1);
}



let intArray = [];

for (i = 0; i < 10; i++)
{
    //intArray[i] = Math.round(100 * Math.random() % 20); SAME AS
    intArray.push(1 + (Math.round(100 * Math.random() % 20)));
}

// console.log(intArray);
// change(intArray,3,6);
// console.log(intArray);
// console.log(myvar); //out of scope

//Pointers are hidden
//global variables are seen, can be changed
//arguments are vopies of the values
function change(array,at,replacement)
{
    let myvar = 67;
    array[at] = replacement;
}
console.log(intArray);
basic_sort(intArray);
console.log(intArray);

function basic_sort(array)
{
    for (i = 1; i < array.length; i++)
    {
        let x = array[i];
        let j = i - 1;
        // console.log('Check for: j: ' + array[j] + '   x:' + x);
        while (j >= 0 && array[j] > x)
        {
            // console.log('IN WHILE: j: ' + array[j] + '   x:' + x);
            array[j+1] = array[j];
            // console.log("After placement: " + array);
            j--;
        }
        array[j+1] = x;
        // console.log("After X placement: " + array);
        // console.log(array);
    }
}




//Default parameters:
function hello(name = 'Tom')
{
    console.log(`Hi ${name}!`);
}

hello('David'); //Hi David!
hello(); //Hi Tom!


function hello2(name, greeting = 'Good to see you')
{
    console.log('Hey ' + name + '. ' + greeting + '!');
}

hello2('David','Long time no see');
hello2('David');




function capit(str)
{
    return str.toUpperCase();
}


let s = 'alma';
function_tester1(s,capit);
function function_tester1(word,func)
{
    console.log(word)
    let w2 = func(word);
    console.log(w2);
}

//Nullish coalescing operator '??'
//defined if its not null or undefined
// The result of a ?? b is:
//  if a is defined, then a,
//  if a isn’t defined, then b.
  
let a = null;
console.log( a ?? 'undefined value');
a = undefined;
console.log( a ?? 'undefined value');
a = 'somevalue';
console.log( a ?? 'undefined value');

//select the first value from a list that isn’t null/undefined
let b;
let c = null;
let d = undefined;
let e = 'hi';
let f;

console.log(b ?? c ?? d ?? e ?? f ?? 'all of them are undefined');


//Function expression (not the same as function declaration)
//A Function Expression is created when the execution reaches it and is usable only from that moment. (even outside its block!!!)
//A Function Declaration can be called earlier than it is defined. (inside its block)
let fun = function(name = 'Tom') //anonymous function
{
    alert(name);
};
//fun('David');
//fun();

let fun2 = fun;
fun('i still work');
fun2('I work too');


function ask(con,yes,no)
{
    if (confirm(con)) yes()
    else no();    
}
//anonymous functions declared inside the function call as arguments
ask('U good JS?', function() { alert("You agreed."); },function() { alert("You canceled the execution."); });


//differences highlighted
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // can be used, because it was created with function expressions




//Arrow functions
//Looks like this: let func = (arg1, arg2, ..., argN) => expression;

let sum = (a,b) => a + b;
console.log(sum(3,4));

//If we have only one argument, then parentheses around parameters can be omitted
let double = n => n * 2;
console.log(double(5));


//If there are no arguments, parentheses are empty, but they must be present:
let greet = () => console.log('Hello');
greet();

//Funciton expressions as arrow functions

let n = prompt('your age?' ,18);
let ager = (n < 18) ? () => console.log('getlost') : () => console.log('henlo');
ager();

//for multi line, curly braces:
let bar = (n) => {
    (n < 18) ? console.log("You can't drink") : console.log("Have a beer")
};

//bar(23);

let ask = (con,yes,no) =>
{
    if (confirm(con)) yes()
    else no();    
}
ask('U good JS?', () =>  alert("You agreed."), () => alert("You canceled the execution."));

*/
