
// A function in JavaScript is a value 
// Every value in JS has a type
// function has the type, object

// The name property

function hi() {
    console.log("Hi!");
}

hi();   // calling the function
console.log(hi.name);   // name of the object (function) which is hi

let sayBye = function () {
    console.log("good bye...");
}

console.log(sayBye.name);

function f(firstname = function firstname() { console.log("tarokh is my firstname"); }) {
    if (firstname !== firstname) {
        console.log("the firstname argument is not the firstname function");
    } else {
        console.log("the firstname argument is the firstname function");
    }
}
// I must think about it ....
function saygoodbye() { console.log("bye bye bsdfsdf"); }

f();
f(saygoodbye);


function f1(a) { }
function f2(a, b) { }
function many(a, b, ...more) { }

console.log(f1.length);
console.log(f2.length);
console.log(many.length);


// Custom properties 

function greet() {

    console.log("Hey how are you mate ? ");

    greet.count++;

}

greet.count = 0;

greet();
greet();
greet();

console.log(`You have called greet ${greet.count} times`);



