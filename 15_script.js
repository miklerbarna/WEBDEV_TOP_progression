console.log('j');

//Selects the #cont div
const container = document.querySelector('#cont');

//Selects the children of the #cont div (returns a nodelist, not an array!)
const children = container.querySelectorAll('div');

const childarr = Array.from(children); //now its an array


console.log(childarr.length);
console.log(childarr[0].getAttribute('class'));