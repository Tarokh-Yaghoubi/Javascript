
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
if (falseValue === 0) {
    console.log("the value is false");
}
