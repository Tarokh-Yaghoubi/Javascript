
/**
 * 
 *      Our Code Must Be As Clean and Easy to read as Possible.
 * 
 *      That is actually the art of programming--to take a complex task and code it in a way that is 
 *      both correct and human-readable. A good "CODE STYLE" greatly assists in that.
 * 
 */

// There are no MUST rules; everything here is style and preference, not religious dogma.

// Curly Braces:

/**
 * 
 *      In most JS projects curly braces are written in "Egyptian" Style with the opening brace     
 *      on the same line as the corresponding keyword--not on a new line. There should also be
 *      a space before the opening bracket, like this:
 * 
 */

let condition = 1;
if (condition) {
    // do this 
    // do that
}

// A single line construct, such as if (condition) doSomething(), is an important edge case. Should we use Braces at all ?

// BEGINNERS DO SOMETHING BAD, CURLY BRACES ARE NOT NEEDED:

if (condition === 0) { console.log("curly braces are not needed here"); }

// SPLIT TO A SECOND LINE WITHOUT BRACES -- NEVER DO THAT -- IT IS THEN EASY TO MAKE ERORRS WHEN ADDING NEW LINES

if (condition !== 0)
    console.log("This is no correct");
    // console.log("Another line when no braces are used"); // this is an error

// IF THE LINE (WITHOUT CURLY BRACES IS SHORT) IT WOULD BE ACCEPTABLE 

if (condition === 1) alert(`the condition value is ${condition}`);  // THIS IS ACCEPTABLE 

if (condition !== 1) {
    console.log("THIS IS THE BEST VARIANT 😃");
}

// INDENTS 

// There are two types of indents 
// Horizontal indents: 2 or 4 spaces
// A horizontal indentation is made using either 2 or 4 spaces 
// A Vertical indent, empty lines of for splitting code into logical blocks


// avoid nesting code too many levels deep 

// Most of the time, first the function is used, then the function declarations will be places at the end of the code 



