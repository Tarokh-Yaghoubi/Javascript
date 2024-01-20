
// Remember, new Objects can be created with a constructor function, like new F();

// if F.prototype is an object, then the "new" operator uses it to set [[Prototype]] for the new object.

// please note that, JS had prototypal inheritence since the beginning. It was one of the core features of the language

// But in the old times, there was no direct access to it. The only thing that worked reliably was a "prototype" property
// of the constructor function. So there are many scripts that still use it.

// please note that F.prototype here means a regular property named "prototype" on F. It sounds something similar to the term "prototype",
// but here we really mean a regular property with this name. 


let animal = {
    eats: true
};

function Owl(name) {
    this.name = name;
}

Owl.prototype = animal;

let owl = new Owl("Gray Owl");

console.log(owl.eats);


// setting Owl.prototype = animal, literally states the following: "When a new Owl is created, assign its [[Prototype]] to animal"


function Person(name) {
    this.name = name;
}

console.log(Person.prototype.constructor == Person)


let person = new Person();
console.log(person.constructor == Person);


function Man(printName) {
    this.printName = printName;
    console.log(`the username is : ${printName}`);
}

let tarokh = new Man("Tarokh");
let mosh = new tarokh.constructor("Mosh");
// console.log(tarokh, mosh);
