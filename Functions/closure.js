
// JS is a very function-oriented language

// A function can be created any moment, passed as an argument to another function

// a function can be called from a totally different place of code later 

// a function can access variables outside of it (outer variables)


// CODE BLOCKS 

// if a variable is declared within a block {...}, it is only visible inside that block 

{
    let name = "tarokh";
    console.log(`here i can see name : ${name}`);
}

//console.log(name);  // here name is not defined


function getFullName(firstname = "John", lastname = "Smith") {

    function returnFullname() {
        return firstname + " " + lastname;
    }

    console.log(`full name is : ${returnFullname()} `);
}

getFullName("Tarokh", "Yaghoubi");
getFullName();


// LEXICAL ENVIRONMENT

// 1 - VARIABLE

/**
 * 
 *      In JS, every running function, code block, and the script as a whole have an internal {hidden} associated object known as
 *      the LEXICAL ENVIRONMENT.
 * 
 *      The lexical environment object consists of two parts:
 * 
 *      1 - Environment Record - an object that stores all local variables as its properties (and some other information like the value of "this")
 *      2 - A reference to the outer lexical environment, the one associated with the outer code.
 * 
 *      A "Variable" is just a property of the special internal object, "Environment Record". "To get or change the variable" means "to get or change a property of that object"
 * 
 */


// In this simple code without functions, there is only one lexical environment:

let phrase = "Hey";
console.log(phrase);

// This is so-called global lexical environment, associated with the whole script.

// The global lexical environment has no outer reference, the outer will point to null when the lexical environment is the global environment.

// NOTE:        THIS NOTE BELOW IS IMPORTANT

/**
 *
 *      When the script starts, the Lexical environment is pre-populated with all declared variables.
 *
 *      - Initially, they are in the "Uninitialized" state. That's a special internal state, it means that the engine known about the variable,
 *      but it cannot be referenced until it has been declared with "let". It is almost the same as if the variable did not exist.
 *
 *
 *      2 - then "let phrase;" definition appears. There is no assignment yet, so it's value is "undefined". we can use the variable from this point forward.
 *      3 - "phrase" is assigned a value.
 *      4 - "phrase" changes the value.
 *
 *
 *      note: a variable is a property of a special internal (hidden) object, associated with the currently executing block/function/script.
 *      note: working with variables is actually working with the properties of that object.
 *      note: "Lexical Environment" is a specification object: it only exists "theorically" in the language specification to describe how things work.
 *      note: We can not get the object "Lexical" in our code and manipulate it directly.
 *
 *      note: JS engines also may optimize it, discard variables that are unused to save memory and perform other internal tricks, as long as the visible
 *      behavior remains as described.
 *
 */


// 2 - FUNCTION DECLARATIONS

// a function is also a value like variable

// The difference is that a function declaration is instantly fully initialized.

// When a "lexical environment" is created, a function declaration immediately becomes a ready-to-use function
// unlike  let, that is unusable till the declaration.
// That is why we can use a function, declared as function declaration, even before the declaration itself.




// 3 - INNER AND OUTER LEXICAL ENVIRONMENT

// When a function runs, at the beginning of the call, a new Lexical Environment is created automatically to store
// local variables and paramteres of the call.

// During the function call we have two lexical environments: the inner one (for the function call) and the outer one (global)

/**
 *      -- The inner Lexical Environment corresponds to the current execution of the function, that for example has a single property called "name",
 *      which is the function argument. We called say("Tarokh"), so the value of name is "Tarokh".
 *
 *      -- The outer Lexical Environment is the global Lexical Environment. It has the phrase variable and the function itself.
 *
*/

// The inner Lexical Environment has a reference to the outer one.


// When the code wants to access a variable, the inner Lexical environment is searched first, then the outer one, then the more outer one and so on until the global one.

// If a variable is not found anywhere, 
