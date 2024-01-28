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

