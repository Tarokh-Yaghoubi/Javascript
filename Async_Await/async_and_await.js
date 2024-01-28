// Synchronous tasks happen in order - you must finish the first job before moving on to the next
// On the flip side, you can execute Asynchronous jobs in any order or even simultaneously.

// But how can this be understood in terms of programming,

// Asynchronous and Synchorous programming: What is the difference?

// synchronous sometimes called "sync", and asynchronous sometimes called "async", are two different programming models.

// Understanding how this two models differ is critical for:

/**
 *      - Building application programming interfaces
 *      - Creating event-based architectures 
 *      - Deciding how to handle long-running tasks
 * 
 */


// PROGRAMMING ASYNCHRONOUS APPLICATIONS 

// Asynchronous programming is a multi-threaded model that is applied to networking and communications.

// Asynchronous is a non-blocking architecture, which means it does not block further execution while one or more operations are in
// progress

// with "async"  programming  multiple related operations can run concurrently without waiting for other tasks to complete

// PROGRAMMING SYNCHRONOUS APPLICATIONS

// note: Think of asynchrounous programming as adaptable, and synchronous programming as strict.

// synchronous is a blocking architecture and is best for programming reactive systems.

// As a single-threaded model, it follows a strict set of sequences, which means that the operations are done one at a time,
// in perfect order.

// while one operations is being performed , other operations (instructions) are blocked.

// The completion of the first task triggers the next, and so on.

/**
 *  To illustrate how synchronous programming works, think of a telephone conversation. While one person speaks, 
 *  the other listens. When the first person finishes, the second tends to respond immediately.
 */



// JAVASCRIPT

// JS is an asynchronous and cocurrent programming language that offers a lot of flexiblity.
// It is single-threaded synchronous and also non-blocking like asynchronous.

// Altough it is synchronous by nature, JavaScript benefits from an Asynchronous process.
// Long-running JavaScript functions can make the USER INTERFACE (UI) or server unresponsive until 
// the function has returned, resulting in a less-than-stellar user experience.

// However, there are some instances where users can benefit from blocking programming, for example; when making an "online payment".

// JS offers both single-thread and multi-thread, blocking and non-blocking.


// SYNCHRONOUS VS ASYNCHRONOUS PROGRAMMING

// Ultimately, the choice comes down to operational dependencies. Do you want the start of an operation to depend
// on another operations completion, or do you want it to run independently.

// ASYNCHRONOUS is a non-blocking architecture, so the execution of one task is not dependent on another. Tasks can run simultaneously.

// SYNCHRONOUS is a blocking architecture, so the execution of each operation depends on completing the one before it.
// each task requires an answer before moving on to the next iteration.

// async is multi-threaded, which means operations and programs can run in parallel.
// sync is a single-thread, so only one application or program will run at a time.

// async is non-blocking, which means it will send multiple requests to a server at a time.
// sync is blocking - it will send the server one request at a time and wait for that request to be answered by the server.
// sync is slower.


/**
 * 
 *      DIFFERENCES ASIDE, ASYCN AND SYNC methods have advantages for different stakeholders: async for users and sync for developers.
 * 
 */

// Asynchronous programming enhances the user experience by decreasing the lag time 