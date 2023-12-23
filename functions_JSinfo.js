
/**
 * 
 * 
 *      javascript.info functions documentation
 * 
 */

// We have seen examples of built-in functions like alert(message), prompt(message, default) and confirm(question)
// But we can create functions of our own as well.

function logMessage(msg) {

    console.log(msg);

}

/**
 *      function_keyword    functionName (parameter1, parameter2, ...) {
 *          // Function Body
 *      }
 * 
 */

function fullname(parameter1, parameter2) {

    let fullName = parameter1 + " " + parameter2;
    return fullName;

}

// The function changes the value of the variable but it is not seen outside the function, because a function
// always gets a copy of the value 

function showMessage(from, text) {

    from = "*" + from + "*";    // make from a little nicer
    console.log(from + ': ' + text);

}

let from = "Ann";
showMessage(from, "Hello Everyone");
console.log(`from value is still : ${from}`);

// when a value is passed as a function parameter, it is also called an argument.

logMessage("This is a log message using a function");
let full_name = fullname("tarokh", "yaghoubi");
console.log(`The value of Fullname is : ${full_name}`);


// If you do not pass the argument to the bot , it will not be an error, it will pass undefined instead 

showMessage(from);  // second parameter will be undefined 

// we can set a default value for the function parameter so If not arguments are passed it will bot be undefined 

function testDefaultValue(firstNumber, secondNumber = 4) {
    return firstNumber + secondNumber;
}

let testDefaultRes = testDefaultValue(5);
console.log(testDefaultRes);


function anotherFunction() {
    return "tarokh";
}

function testPassAnotherFunc(from, text = anotherFunction()) {
    return from + ": " + text; 
}


let testPassAnotherFuncRes = testPassAnotherFunc(); // no value is passed as argument 
console.log(testPassAnotherFuncRes);

function testDefaultValue(firstNumber, secondNumber) {

    secondNumber = secondNumber || 2;       // this is what programmers used to do in old-JS because they did not have default-value option in declaring functions 
    return firstNumber + secondNumber;

}


let c = testDefaultValue(2);
console.log(c);


function showCount(count) {
    console.log(count ?? "UN-KNOWN");
}

showCount();
showCount(5);
showCount(undefined);


// an empty return is the same as return undefined


