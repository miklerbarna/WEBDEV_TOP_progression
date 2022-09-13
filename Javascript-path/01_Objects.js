const Tom = {
    age: 12,
    male: true,
    "longer property with spaces": function() {
        return `I am ${this.age} years old and a ${this.male} male!`
    }
}


console.log(Tom.age);
console.log(Tom["male"]);
console.log(Tom["longer property with spaces"]());


//Constructor for objects (prototype of object, not standard OOP)
function Person(age, male) {
    this.age = age
    this.male = male
    this["longer property with spaces"] = function() {
        return `I am ${this.age} years old and a ${this.male} male!`
    }
}

const me = new Person(21,true)
console.log(me.age);
console.log(me["longer property with spaces"]());




function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this. read =  read
}

// Prototype function means that a single instance of 
//each function will be shared between all of the Book objects.
Book.prototype.info = function() { 
    let s = `${this.title} by ${this.author} is ${this.pages} pages long. `
    s += this.read ? 'I have read it' : 'I have not read it yet'
    return s
}

const randomBook = new Book('The end of Everything', 'Tom Byman', 345, false)
console.log(randomBook.info());



function Student(){} //Object

Student.prototype.info = function() {
    return `Hi my name is ${this.name}, i am a Student and i am ${this.age} years old`
}

Student.prototype.getGrades = function() {
    console.log(this.grades);
}


function EighthGrader(name, age, grades) {
    this.name = name
    this.age = age
    this.grades = grades
}

EighthGrader.prototype = Object.create(Student.prototype)
//The EighthGrader Object now follows a copy of the Student prototype, 
//so it inherits the Student's functions

const dan = new EighthGrader('Dan', 14, [4,4,4,3,2,4,5,5])

console.log(dan.info());
dan.getGrades()

//getter and setter

const obj = {
    _data: 42,
    get data(){
        return this._data
    },
    set data(x){
        this._data = x 
    }
}


console.log(obj.data);
obj.data = 54
console.log(obj.data);



//copying objects
console.log();
console.log();
console.log();
const o = {field1: 1}
const o2 = o
o2.field1 = 12
console.log(o.field1); //12, it changes the original object field

//shallow copy:
const o3 = { field1 : 1,
             field2: 2 }
const o4 = {}
for (key in o3) {
    o4[key] = o3[key] //construct the object using values from the other one
}
o4.field1 = 12
console.log(o3.field1); //no changes

//OR
const o5 = {}
Object.assign(o5, o3)
o5.field1 = 13
console.log(o3.field1); //no changes

//Fewer lines:
const o6 = Object.assign({}, o3)
o6.field1 = 13
console.log(o3.field1); //no changes





//deep copy (objects within objects)

const o7 = {
    field1: {subfield1: 11,
             subfield2: 12
    },
    field2: {subfield1: 21,
             subfield2: 22
    }
}

const o8 = JSON.parse(JSON.stringify(o7)) //!!!!
o8.field1.subfield1 = 111
console.log(o7.field1.subfield1);