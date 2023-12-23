
// Conditional Branching: if, '?'


/**
 * 
 *      Sometimes, we need to perform different actions based on different conditions.
 *      To do that, we can use the if statement and the conditional operator ?, that's 
 *      also called a "question mark" operator.
 * 
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('What is your name ? ', name => {
    console.log(`Hello miss/mister ${name}`);
    readline.close();
});

function returnFalse() {
    return 0;
}

let falseValue = returnFalse();
let result = (falseValue === 0) ? false : true;
console.log(`the result is : ${result}`);


let age = 19;
let user_age = (age < 15) ? "a teenage" :
                (age < 15) ? "a kid" :
                (age === 19) ? "19" :
                "dead";
console.log(`the user is ${user_age}`);

let checkItsTrue = true;
(checkItsTrue === true) ? console.log("it is true") : console.log("It is false");


let a = 2, b = 4;
let sum_result;
(a + b > 5) ? sum_result = "Over" : sum_result = "Below";
console.log(`the value of sum_result is : ${sum_result}`);

