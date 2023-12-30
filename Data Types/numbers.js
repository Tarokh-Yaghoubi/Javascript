

console.log("tarokh");
let num = 54;

/**
 *      
 *      In modern JavaScript, there are two types of Numbers:
 * 
 *          - Regular Numbers in JavaScript are stored in 64-bit format IEEE-754, also known as 
 *          "double precision floating point numbers". There are numbers that we are using most of the time
 * 
 *          - BigInt Numbers: BigInts are used in few special areas...
 * 
 */

// More ways to write a number 

let billion = 1000000000;
let otherBillion = 1_000_000_000;   // we can use _ as seperator
// we call this "syntactic sugar", it makes the number more readable.
// The JS Engine simply ignores _ between digits.

let eBillion = 1e9;     // this is one billion, one 1 and Nine 0

let smallNum = 0.000001;
let smallNum2 = 1e-6;   // these two are the same 

let toStrNum = 5426;
toStrNum = toStrNum.toString(8);
console.log(toStrNum);

let mnum = 0xFF;
console.log(mnum.toString(2));

let longNum = 564321346541321654;
console.log(564321346541321654..toString(36));      // we need to use two dotes.
console.log((564321346541321654).toString(36));      // Also we can use this format

let testFloor = 3.3;
testFloor = Math.floor(testFloor);
console.log(testFloor);

let testCeil = 3.6;
testCeil = Math.ceil(testCeil);
console.log(testCeil);

let testRound = 3.5;
testRound = Math.round(testRound);
console.log(testRound);

let testTrunc = 3.32158431;
testTrunc = Math.trunc(testTrunc);
console.log(testTrunc);

let testFixed = 12.34;
testFixed = testFixed.toFixed(1);
console.log(testFixed);

testFixed = testFixed.toFixed(5);   // this will add zeros to the number,
console.log(testFixed);
