
/**
 * 
 *      Loops in JS
 * 
 */

// We often need to repeat actions.
// For example, outputting goods from a list one after another or just running the same code for each number 
// from 1 to 10.

// Loops are a way to repeat the same code multiple times

// THE WHILE LOOP
/*
while (true) {
    // Code
    // so-called 'loop body'
}
*/
// while the condition is truthy, the code from the loop body is executed.
// For instance the loop below outputs i while i < 3:

let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

console.log("-----------------------");

i = 3;
while (i) {
    console.log(i);
    --i;
}

console.log("-----------------------");

// note:  curly braces, are not required for a single-line body

// do-while : this loop first executes the body, then checks the condition 
// in do-while, the body will at least execute once .

// same program using the do-while loop : 

i = 0;
do {
    console.log(`This is for the do-while ${i}`);
    ++i;
} while (i === 0);  // it is too late, because we are using do-while, not while 

// Usually while () {...} is preferred


// for loops : 

console.log("-----------------------");

i = 0;

if (i < 3) {
    console.log(i);
    i++;
}

if (i < 3) {
    console.log(i);
    i++;
}

if (i < 3) {
    console.log(i);
    i++;
}

// this is the same as this :
console.log("-----------------------");

for (let index = 0; index < 3; ++index)
    console.log(index);

console.log("-----------------------");

/** CONTINUE KEYWORD */
for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body // 
    if (i % 2 == 0)
        continue;      
    
    console.log(i); // 1, then 3, 5, 7, 9
}

// labels for the loops 

console.log("-----------------------");

// outer: for (let index = 0; index < 3; ++index) {

//     for (let j = 0; j < 3; ++j) {

//         let input = prompt(`Value at coords (${index}, ${j})`, '');

//         if (!input) break outer;

//     }
// }

console.log("Done");



// SWITCH-CASE  example :

let a = "1";
let b = 0;

switch (+a) {
    case b + 1:
        console.log("this runs because +a is 1, so does b");
        break;
    default:
        console.log("This will not run");
}

