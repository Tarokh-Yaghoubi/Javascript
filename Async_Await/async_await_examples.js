

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

