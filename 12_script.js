console.log('Hello'); //Outputs to console


//alert('Hi, this is an alert');


let message;
message = 'Hello World';
console.log(message);


let message2 = 'Hello again';
console.log(message2);

//You can also do this (commas are important):

let name = 'John',
    age = 25,
    fav_color = 'blue';

console.log('Name: ' + name + ' Age: ' + age + '\nFavourite Color: ' + fav_color); //basic string concats

let a = 10,
    b = 5;
console.log(a + b);


let c = a;

console.log(a + c);


const dbay = '2003.05.17'; //this variable's value can't be changed

console.log((4+6+9) / 77);

/**
 * Instead of:
 * let max = 57;
 * let actual = max - 13;
 * let percentage = actual / max;
 * console.log(percentage);
 * 
 * You can write:
 */
let max = 57, 
    actual = max - 13,
    percentage = actual / max;

console.log(percentage);

console.log('This will be an escape sequence. I\'ll use it now');

//CONCETANATING

const word1 = 'Chris';
const sentence1 = `Hello ${word1}`; //backticks!!
const joined = `${word1} ${sentence1}`;

console.log(sentence1);
console.log(joined);

//Just some fun
const button = document.querySelector('button');
function greet() {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
}
button.addEventListener('click', greet);

const word2 = 'My age is ';
const age2 = 25;

//CONVERSIONS
console.log(`${word2}${age2}`); //Integers automatically get converted to strings and concatanates

//String to Int
const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum + ': ' + myNum);

//Int to String
const myNum2 = '34';
const myString2 = myNum2.toString();
console.log(typeof myString2 + ': ' + myString2);

const movie = 'Fight Club';
const rating = 7;
const max_rating = 10;
const percent = 100 * rating / max_rating;
const expression = `I like the ${movie} as a ${rating}/${max_rating},so its at a ${percent}% percentage`;
console.log(expression);

//An interesting fact
const multiline = `This will break into
multiple lines and
    even
        tabs are
            included`;
console.log(multiline);