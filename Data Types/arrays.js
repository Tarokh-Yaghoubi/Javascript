
let arr = new Array();
let arr1 = [];      // these are the two ways for creating arrays
// almost all the time the second syntax is used

let fruits = ["Apple", "Orange", "Banana"];

// array elements are numbered, starting with zero 

console.log(fruits[0]);
fruits[0] = "Coconuts";
console.log(fruits);

fruits[3] = "Cherry";

console.log(fruits);
console.log(fruits.length); // this will give 4, because we have 4 items.
console.log(fruits[fruits.length - 1]);     // this will show cherry which is the last index of the array


// An array can store elements of any type, for example:

let anyTypeArray = ["firstname", true, {color: "black"}, false, function(){console.log("correct");}, 54, (a, b)=>console.log(`sum of nums is : ${a + b}`)];
console.log(anyTypeArray);
anyTypeArray[4]();
anyTypeArray[anyTypeArray.length - 1](3, 2);
console.log(anyTypeArray[2].color);


// fruits[-1] , we cannot access the last index like this (unlike python)
// we have to use the .at method (it is not supported by the old versions of node and browsers)

let lastIndex = anyTypeArray.at(-1);    // accessing the last element which is an arrow function
lastIndex(5, 6);


anyTypeArray.push((a, b, c) => (console.log(`a + b * c results : [${a + b * c}]`)));       // push an arrow function to the end of the array

anyTypeArray.at(-1)(4, 2, 6);

anyTypeArray.shift();
anyTypeArray.unshift("tarokh");


let copyArray = anyTypeArray;
console.log(copyArray === anyTypeArray);        // this is true, it is copied by reference 

copyArray.push("C Developer");
console.log(anyTypeArray.at(-1));       // this is also changed due to copyArray push ...


let copyByValue = [];
for (let char in anyTypeArray) copyByValue[char] = anyTypeArray[char];
console.log("------------------- -----------------");
console.log(copyByValue == anyTypeArray);   // this is false ! , it is strange ! 
console.log(copyByValue);
console.log(anyTypeArray);
copyByValue.at(-2)(9, 54, 6);

let loopArrVar = '';
let loopArr = [1, 2, 4, 6, 9, 8, 7, 3, 45, 65, 98, 154, 321];
for (let index = 0; index < loopArr.length; ++index) loopArrVar += loopArr[index] + ' ';
console.log(loopArrVar);

let anotherLoopArrVar = '';
let anotherLoopArr = ["tarokh", "Jerry", "Benzema", "Italy", "Mercedes", "{Happy Life}"];
for (let char of anotherLoopArr) anotherLoopArrVar += char + ' ';
console.log(anotherLoopArrVar);

// it is also possible to use for...in because arrays are objects

let anotherForInTypeArrVar = '';
for (let char in anotherLoopArr) anotherForInTypeArrVar += anotherLoopArr[char] + ' ';
console.log(`the same array logged using for..in loop : (( ${anotherForInTypeArrVar} ))`);
// BTW, we should not use for...in for arrays. It is slow, and it will iterate in all the unnecessary properties as well

/**
 * 
 *      The length property is writable, if we increase its value nothing will happen,
 *      but if we decrease it, it will truncate the array
 * 
 */


let testLengthProp = [1, 2, 3, 4, 5, 6, 7];
testLengthProp.length = 3;
console.log(testLengthProp);
// testLengthProp.length = 10;          -> THIS WILL NOT WORK ANYMORE, THE VALUES ARE GONE !! 


let nArr = new Array(3);    // this will create an array of length 3
console.log(nArr[0]);   // undefined !! 
console.log(nArr.length);       // this is now 3 :)

// To avoid such surprises, we usually use square brackets, unless we really know what we’re doing.

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][0]);

arr = [1, 2, 3];
console.log(String(arr) === '1,2,3');   // this will be true

