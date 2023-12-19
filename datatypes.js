
/**
 * 
 *      JS Data Types
 * 
 */

/**
 * 
 *      JS Has 8 DataTypes
 * 
 *      - String
 *      - Number
 *      - BigInt
 *      - Boolean
 *      - Undefined
 *      - Null
 *      - Symbol
 *      - Object
 * 
 */

/**
 * 
 *      The Object DataType can Contain:
 * 
 *      - An Object
 *      - An array
 *      - A date
 * 
 */

// Numbers 

let length = 16;
let weight = 7.5;

// Strings 

let color = "Yellow";
let lastName = "Johnson";

// Booleans 
let x = true;
let y = false;

// Object
const person = {firstName: "Tarokh", lastName: "Doe"};

// Array Object
const cars = ["Toyota", "Volvo", "Benz"];

//Date Object
const date = new Date("2023-03-25");

// Note : A JavaScript variable can hold any type of data

let t = 16 + "tarokh";

// in JavaScript the expression above will be treated like this :
//  let t = "16" + "tarokh";

/**
 *      When adding a number and a string, JavaScript will treat the number as a string
 */
/**
 *      JavaScript evaluates expressions from left to right. Different sequences can produce different results
 */

// JS types are Dynamic :

let o;
o = 54;
o = 9.6;
o = "James";

// Exponential Notation

o = 123e5;
console.log("the value of O is :", o);
o = 123e-5;
console.log("the value of O is now :", o);

// JavaScript numbers are always one type : double(64-bit floating point);

let i = BigInt("0123456789012345678901234569870");
console.log("The BIGING Value of I is:", i);

let firstBool = 54;
let secondBool = 54;
console.log((firstBool == secondBool));
++firstBool;
console.log((firstBool == secondBool));
console.log((firstBool !== secondBool));

/**
 * 
 *      Arrays in JS
 * 
 *      JavaScript Arrays are written with square barackets (Same as the C programming language)
 *      Array Items are seperated by commas.
 *      The following code declares (creates) an array called humen, containing three items (people names)
 * 
 */

const humen = ["John", "Tommy", "Ash"];
var indexData = "";
let somethingToSeeBlyad = 19 + " ";
console.log(humen[0]);
humen.push("Jerry");

for (let index = 0; index < humen.length; index++) {
    indexData += humen[index];
    indexData += " ";
}
console.log(indexData);

console.log(19 + " ");
console.log(typeof somethingToSeeBlyad);

/**
 * 
 *      JS Objects 
 *      JavaScript objects are written in Curly braces {}
 *      Object properties are written as name: value pairs, seperated by commas.
 */

const animal =  {firstName: "Jessy", age: "8", eyeColor: "black"};
animal.nationality = undefined;
animal.nationality = animal.nationality ? ("England") : "Norway";
console.log(animal);
console.log(animal.nationality);

animal.child = null;
animal.child ??= "root";
console.log(animal.child);


// An empty string value has nothing to with undefined 
