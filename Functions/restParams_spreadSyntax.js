

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

