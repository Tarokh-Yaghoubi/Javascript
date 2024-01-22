
// No matter how great we are at programming, sometimes our scripts have errors. They may occur because of our mistakes
// an unexpected user input, an erroneous server response, and for a thousand other reasons.

// Usually, a script "dies" (immediately stops) in case of an error, printing it to console.

// But there is a syntax construct try...catch that allows us to "catch" errors so the script can, instead of dying,
// do something more reasonable.

// THE TRY-CATCH SYNTAX

// the try_catch construct has two main blocks: try, and then catch:


/**
 * 
 *      try {
 *      
 *          // code ...
 * 
 *       }  catch (err) {
 * 
 *          // error handling
 * 
 *      }
 * 
 */


// It works like this:

//  - First the code in try is executed 
//  - If there were no errors, then catch (err) is ignored: the execution reaches the end of try and goes on, skipping catch.
//  - If an error occurs, then the try execution is stopped, and control flows to the beginning of catch (err).
//  The err variable (we can use any name for it) will contain an error object with details about what happened.

// So an error inside the try {...} block does not kill the script - we have a chance to handle it in catch.
// let's look at some examples.

try {
    console.log("THis is the first string in try catch");
    console.log("This is the second string in try-catch");
} catch (err) {
    console.log("Catch is ignored, because there is no errors.");
}


// error 

try {

    console.log("start of try");
    kfgndfgdfg;

} catch (err) {

    console.log("Error has occured");

}


// If an exception happens in "scheduled" code, like in setTimeout, then try..catch won't catch it:

/**
 *      That's because the function itself is executed later, when the engine has already left the try...catch construct.
 * 
 * 
 *      To catch an exception inside a scheduled function, try...catch must be inside that function: 
 */

setTimeout(function () {
    try {
        noSuchVariable;
    } catch {
        console.log("Error is caught here!");
    }
}, 1000);

// ERROR Object

// When an error occurs, JavaScript generates an object containing the details about it. Then object is then passed as an argument to "catch"

// each error object has two main properties 

// "name" and "message"

// name: Error name, For instance, for an undefined variable that's "ReferenceErrpr".

// message: Textual message about error details

// There are other non-standard properties available in most environments. One of the most widely used and supported is:

// stack: Current call stack; a string with information about the sequence of nested calls that led to the error. Used for debugging purposes.

// for instance:

try {
    lalala;

} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


    //     console.log(err);
}




// throw: the throw operator generates an error. The syntax is:
// throw <error object>

// Technically, we can use anything as an error object. That may be even a primitive. like a number or a string, but it is better to use objects, preferably with name and message 
// properties (to stay somewhat compatible with built-in errors).

// JS has many built-in constructors for standard errors: Error, SyntaxError, ReferenceError, TypeError and others. We can use them to create error objects as well.

// Their syntax is:

//let error = new Error(message);
//error = new SyntaxError(message);
//error = new ReferenceError(message);


// For built-in errors (not for any objects, just for errors), the "name" property is exactly the name of the constructor.
// And message is taken from the argument.


let error = new Error("Things happen o_O");
console.log(error.name);    // error
console.log(error.message);


try {

    JSON.parse("{ bad json o_O }");

} catch (err) {

    console.log(err.name);
    console.log(err.message);

}

let json = '{ "age": 30 }';     // incomplete data


try {

    let user = JSON.parse(json);

    if (!user.name) {

        throw new SyntaxError("IncompleteData: no name");   // (*)

    }

    console.log(user.name);

} catch (err) {

    console.log("JSON Error: " + err.message);  // JSON error: Incomplete data: no name

}

// In line (*), the "throw" operator generates a SyntaxError with the given message, the same way as JS would generate it itself.
// The execution of try immediately stops and the control flow jumps into "catch".


// Now "catch" became a single place for all error handling: both for JSON.parse and other cases.

// RETHROWING 

// In the example above we use try...catch to handle incorrect data. But it is possible that another unexpected error occurs within
// the try {...} block? Like a programming error (variable is not defined) or something else, not just this "Incorrect data" thing.

// For example:

let mjson = '{ "age": 19 }';

try {

    muser = JSON.parse(mjson);  // forgot to put the "let" before muser

} catch (err) {

    console.log("JSON Error: " + err);

}




// Programmers do make mistakes, Even in open-source utilities used by millions for decades - suddenly a bug may be discovered that leads to terrible hacks.




// In our case, try...catch is placed to catch "incorrect data" errors. But by its nature, catch gets all errors from try.
// Here it gets an unexpected error, but still shows the same "JSON Error" message. That's wrong and also makes the code more difficult to debug.

// To avoid such problems, we can employ the "rethrowing" technique. The rule is simple:

// catch should only process errors that it knows and "rethrow" all others.

// The "rethrowing" technique can be explained in more details as:

// - Catch gets all errors.
// - In the catch (err) {...} block we analyze the error object err.
// - If we do not know how to handle it, we do throw err.

// Usually, we can check the error type using the instance of operator:

try {

    tarokh = { /*...*/ };

} catch (err) {

    if (err instanceof ReferenceError) {

        console.log("Reference Error :)))");

    }
}


// We can also get the error class name from err.name property. All native errors have it. Another option is to read err.constructor.name

// In the code blow, we use rethrowing so that catch only handles SyntaxError:

let Json = '{ "name": "tarokh" }';  // incomplete data

try {

    let myUser = JSON.parse(Json);

    if (!myUser.age) {
        throw new SyntaxError("Incomplete data: no name");
    }

    blabla();   //  Unexpected Error

    console.log(myUser.age);

} catch (err) {

    if (err instanceof SyntaxError) {
        console.log("Json Error: " + err.message);
    } else {
        throw err;      // rethrow (*)
    }

}


// The error throwing on line (*) from inside catch block "falls out" of try...catch and can be either caught by an outer try...catch construct (if it exists), or it kills the script.
// So the catch block actually handles only errors that it knows how to deal with and "skips" all others.

// The example below demostrates how much errors can be caught by one or more level of try...catch:

function readData() {
    let json = '{ "age": 19 }';

    try {

        blabla();   // error

    } catch (err) {
        if (!(err instanceof SyntaxError)) {
            throw err;  // rethrow, (don't know how to deal with it)
        }
    }
}

try {

    readData();

} catch (err) {

    console.log("External catch got: " + err);      // caught it!

}
