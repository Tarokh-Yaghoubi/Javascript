/**
 * 
 *      Type Conversion in JavaScript
 * 
 */

/**
 * 
 *      Most of the time, operators and functions automatically convert the values given to them to the right type.
 *      For example, alert automatically converts any value to a string to show it. Mathematical operations convert
 *      values to numbers. There are also cases when we need to explicitly convert a value to the expected type.
 * 
 */

// STRING CONVERSION 

let value = true;
console.log(typeof value);

value = String(value);      // Now, value is a string "true"
console.log(typeof value);

// Numeric conversion in mathematical functions and expressions happens automatically

console.log(`The value of 6 string divided to 2 string is : ${Number("6") / Number("2")}`);     // this will be 3 | strings are converted to numbers
console.log(`The value of 6 string divided to 2 string is : ${"6" / "2"}`);     // this will be 3 | strings are converted to numbers (these two lines have the same result)

let str = "123";
console.log(typeof str);
let num = Number(str);
console.log(typeof num);

// BOOLEAN CONVERSIONS 

str = "";
console.log(Boolean(str));
str = undefined;
console.log(Boolean(str));
str = null;
console.log(Boolean(str));
console.log(Boolean(0), Boolean(1));
console.log(Boolean(NaN), typeof NaN);