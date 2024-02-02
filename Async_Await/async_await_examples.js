

// we use 'async' keyword with a function to represent that the function is an asynchronous function.
// The 'async' function returns a 'promise'.


async function name(first, second, third, ...last) {
    // statements
}

async function f(){
    console.log(`Async function`);
    return Promise.resolve(1);
}

f();

f().then((result) => {
    console.log(result);
})

let promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('Promise resolved')}, 4000);
});

async function asyncFunc() {

    // wait until the promise resolves
  try {

    let result = await promise;

    console.log(result);
    console.log('Hello');
  
  } catch(error) {
  
    console.log(error);
  
  }

}

asyncFunc();


async function delayAndLog() {
    await new Promise(resolve => setTimeout(resolve, 4000));
    console.log("Delayed operation completed");
}

delayAndLog();

async function runProcess() {

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await response.json();
    console.log("==============================");
    console.log(json);
}

runProcess();



async function loadJson(url) {

    try {
    
        const response = await fetch(url);
    
        if (response.status === 200) {
            const json = await response.json();
            return json;
        
        } else {
  
            throw new Error(response.status);

        } 

    } catch (error) {

        console.log(`Error: ${error.message}`);
    
    }

}

loadJson('https://jsonplaceholder.typicode.com/todos/2')

    .then((resolve) => {
        console.log(resolve);
    })

    .catch((error) => {
        console.log(error);
    });



async function fetchData() {
    console.log("==================== =======================");
    const firstData = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const secondData = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    console.log(`first data is : ${firstData.json()}`);
    console.log(`second data is : ${secondData.json()}`);
}

fetchData();

// IN JavaScript many operations take time to complete, such as fetching data from a server, reading files, or waiting for user input.
// During these operations, your code continues to execute, and it is essential to handle these asynchronous operations effectively.

// Traditionally JavaScript used callbacks to handle asynchronous tasks, However, this approach often led to complex and hard-to-read code,
// known as "callback hell".

// To simplify asynchronous programming, ES6 introduced 'async' and 'await' keywords. which makes asynchronous code more readable and manageable

/**
 * 
 *      ASYNC FUNCTION
 * 
 *      The 'async' keyword is used to declare that a function returns a promise and allows you to use the 'await' keyword within it,
 *      when you declare a function as 'async', it means that the function will always return a promise, whether you explicitly return a promise or not.
 * 
 */

async function fetchMoreData() {
    return 'Data Fetched!';
}

/**
 * 
 *      'await' operator
 * 
 *      The await keyword is used to pause the execution of an 'async' function until a promise is settled (resolved or rejected).
 *      It makes JavaScript wait until the promise returns a result.
 *  
 */

async function fetchDataFromServer() {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let json = await data.json();
    return json;
}


async function fetchAnotherData() {
    let data = await fetchDataFromServer();
    console.log(`FETCH ANOTHER DATA: ${data}`);
}

fetchAnotherData();



async function fetchFinalData() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/todos/3");
        
        if (response.status === 200) {

            let data = await response.json();
            console.log(data);

        } else {

            throw new Error("Error occured");
        
        }

    } catch (error) {
        console.log(error.message);
    }

}

fetchFinalData();


const fetchArrowData = async () => {

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/3");
        let json = await response.json();
        console.log(json);
    } catch(error) {
        console.log(error.message);
    }
};

fetchArrowData();

