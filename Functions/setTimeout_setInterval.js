// We may decide to execute a function not right now 
// But at a certain time later.

// That is called "scheduling a call".
// There are two methods for it :

/**
*
*    setTimeout: allows us to run a function once after the interval time.
*    setInterval: allows us to run a function repeatedly, starting after the interval time,
*    then repeating continuosly at that interval.
*
*/

// These methods are not a part of JavaScript specification. But most environments have the internal
// scheduler and provide these methods. In particular, they are supported in all browsers and Node.Js.

// setTimeout:

// syntax: let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...) 

// Parameters:

// func|code:
// Function or string   of code to execute. Usually, that is a function. For historical reasons, a string of code
// can be passed, but that is not recommended.

// delay:

// the delay before run, in milliseconds, 1000 ms = 1 second. by default 0.


// arg1, arg2:

// Arguments for the function 


// For example this code calls greet() after one second

function greet() {
    console.log("Hello how are you mate?");
}

let firstTimeOut = setTimeout(greet, 1000);
console.log(`The identifer of firsttimeOut is : ${firstTimeOut}`);
// with arguments 

function greetUser(message, who) {

    let str = `${message} to user ${who}`;
    console.log(str);

}

let secondTimeOut = setTimeout(greetUser, 4000, "Hello bro how are you", "Mosh");
console.log(`The identifier of secondTimeOut is ${secondTimeOut}`);

// If the first argument is a string, then JavaScript will create a function from it 


let func = new Function("console.log('this is a function string')");



let thirdTimeOut = setTimeout(func, 2000);
console.log(`The identifier of thirdTimeOut is ${thirdTimeOut}`);
// setTimeout('console.log("this is another function string")', 0); // throws an error 



// but using strings is not recommended, use arrow functions instead


let fourthTimeOut = setTimeout(() => console.log("this is a message from arrow function"), 2000);
clearTimeout(fourthTimeOut);

// an arrow function with arguments and timer
let lastTimeOut = setTimeout((a, b, c) => console.log(`the sum of ${a} and ${b} and ${c} is ${a + b + c} :)`), 3000, 1, 5, 6);

// setInterval

// the setInterval method has the same syntax as setTimeout:

// syntax: let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...);


// All arguments have the same meaning 
// But unlike setTimeout it runs the function not only once, but regularly after the given interval of time

// To stop further calls, we should call clearInterval(timerID)



// this will repeat the message tick every two seconds, and stop it after five seconds 
let timerID = setInterval(() => console.log('tick'), 2000);
setTimeout(() => { clearInterval(timerID); console.log('stop'); }, 5000);


// Nested setTimeout 

// There are two ways of running something regularly

// One is setInterval. The other one is a nested setTimeout, like this:


let nestedtimerID = setTimeout(function tick() {
    console.log("tick");
    nestedtimerID = setTimeout(tick, 2000); // (*)
}, 2000);


// The setTimeout above shedules the next call right after the current one. (*)

// The nested setTimeout is a more flexible method than setInterval. This way the next call
// may be sheduled differently, depending on the results of the current one.

// For instance, we need to write a service that sends a request to the server every 5 seconds asking for data
// , but in case the server is overloaded, it should increase the interval to 10, 20, 40,.. seconds.

// Here is the pseudocode:

let delay = 5000;

let server_timerID = setTimeout(function request() {

    // ... send request ...

    // if (request failed due to server overload) delay *= 2;

    // server_timerID = setTimeout(request, delay);

}, delay);


// And if the functions that we are sheduling are CPU-hungry, then we can measure the time taken by the 
// execution and plan the next call sooner or later.

// Nested setTimeout allows to set the delay between the executions more precisely than setInterval.

// lets compare two code fragments 

// the first one uses setInterval:

let i = 1;
setInterval(function () {
    func(++i);
}, 100);

// The second one uses nested "setTimeout"

let j = 1;
setTimeout(function run() {
    func(j++);
    setTimeout(run, 100);
}, 100);


// For "setInterval" the internal sheduler will run func(i++) every 100ms

// The real delay between func calls for "setInterval" is less than in the code.




