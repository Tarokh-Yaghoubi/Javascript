

/**
 * 
 *      By Specification, Only two primitive types may serve as object property keys:
 * 
 *      - string type, or
 *      - symbol type.
 * 
 */

/**
 * 
 *      Otherwise, if one uses another type, such as number, it's autoconverted to string. So that obj[1] is the same 
 *      as obj["1"], and obj[true] is the same as obj["true"].
 * 
 *      Until now we've been using only strings.
 *      Now lets explore symbols, see what they can do for us.
 * 
 */

/**
 * 
 *      SYMBOLS
 * 
 *      A "symbol" represents a unique identifier.
 *      A value of this type can be created using Symbol():
 * 
 */

let id = Symbol();
// Upon creation, we can give symbols a description (also called a symbol name), Mostly useful 
// for debugging purposes. 

let newId = Symbol("id");

// Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description
// , they are different values. The description is just a label that does not affect anything. 
// For instance here are two symbols with the same description -- they are not  equal:

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(typeof id1);
console.log(typeof id1.toString());
console.log(id1 === id2);

let user = {
    name: "John"
};

let userId = Symbol("userID");
user[userId] = 1;

console.log(user[userId]);

// Hulted for now