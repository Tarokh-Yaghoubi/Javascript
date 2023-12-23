/**
 *
 *      Variables are Container for Storing Data
 *      JavaScript Variables can be declared in 4 ways
 *      Automatically
 *      using var
 *      using let
 *      using const
 */

"use strict";

{
  const name = "tarokh";
  var familyName = "Jacobi";
  let firstName = "Harry";
  let sirName = "Potter";

  let x = 6;
  console.log("Automatic X value is : ", x);
  console.log("firstname is ", name);
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
let testUndef; // null and undefined are different

console.log(myDB);
console.log(testUndef);

let t = 4,
  o = 9,
  k = 6; // this is valid !

console.log(t, o, k);

var firstVarDeclaration = "Volvo";
var firstVarDeclaration;
console.log(firstVarDeclaration); //   firstVarDeclaration will not lose it's value !! - You can not do this with let and const

var secondVarDeclaration;
console.log(secondVarDeclaration);
var secondVarDeclaration = "England";
console.log(secondVarDeclaration);
console.log(secondVarDeclaration)   // semicollon is not a necessity in JS

/**
 *  This is a block scope 
 */
{
  let myColorCode = 0xFF;
  let myBestFriend = "ME";
  console.log(myColorCode);
  console.log(myBestFriend);
}

//console.log(myColorCode);   // this must cause an error 
//console.log(myBestFriend);  // myColorCode and myBestFriend can not be used here because they are in another block of code 

/**
 * 
 *    Variables declared with var always have the Global Scope
 *    Variables declared with var keyword can not have block Scope
 * 
 */

{

  var blockTestVar = "first block test";
  var secondBlockTest = 0xCE;
  console.log(blockTestVar);
  console.log(secondBlockTest);

}

console.log("Outside the BLOCK : ", blockTestVar);
console.log("Outside the BLOCK : ", secondBlockTest);     // this will work properly 


// let jesus = 0;
// let jesus = 45;   // you can not do this with 

var jesus = 0;
var jesus = 0x03;   // this is possible using var 


var jesus = 5;
// here jesus is 5

{
  var jesus = 8;
  // here jesus is 8;
}

console.log("JESUS :", jesus);   // here jesus is also 8 !! 

let sheitoon = 87;
// Sheitoon is 87 here ;

{

  let sheitoon = 48;  // here Sheitoon is 48

}

console.log(sheitoon);

{
  const username = "tarokh";
  console.log("username is : ", username);
}
// console.log("USERNAME OUTSIZE BLOCK :", username);

let name = 9;
var mname;
console.log(this.mname);

console.log(this.name);
console.log(this);

phoneNum = "9128164847"
var phoneNum; // this is ok, because var is Hoisted 

console.log("phone Number is :", phoneNum);


/**
 * 
 *    A const variable must be assigned a value when it is declared 
 * 
 */

const PI = 3.1415;
// you can NOT change a const variable value 

/**
 * 
 *    Use a const when you declare :
 * 
 *    - A new Array
 *    - A new Object
 *    - A new Function
 *    - A new RegExp
 * 
 */

const cars = ["Saab", "Volvo", "BMW"];
var iterateVal = "";
cars[0] = "Toyota";
cars.push("Audi");    // you can play with an array when it is const , but you can not reassign the array again

for (let iterate = 0; iterate < cars.length; ++iterate) {
  iterateVal += cars[iterate];
  iterateVal += " ";
}

console.log(iterateVal);

/**
 * 
 *    CONSTANT OBJECTS : 
 * 
 */

const workers = {username:"tarokh", password:"hashed", color:"white"};
workers.username = "Jacob";
workers.color = "Yellow";
workers.job = "C Developer";    // You can add a property

console.log(workers);

// const test = {username:"tarokh", password:"hashed", color:"white"};

// let test2 = test;

// test2.username = "amirali";

// console.log(test);
// console.log(test2);        // BIG ? 


// You can change the properties of a constant object, but you can not reassign the object


let message;    // declareds a variable 
message = 'Hello Man, Nice Trying';
console.log("The message content is :", message);

var myusername = "tarokh.yaghoubi";
var myusername = "tarokh.git";    // re-declaration is possible in using let 

//  In languages such as Haskell, the languages forces us to create a new variable if we wanna use another one 
// we can not use the same variable with a different value in Haskell 


let asd = "carzz";
console.log(asd);

const userpass = "12345678";
console.log(userpass[0]);

let index = 0;
let varValue = "";
for (index = 0; index < userpass.length; ++index) {
  if (userpass[index] != '7')
      varValue += userpass[index];
  else
      break;
}
console.log("the length of userpass[index] copied in varVal is :", index);
console.log("the value of varVal is :", varValue);
let arr = [...userpass].filter(item=>item <= 6).join("");
console.log(typeof arr);
