

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

// testFixed = testFixed.toFixed(5);   // this will add zeros to the number,
// console.log(testFixed);

console.log(0 < Infinity);
console.log(typeof Infinity);
let convInfinity = Number(Infinity);
console.log(convInfinity);

console.log("---------------- ------------------");
console.log(typeof NaN);
console.log(isNaN(21));
console.log(Number(NaN));
console.log(NaN === NaN);       // NaN does not even equal itself !

console.log("---------------- ------------------");
console.log(isFinite("15"));
console.log(isFinite("str"));           //  false, because a special value: NaN
console.log(isFinite(Infinity));            // false, because a special value: Infinity


console.log("---------------- ------------------");
console.log(Number.isNaN(NaN));
console.log(Number.isInteger("tarokh"));
console.log(Number.isFinite(0));
console.log(Number.isFinite("094231"));


console.log("---------------- ------------------");
console.log(Object.is(0, -0) === true);
console.log(Object.is(1, "str") === true);
console.log(Object.is(0, "0") === true);

console.log(typeof "123");
console.log(typeof (+"154"));

let complexNum = "5000$";
let number = parseInt(complexNum);
console.log(`number is : ${number}`);
// also we do have parseFloat

console.log(parseInt("a154"));  // NaN; THE first symbol stops the process 

/**
 * 
 *      parseInt() function also has an optional second parameter. It specifies the base of the numeral system,
 *      so parseInt() can also parse strings of hex numbers, binary numbers and so on.
 * 
 */

console.log(parseInt("01001111011", 2));

// JS has a built-in Math object which contains a small library of mathematical functions and constants. 
// a few examples:
// Math.random();


// returns a random number from 0 to 1, not including "1"
console.log("-------------------- ----------------------");
let i = 0;
let randNum = 0;
while (i != 9) {
    randNum = Math.random();
    console.log(`${i}: ${randNum}`);
    ++i;
}

console.log(Math.max(-0, 0));
console.log(Math.min(0, -0, 1, 15, 13, 154, 542));
