

// Asynchronous JS

// "I will finish later"

// Function running in parallel with other functions are called asynchronous

// a good example is JS setTimeout()

function callDisplayFunction() {
    function Display(something) {
        this.something = something;
        console.log(this.something);
    }

    function myCalculator(number1, number2, CallBack) {
        this.sum = number1 + number2;
        CallBack(sum);
    }

    myCalculator(5, 4, Display);
}     // this is a simple callback


// In real world, callbacks are most used with asynchronous functions.
// A typical example in JavaScript is setTimeout().

// When using setTimeout , you can specify a callback function to be executed on time-out.

function testSetTimeOut() {
    function printName() {

        let firstname = "Tarokh";
        console.log(`my first name is ${firstname}`);
    }

    setTimeout(printName, 3000);

}
// in this example, printName is used as a callback

// printName is passed to setTimout() as an argument

// 3000 is the number of milliseconds before time-out, so printName will be called after 3 seconds

/*
function printDate() {
    let date = new Date;
    let d = date.getSeconds();
    console.log(`date is : ${d}`);    
}

setInterval(printDate, 1000);
*/

// With asynchronous programming, JavaScript programs can start long-running tasks in parallel

// But, asynchronous programmes are difficult to write and difficult to debug.

// Because of this, most modern JS methods do not use callbacks. Instead, in JS, asynchronous programming is solved using Promises instead.


// " I PROMISE A RESULT "
// "Producing code", is code that can take some time
// "Consuming code", is code that must wait for the result
// A promise is an object that links producing code and consuming code

// JavaScript Promise object

// A Promise contains both the producing code and calls to the consuming code:

function oneLastTest() {
    let myPromise = new Promise(function (myResolve, myReject) {

        /* "Producing code", (May take some time) */

        myResolve();
        myReject();

    })

    // "Consuming code" (Must wait for a fulfilled Promise)

    myPromise.then(
        function (value) { /* something if successfully */ },
        function (error) {/* something if error */ }
    );

}
// A JavaScript promise object can be:

// * Pending
// * Fulfilled
// * Rejected

// The promise object supports two properties: state and result
// When a Promise object is "pending" (working), the result is undefined.
// When a Promise object is "fulfilled", the result is a value
// When a Promise object is "Rejected", the result is an error object

// myPromise.state = "Pending" ==> undefined
// myPromise.state = "Fulfilled" ==> a result value
// myPromise.state = "rejected" ==> an error object

// Promise.then() takes two arguments, a callback for success and another for failure.

// Both are optional, so you can add a callback for success and failure only.


// EXAMPLE 

function lastTest() {

    function MyDisplay(something) {
        this.something = something;
        console.log(this.something);
    }

    let prom = new Promise(function (myResolve, myReject) {
        let x = 0;

        // The producing code (this may take some time)
        setTimeout(() => {
            if (x == 0) {
                myResolve();

            } else {
                myReject();
            }
        }, 5000)


    });


    prom.then(
        function (correct) { MyDisplay("correct"); },
    ).then(() => { console.log("sdlkfjnsdlkfjgnsdlkfgnslkdjfg") });


    let newPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully.");
        }, 2000);
    });

    newPromise.then((result) => {
        console.log(result);    // output: Data fetched successfully.
    }).catch((error) => {
        console.log(error);
    });

}

/**
 * 
 *      Imagine You are waiting for a package delivery. You know it will arrive, but you are not sure exactly when.
 *      A promise in JavaScript is like that: a placeholder for something that will happen in the future. It is a way for JS to handle tasks
 *      that might take some time to complete, like fetching data from a server or reading a file from disk.
 *      
 *  
 *      How does it work:
 * 
 *      1 - Promise creation: When you create a promise, you are saying: "Hey, I am going to do something that might take some time, but when I am done, I will let you know".
 *      2 - Pending, Fulfilled, Rejected: A promise can be in one of three states:
 *          * Pending: Initial state; neither fulfilled nor rejected
 *          * Fulfilled: The operation completed successfully.
 *          * Rejected: The operation failed.
 * 
 *      3 - Handling Results: Once a promise is fulfilled or rejected, you can handle the result (success or failure) using '.then' and '.catch' methods.
 * 
 *      Why is it used:
 * 
 *      Promises help make asynchronous code easier to manage. In JavaScript, many operations are non-blocking, meaning the code keeps running while waiting for something
 *      to finish, (like fetching data from a server). Promises provide a way to deal with this asynchronicity in a structured manner, making code more readable and manageable.
 * 
 */


const fetchData = new Promise((resolve, reject) => {
    // Simulating fetching data from server

    setTimeout(() => {
        const data = { username: "tarokh", sdfsdfemail: "tarokhyaghoubi@something.com" };
        if (data) {
            resolve(data);      // If data is retrieved successfully

        } else {
            reject("Failed ot fetch data");     // If there is an error
        }
    }, 2000);   // Simulating a delay for 2 seconds
});

// Using the promise

fetchData
    .then((data) => {
        console.log(`Data fetched successfully : ${data}`);
    })
    .catch((error) => {
        console.log(`Error fetching data: ${error}`);
    });

// In this example we create a Promise ('fetch' data) that simulates fetching data from a server after a delay of 2 seconds.
// If data is retrieved successfully, the promise is resolved using 'resolve(data)'
// If there is an error, The promise is rejected using 'reject('Failed to fetch data')'
// We use '.then' to handle the successful result and '.catch' to handle errors.

