
/**
 * 
 *      One of the fundamental differences of objects versus 
 *      primitives is that objects are stored and copied "by reference".
 * 
 */

let message = "Hello!";
let phrase = message;

// A variable assigned to an object stores not the object itself, but its address in memory.
// in other words, "a reference" to it.

let user = {
    firstName: "John"
};

let admin = {};
let clone = {};

Object.assign(clone, user);

for (let key in user) admin[key] = user[key];

Object.assign(clone, user);

admin.firstName = "Tarokh";

Object.assign(clone, admin);

console.log(user.firstName);
console.log(admin.firstName);   // they are both the same


for (let key in clone) console.log(clone[key]);