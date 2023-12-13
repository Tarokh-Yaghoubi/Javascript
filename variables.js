/**
 * 
 *      Variables are Container for Storing Data
 *      JavaScript Variables can be declared in 4 ways
 *      Automatically
 *      using var
 *      using let 
 *      using const
*/
{
const name = "tarokh";
var familyName = "Jacobi";
let firstName = "Harry";
let sirName = "Potter";

x = 6;
console.log("Automatic X value is : ", x);
console.log("firstname is " , name);
console.log("other firstname is ", firstName);
console.log("sir name is : ", sirName);
console.log("family name is : ", familyName);

}


/**
 *      The var keyword was used in all JavaScript code from 1995 to 2015.
 *      The let and const keywords were added to JavaScript in 2015. 
 *      The var keyword should only be used in code written for older browsers. 
 */

const first = 54;
const second = 89;
let sum = first + second;
console.log("the sum of first and second is : ", sum);

/**
 * 
 *      WHEN TO USE var, let, or const ???
 * 
 * 
 *      1- Always declare variables
 *      2- Always use const if the value should not be changed
 *      3- Always use const if the type should not be changed (Arrays and Objects)
 *      4- Only use let if you can't use const 
 *      5- Only use var if you MUST support old browsers.
 * 
 */

// JavaScript identifiers are case-sensitive 
// The 'equal to' operator is written like == in JavaScript.

let myDB = null;
let testUndef;      // null and undefined are different

console.log(myDB);
console.log(testUndef);

let t = 4, o = 9, k = 6;        // this is valid ! 
console.log(t, o, k);

var firstVarDeclaration = "Volvo";
var firstVarDeclaration;
console.log(firstVarDeclaration);       //   firstVarDeclaration will not lose it's value !! - You can not do this with let and const 


