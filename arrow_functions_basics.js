
/**
 * 
 *      There is also another very simple and concise for creating functions, that is often better than 
 *      Function Expressions
 * 
 *      It is called "arrow functions", because it look like this :
 * 
 *      let func = (arg1, arg2, ..., argN) => expression;
 */

// This creates a func that accepts arguments 1..N, then evaluates the expression on the right side with their use and returns 
// its result

// In other words, it is the shorter version of:

let func = function(arg1, arg2, argN) {
  
    return "expression";

};

// let's see an example 

let sum = (a, b, c) => (a + b + c);
console.log(sum(3, 2, 1));


// If we have only one argument, the parantheses can be ommited 

let double = n => n * 2;
console.log(double(2));

let saySomething = () => console.log("Hello from ArrowFunc");
saySomething();


// Arrow functions can be used in the same way as Function Expressions

let fine = function() {
    console.log("It is fine");
}

let notFine = function() {

    console.log("It is not fine");
}

let someThingElse = function() {
    console.log("He may not be a human");
}

let age = 18;
let welcome = undefined;

welcome = (age >= 18) ? () => fine() : (age < 18) ? () => notFine() : () => someThingElse();
welcome();

// Multiple Arrow Functions 

/**
 * 
 *      The arrow functions that we have seen so far were very simple. The took arguments from the left of =>, evaluated
 *      and returned the right-side expression with them.
 *      Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them
 *      in Curly-Braces. The major difference is that curly braces require a return within them to return a value just like a regular 
 *      function does. 
 * 
 */

// LIKE THIS : 

let sumArrow = (a, b) => {
    let result = a + b;
    return result;
};

console.log(sumArrow(5, 2));
