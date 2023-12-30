
/**
 *
 *      JS does not allow you to customize how operators work on Objects
 *      Unlike some other languages, such as C++ or Ruby, we cannot implement
 *      a special object method to handle addition (or other operators).
 *
 */

/**
 *
 *      In case of such operations, objects are auto-converted to primitives, and then
 *      the operation is carried out using this primitives and resutls in a primitive value
 *
 */

/**
 *
 *      That is an important limitation, the result of obj1 + obj2 can not be another object
 *      We cannot make objects representing vectors or matrices (or achievments or whatever),
 *      add them and expect a "summed" object as the result . such architectural feats are automatically
 *      "off the board".
 *
 */

// So because technically we cannot do much here, there is no maths with objects in real projects.
// When it happens, with rare exceptions, it's because of a coding mistake.

/**
 *
 *      OBJECT CONVERSION RULES
 *
 *      1 - There is not conversion to boolean, all objects are true when they are converted to Boolean. There exist only
 *      numeric and string conversions.
 *
 *      2 - The numeric conversion happens when subtract objects or we apply mathematical functions. For instance, Date objects
 *      can be subtracted, and the result of (date  -  date2) is the time difference between two dates.
 *
 *      3 - As for the string conversion, it usually happens when we output an object with alert(obj) and in similar contexts.
 *
 */

// We can implement string and numeric conversion by ourselves, using special object methods.

// How does JavaScript decide which conversion to apply?

// There are three variants of type conversion, that happen in various situations. They are called "hints".

let obj = {
    number: 45
};
console.log(typeof obj.number);
console.log(typeof obj);
let n = +obj;
console.log(typeof n);


let otherObj = {
    num: 234
};

console.log(typeof otherObj);
let numberz = Number(obj);
console.log(typeof numberz);
console.log(typeof otherObj);
