
// Objects are usually created to represent entities of the real world, like users, orders and so on.

let user = {
    name: "John",
    age: 30
};

// and,in the real world, a user can act: select something from the shopping cart, login, logout etc.

// Actions are represented in JS by functions in properties .

// For example: 

user = {
    name: "tarokh",
    age: 19,
    goodBye() {     // a short-hand for declarting methods.
        console.log("Good Bye from user Object");
    }
};



user.sayHi = function() {
    console.log("Hello from Object !!");
};

user.sayHi();

// a function that is a property of an object is called its method.

// so here we have got a method sayHi of the object user.


// It's common that an object method needs to access the information stored in the object to do its job.
// For instance, the code inside sayBye() may need the name of the user.
// To access the object, a method can use the this keyword.
// The value of this is the object 'before dot', the one used to call the method.
// For instance:

let newUser = {
    firstName: "Tarokh",
    lastName: "Yaghoubi",
    age: 19,
    sayGreetings() {
        let message;
        message = (`Hello ${this.firstName}` + ' ' + `${this.lastName}, welcome!`);
        console.log(message);
    },
    sayHi() {
        let that = this;    // assign this to that because we our using outer values . { THIS IS NOT A GOOD PRACTICE }
        let arrowFunc = (first, last) => console.log(first + " " + last + " is a good programmer, So Hello there !!");
        arrowFunc(that.firstName, that.lastName);
    }
};

// Arrow functions do not have their own 'this'. If we reference this from such a function, it is taken from the outer normal function.

newUser.sayGreetings();
newUser.sayHi();


// Functions that are stored in object properties are called "methods"
// Methods allow objects to "act" like object.doSomething()
// Methods can reference the object as this
// The value of this is defined at runtime 
// When a function is declared, it may use this, but that this has no value until that function is called .
// A function can be copied between objects 
// When a function is called in the "Method" syntax: object.method(), th value of this during the call is "object"
// Note that arrow functions are special, they have no this. When this is accessed inside an arrow function, it is taken from outside.
