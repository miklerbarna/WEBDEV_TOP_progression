console.log('j');

//Selects the #cont div
const container = document.querySelector('#cont');

//Selects the children of the #cont div (returns a nodelist, not an array!)
const children = container.querySelectorAll('div');

const childarr = Array.from(children); //now its an array


console.log(childarr.length);
// console.log(childarr[0].getAttribute('class'));


//creating a new element, just in memory (not part of DOM yet)
const two_h2 = document.createElement('h1');

//parentNode.appendChild(childNode) appends childNode as the last child of parentNode
//childarr[1] is the second div in container (class = two)
childarr[1].appendChild(two_h2);

//parentNode.insertBefore(newNode, referenceNode) inserts newNode into parentNode before referenceNode
//parentNode.removeChild(child) removes child from parentNode on the DOM and returns a reference to child


//H1 from .one is removed (querySelector finds it and stores the element, which is then given to removeChild)
//childarr[0] is the first div in container (class = one)
const one_h1 = childarr[0].querySelector('h1');
const removed = childarr[0].removeChild(one_h1);

//ADDING STUFF TO CREATED ELEMENTS
two_h2.style.cssText = 'background: red; height: 4rem; color: white; font-weight: 700; text-align: center;'

//Adding text to it:
// two_h2.textContent += 'Hello world xd';
const two_h2_text = document.createTextNode('Different way');
two_h2.appendChild(two_h2_text);


//style the page a little..
container.style.cssText = 'background: blue; width: 80%; padding: 2rem; display: flex; align-items: center; justify-content:center; flex-direction: column; gap: 2rem'
const one = container.querySelector('div.one');
one.style.cssText = 'background: yellow; width: 80%; height: 8rem; padding: 2rem;'
const two = container.querySelector('div.two');
two.style.cssText = 'background: green; width: 80%; height: 8rem; padding: 2rem;'
const three = container.querySelector('div.three');
three.style.cssText = 'background: gray; width: 80%; height: 8rem; padding: 2rem; color: white;'


//setting attributes
const three_a = document.createElement('a');
three_a.style.cssText = 'font-size: 3rem;'
three.appendChild(three_a);
three_a.textContent += 'Click me';
//setting attributes:::::
three_a.setAttribute('href', 'https://www.youtube.com/watch?v=-uleG_Vecis');
three_a.setAttribute('target', '_blank');

//getting attributes with node.getAttribute(attr)
console.log(two.getAttribute('class'));


//remove an attribute with node.removeAttribute(attr)

//Adding/toggeling class
const four = document.createElement('div');
four.style.cssText = 'background: red; width: 80%; height: 8rem; padding: 2rem; color: black; font-size: 3rem; font-weight: 700;'
four.textContent += 'hai';
container.appendChild(four);

//adds class
four.classList.add('four');
four.classList.add('test');
four.classList.add('test2');

//removes class
four.classList.remove('test');

//toggles class (if there is none, adds it, if the class exists, removes it)
four.classList.toggle('test2');
four.classList.toggle('test2');
four.classList.toggle('test2');





////////////////////////////////////
//Exercises from The Odin Project//
////////////////////////////////////
//environment
const body = document.querySelector('body');
const excercises_container = document.createElement('div');
excercises_container.style.cssText = 'margin-top: 10rem; width: 80%; padding: 5rem; height: 40%; background: #e0d4b4;'
excercises_container.classList.toggle('excer');
//This is like an insertAfter..
container.parentNode.insertBefore(excercises_container,container.nextSibling);



//Exercise 01
const ex1_p = document.createElement('p');
ex1_p.style.cssText = 'color: red;';
ex1_p.textContent += "Hey Im red!";
excercises_container.appendChild(ex1_p);

//Exercise 02
const ex2_h3 = document.createElement('h3');
ex2_h3.style.cssText = 'color: blue;';
ex2_h3.textContent += "I'm a blue h3!";
excercises_container.appendChild(ex2_h3);

//Exercise 03
const ex3_div = document.createElement('div');
ex3_div.style.cssText = 'border: 2px solid black; background: pink;';

const ex3_div_h1 = document.createElement('h1');
ex3_div_h1.textContent += "I'm in a div";
ex3_div.appendChild(ex3_div_h1);

const ex3_div_p = document.createElement('p');
ex3_div_p.textContent += "ME TOO!";
ex3_div.appendChild(ex3_div_p);

//append the div at the end
excercises_container.appendChild(ex3_div);