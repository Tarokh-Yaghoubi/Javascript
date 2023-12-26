
// Functions in JavaScript



/**
 * 
 *      A JS function is a block of code designed to perform a particular task.
 *      A JS function is executed when "something" invokes it (calls it).
 * 
 */

var retVal;


retVal = multiply_numbers(4, 2);
console.log("the value of multiply_numbers is :", retVal);

function multiply_numbers(num1, num2) {
    return num1 * num2;
}

retVal = multiply_numbers(2, 2);
console.log("the value of multiply_numbers is :", retVal);

// When JS reaches a return statment, the function will stop executing

/**
 * 
 *      With Functions you can reuse the code
 *      You can write code that can be used many times
 *      You can use the same code with different arguments, to product different results.
 * 
 */

// The () operator invokes (calls the function):

function toCelsius(fahrenheit) {

    return (5 / 9) * (fahrenheit - 32);

}

let value = toCelsius(77);
console.log("the value of Fahrenheit to Celsius of 77 is :", value);

value = toCelsius();
console.log(value);
value = toCelsius;
console.log(value);

// toCelsius refers to the function object, and toCelsius() refers to the function result

// functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations

console.log("The tempreture is : " + toCelsius(77) + " Celsius");


// Variables declared within a JS function , become LOCAL to the function 
// Local variables can only be accessed from within the function 

module.exports = toCelsius;