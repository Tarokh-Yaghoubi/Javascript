
/**
 * 
 *      Nullish Coalescing operator '??'
 * 
 */

/**
 * 
 *      The nullish coalescing operator is written as two question marks ??.
 *      As it treats null and undefined similarly, we will use a special term
 *      here, in this article. For brevity, we'll say that a value is defined 
 *      when it is neither null nor undefined.
 *  
 */

// ?? will return the first argument if it is not null/undefined. Otherwise, the second one.

let a = undefined;
let b = 15;

let result = a ?? b;
console.log(result);


let user = 'tarokh';
console.log(user ?? "Harry");

let firstname = null;
let lastname = null;
let nickName = "elcucuy";

console.log(firstname ?? lastname ?? nickName ?? "John");

let height = null;
let weight = null;

let area = (height ?? 100) * (weight ?? 50);

console.log(`area is ${area}`);
