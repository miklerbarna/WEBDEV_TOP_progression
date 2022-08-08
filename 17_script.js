/*
let user = {  // user is an Object with properties name and age
    name: 'John',  //property: value pairs
    age: 23
};
//acces the properties via:
console.log(user.name);
console.log(user.age);

//adding properties:
user.isGrownUp = true;
console.table(user);

//removing properties:
delete user.age;
console.table(user);


//Multi word properties:
//empty object:
let user2 = {};

// set
user2["likes birds"] = true;

// get
console.log(user2["likes birds"]); // true

// delete
delete user2["likes birds"];
*/

/*
//This is useful in this case:
let user3 = {
    name: "John",
    age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user3[key] ); // John (if enter "name")
*/

//OR
/*
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;
console.table(bag);
*/


/*
//THIS
function makeUser(name, age){
    return {
        name: name,
        age: age
    };
}

let user4 = makeUser('Bob', 18);
console.table(user4);

//Has a shorthand:
function makeUser2(name, age)
{
    return {
        name,  //same as name: name
        age    //same as age: age
    };
}

let user5 = makeUser2('TOM', 29);
console.table(user5);


//There are no limitations on property names:
// these properties are all right
let obj = {
    for: 1,
    let: 2,
    return: 3
};

console.log( obj.for + obj.let + obj.return );  // 6
*/



/*
//The "in" operator
// (property_name in Object) returns a boolean
let user6 = {
    name: 'Hannah',
    age: 20
};
console.log("name" in user6); //true, there is a name property IN user6
console.log("blabla" in user6); //false, there is not a blabla property IN user6


//for..in syntax
let names = {
    name1: 'BOB',
    name2: 'TOM',
    name3: 'JON',
    name4: 'LOL',
    name5: 'XDX',
    age1: 12,
    age2: 21,
    age3: 34,
    age4: 55,
    age5: 68
}

for (name in names)
{
    console.log(name + ' : ' + names[name]);
}

*/


/*
//METHODS INSIDE OBJECTS
let person = {
    name: 'Ann',
    age: 43,
    bio()  //shorthand to bio: funcion(){blablabla}
    {
        console.log(`Hi my name is ${this.name} and I am ${this.age} years old`);
    },
    xYearPassed(years)
    {
        this.age += years;
    }
}

console.log(person.bio());
person.xYearPassed(10);
console.log(person.bio());

//Objects inside other Objects and even their methods can be used
let car = {
    owner: person,
    color: 'red',
    ownerData()
    {
        person.bio();
    }
}
console.log(car.ownerData());

console.log(car.color);

car.colorChange = function(change){  //Add method to Object
    this.color = change;
}
car.colorChange('green');
console.log(car.color);


let person2 = {
    name: {  //Object inside Object
        first: 'Tom',
        last: 'Hardy'
    },
    age: 23
};

console.log(person2.name);
const myProperty = 'height';
const myValue = '1.6m';
person2[myProperty] = myValue;
console.log(person2.height);
*/



//CONSTRUCTORS

function Person(name, age) //convention: first letter is Capitalized
{
    this.name = name;
    this.age = age;
    this.introduction = function()
    {
        console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);
    }
}



let person3 = new Person('Jeff', 33);  //constructor is called with new
person3.introduction();

