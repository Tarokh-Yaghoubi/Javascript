

// Asynchronous JS

// "I will finish later"

// Function running in parallel with other functions are called asynchronous

// a good example is JS setTimeout()

function Display(something) {
    this.something = something;
    console.log(this.something);
}

function myCalculator(number1, number2, CallBack) {
    this.sum = number1 + number2;
    CallBack(sum);
}

myCalculator(5, 4, Display);        // this is a simple callback


// In real world, callbacks are most used with asynchronous functions.
// A typical example in JavaScript is setTimeout().

// When using setTimeout , you can specify a callback function to be executed on time-out.

function printName() {
    
    let firstname = "Tarokh";
    console.log(`my first name is ${firstname}`);
}

setTimeout(printName, 3000);

