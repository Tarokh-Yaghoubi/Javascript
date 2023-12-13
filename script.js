
let x, y, z;
let name = "tarokh";
var firstName = name;
let family = "yaghoubi";
x = y = z = 0;

console.log(x);
console.log("the value of x is ", x);

y++;

console.log("the value of y is ", y);
console.log("My name is ", name, " my family is ", family);
console.log("name + family is : ", name + " " + family);

let person = "this is a person as a test";
let personLen = person.length;

console.log("the length of the person test sentence is : ", personLen);

function printPersonName(name) {
    let nameLen = name.length;
    let printable = "";

    for (let index = 0; index < nameLen; index++) {

        printable += name[index];

    }

    console.log(printable);
    return name;

}

function printMyName(firstName) {

    console.log(firstName);

}

printMyName(firstName);

/**
 *  In JavaScript we have two types of values:
 *      * Fixed values
 *      * Variable values
 *      Fixed values are called Literals
 *      Variable values are called Variables
*/

/**
 *      The two most important syntax rules for fixed values are :
 * 
 *      Numbers are written with or without decimals :
 *      10.50
 *      1001
*/

/**
 * 
 *      Strings are text, written within double or single quotes:
 * 
 *      "John Smith"
 *      'John Smith'
 * 
*/

// JavaScript uses the keywords var, let, and const to declare variables
// An Expression is a combination of values, variables, and operators which computes to a value
// The computations is called an Evaluation

let _fd = 5;
console.log("the file descriptor (using under-score) number is : ", _fd);
let $fd = 32;                              // variables in JS can start with $ or _
console.log("the file descriptor number is : ", $fd);

// JavaScript is case-sensitive
// JavaScript uses the UNICODE character set 