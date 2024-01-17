

// many JS built-in functions support an arbitrary number of arguments 
/**
 * 
 *      For instance:
 *          - Math.max(arg1, arg2, ..., argN) - returns the greatest of the arguments
 *          - Object.assign(dest, src1, ..., srcN) - Copies properties from src1..N into dest.
 *          ...and so on.
 */

// REST PARAMETERS ...
// a function can be called with  any number of arguments, now matter how it is defined.

function sumNumbers(a, b) {
    return a + b;
}
let ans = sumNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);

// there will be no errors, but of course only the first two arguments will be counted.

console.log(ans);       // the result will be 3


// The rest of the paramters can be included in the functions definition by using three ... dots followed
// by the name of the array that will contain them. The dots literally mean "gather the remaining parameters into an array".

// For instance, to gather all arguments into  array args:

function sumAll(...args) {

    let sum = 0;

    for (let arg in args) sum += arg;

    return sum;

}

let sumResult = sumAll(5, 6, 1);
console.log(sumResult);

function showName(firstName, lastName, ...titles) {

    console.log(`${firstName} ${lastName}`);

    console.log(titles[0]);
    console.log(titles[1]);
    console.log(titles.length);

}

showName("Tarokh", "Yaghoubi", "Karim Koorani", "sdjkfasjdflasbf");

// note: The rest parameters must be at the end

// The arguments variable 

// There is a special array-like object named "arguments" that contains all arguments by there index

function printName() {
    if (arguments[0]) {
        console.log(`name is : ${arguments[0]}`);
    } else if (!arguments[0]) {

        arguments[0] = "Tarokh";
        console.log(`There is not argument specified, ${arguments[0]} by default`);
    }
}


printName();
printName("Mohammad");



// arrow functions do now have the special arguments object 

// spread syntax 

// Imagine we have an array of numbers and we wanna use Math.max on it, but Math.max does not accept arrays, 
// so we need to convert the array to the list of arguments, that is where the spread syntax comes to play.



let arr = [54, 84, 65, 2, 3, 4, 69, 80];
// Math.max(arr);   // wrong 

console.log(`Max is: ${Math.max(...arr)}`);

// we can also pass multiple iterables in this way :

let newArr = new Array();
newArr = [54, 66, 53, 68, 80, 89, 100, 120, 125, 143];
console.log(`Multiple Iterables, Max = ${Math.max(...arr, ...newArr)}`);    // The number that is the biggest in both arrays 

let merged = [0, ...arr, 500, ...newArr];
console.log(merged);
console.log(Math.max(...merged));

let hello = "Hello";
// we can use the spread syntax to turn the string into array of characters 

console.log([...hello]);
let arrHello = [...hello];
arrHello = Array.from(hello);   // we can also do this 
console.log(arrHello);
let final = "";
for (let char of arrHello) final += char;
console.log(final);


let obj = { first: 5, second: 8, firstName: "tarokh" };
let newObj = { ...obj };

// it is also possible to copy objects using spread syntax  
console.log(JSON.stringify(obj) === JSON.stringify(newObj));    // now this is TRUE :))


