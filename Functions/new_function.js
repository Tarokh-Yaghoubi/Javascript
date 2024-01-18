

// There is one other way to create a function, It is rarely used, but sometimes there is not alternative.

// SYNTAX: let func = new Function([arg1, arg2, ...argN], functionBody);

let sumfunc = new Function('a', 'b', 'return a + b');
console.log(sumfunc(5, 6));

let sayHi = new Function('console.log("Hello mate, this is a greeting from the new function...")');

sayHi();

// new Function allows us to take an string from a server and turn it into a function 

// let str = ... take the code from a server dynamically ...

let func = new Function(str);
func();

// new functions do not have access to outer variables, they just do have access to global variables (Global Lexical Environment)

// minifer: a special program that shrinks code by removing extra comments, spaces, and renames local variables into shorter ones.

// If new Function had access to outer variables, it would have problems with minifiers

