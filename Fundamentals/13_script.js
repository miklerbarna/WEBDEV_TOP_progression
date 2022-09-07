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

//String methods
let str = "almafa"
console.log(str.length);
console.log(str.slice(2,4)); //(from,to)
console.log(str.slice(4)); //(from this index)
console.log(str.substr(2,4)); //(from,length of substring)
console.log(str.substring(2,4)); //(from,to)

let newstr = str.replace("alma","Szilva");
console.log(newstr);
console.log(newstr.toUpperCase());
console.log(newstr.toLowerCase());

let text3 = str.concat(" ",newstr.toLowerCase());
console.log(text3);

let trimtext = "             hello          ";
console.log(trimtext);
console.log(trimtext.trim());

//padStart: fills the string's start with the argument string until length reached
//padEnd: fills the string's end with the argument string until length reached
let txt = "4";
let padded = txt.padStart(4,"x"); //(the desired length | the filling character)
console.log(padded);
let paddedb = padded.padEnd(7,"x");
console.log(paddedb);




console.log(str.charAt(4));
console.log(trimtext.trim().charAt(1)); //join together,trim first then charAt method
//or simply..
console.log(str[4]); //property access, ITS READ ONLY
str[4] = 'r';
console.log(str[4]); //It is not changed to rs

let stringarray = str.split(""); //Now its an array of characters
console.log(stringarray[2]);
stringarray[2] = 'r'; //So now it can be WRITE as well
console.log(stringarray[2]);
console.log(stringarray.length); //length works on arrays as well

let text4 = "A quick red fox jumped over the lazy browm dog";
let sentencearray = text4.split(" "); //now sentencearray is an array that contains strings
for (i = 0; i < sentencearray.length; i++){ //small little for loop
    console.log(sentencearray[i]);
}

//Basic types:

//Number: Both integers and floating points
let n = 123;
let n2 = 34.3;
//Special numbers: NaN, Infinity
let inf = Infinity;
let nan = NaN;
console.log(inf);
console.log(nan);

//String
//Strings are immutable, you can't change a char in it (You can use .replace() and make a new string)
let s = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${s}`;

//Boolean
let bv = true;
let bv2 = 1 > 2;

//null
let sm = null;

//undefined: not the same as null
let mes;
console.log(mes);
let m = 23;
m = undefined;
console.log(m);


//Objects....more later

//Conditionals
//All comparison operators return a boolean value

console.log( 2 > 1 ); 
console.log( 2 < 1 ); 
console.log( 2 <= 1 ); 
console.log( 2 >= 1 ); 
console.log( 2 == 1 ); 
console.log( 2 != 1 );

//comparison of different types:
//When comparing values of different types, JavaScript converts the values to numbers.
console.log("comparing a number and a string:");
console.log(3 > '5' );
console.log ('01' == 1);

//For boolean values, true becomes 1 and false becomes 0.
console.log(true == '001');
console.log(false == 0);


//regular == can't diffrentiate between 0 and false
console.log(0 == false); //true
//and
console.log('' == false); //true

//if we want to differentiate between them, we have to use ===
// === checks the equality without the type conversion
console.log(0 === false); //false

//strange comparisons:
console.log( null === undefined ); // false
console.log( null == undefined ); // true
console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true
//The value undefined shouldn’t be compared to other values:


//Conditional Statements
if ( 2 < 3)
{
    console.log("Math is real");
}
else if ( 2 <= 3)
{
    console.log("Math is somewhat real");
}
else
{
    console.log("Nothing is real...");
}

//Logical operators: 
//OR: ||
// AND: &&  (left to right evaluation)
//NOT: !

//Switches

/*
let answer = prompt("What did you eat?");

switch (answer)
{
    case 'apple':
        console.log("apples are great");
        break;
    case 'banana':
        console.log("Not my favourites");
        break;
    case 'nothing':
        console.log("You gotta eat");
        break;
    case '':
        console.log("Give an answer damnit..");
        break;
    default:
        console.log("im sorry...WHAT");
        break;
}
*/


