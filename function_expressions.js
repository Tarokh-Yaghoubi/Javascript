
/**
 * 
 *      Function Expressions in JS
 *      In JavaScript, a function is not a "magical language structure", but a special kind of value.
 *      The syntax that we used before is called function declaration:
 */

let sayHi = function() {

    console.log("Hello!");

};

/**
 * 
 *      There is another syntax for creating a function that is called a Function Expression
 *      It allows us to create a new Function in the middle of any expression
 *      For example:
 */

let sayBye = function() {
 
    console.log("Good Bye!!");

};

// no matter how the function is created, a function is a value. both examples above 
// store a function in a variable 
// we can even print out the value string

console.log(sayBye);
sayBye();
sayHi();


function greet() {

    console.log("How are you mate ... ");

}

let greetFunc = greet;

greetFunc();

//      CALLBACK FUNCTIONS 


function ask(question, yes, no) {
    if (confirm(question))
        yes();
    else
        no();
}

function showOk() {

    console.log("You Agreed !");

}

function showCancel() {

    console.log("You cancelled the execution");

}

ask("Do you agree?", showOk, showCancel);


function askUser(question, yes, no) {
    if (confirm(question))
        yes();
    else
        no();
}

// these kind of functions in askUser are called anonymous functions/
// because they have no names, they are not accessible from outside the askUser
// because they are not assigned to any variable 

askUser(
    "Do you agree ? (askUser)",
    function() { alert("You Agreed"); },
    function() { alert("You did not agree"); }
);

// a function declaration can be called earlier than it is defined.
/**
 * 
 *      A global function declaration is visible in the whole script, no matter where it is.
 *      That is due to the internal algorithms. when JS prepares to run the script, it first looks 
 *      for global function declarations in it and creates the functions. we can think of it as an
 *      "Initialization stage".
 * 
 *      And after all Function Declarations are processed, the code is executed. so it has access to these functions.       
 */


// In strict mode, when a Function declaration is within a code block. it's visible everywhere inside that block.
// But not outside of it



let age = 1555;
let welcome = undefined;


welcome = (age === 48) ? function() { console.log("you are old enough to win"); } : (age < 48) ? function() { console.log("you are not old"); } : function() { console.log("you are nothing") };

welcome();      // this is ok now, but if it was simple-function-declaration it was not ok

