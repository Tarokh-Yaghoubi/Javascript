
// Let's talk about Promises a little bit

// In JavaSCript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

// A‌ promise may have one of three states. 

// × pending
// × fulfilled
// × rejected

// A‌ promise starts in a pending state. That means the process is not complete. if the operation is successful the process ends in a fulfilled state.
// and if an error occurs, the process ends in a rejected state.

let promise = new Promise((resolve, reject) => {
    // do something

    let x = 0;

    if (x === 0) {
        resolve("Fine");
    } else {
        reject("not FINE");
    }
});

console.log(promise);


promise
    .then((result) => {
        console.log(`The result is : ${result}`);
    })

    .catch((error) => {
        console.log(`The error is : ${error}`);
    })


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000)
    .then(() => console.log('Delayed Operation Completed'));

// the delay function creates a Promise that resolves after a specified time (in milliseconds). Useful for simulating network requests 
// or other time-based operations


