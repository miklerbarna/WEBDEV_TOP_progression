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