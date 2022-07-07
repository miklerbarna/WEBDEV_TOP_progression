/*
let myArray = ['This', 'is', 'an', 'array', 'with', 'strings'];
myArray[5] = 'words';

console.log(myArray);
let stringfromArray = myArray.join(' ');
console.log(typeof stringfromArray);
let str = stringfromArray.replace('array', 'string');
str2 = replaceCharAt(str,9,'');
console.log(str2);

function replaceCharAt(str, index, replacement)
{
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

*/


//Default parameters:
function hello(name = 'Tom')
{
    console.log(`Hi ${name}!`);
}

hello('David'); //Hi David!
hello(); //Hi Tom!


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
