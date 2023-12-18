

let first = 54;
let second = 12;
let answer = first + second;

console.log(answer);
console.log(first ** second);
console.log("first ** second using MATH :", Math.pow(first, second));
console.log(++answer);  // this has a higher priority that answer++

var one = 1;
var oneStr = '1';

console.log(typeof oneStr);

console.log(one == oneStr);
console.log(one === oneStr);

if (!(oneStr === one)) {
    oneStr = parseInt(oneStr);
    console.log(oneStr === one);
}

console.log(typeof oneStr);

let x, y;
x = 5;
y = 6;

x = x ^ y;
y = y ^ x;
x = x ^ y;

console.log("x, y", x, y);

let p = 8;
p ??= 9;        // p is assigned to 9 if p is undefined 
console.log(p); // the value of p is 8

