
/**
 * 
 *      JS allows us to work with primitives (strings, numbers, etc) as if they were objects.
 *      They also provide methods to call as such. We will study those soon, but first we will
 *      see how it works because, of course, primitives are not objects (and here we will make it even clearer).
 * 
 */

// Let's look at the key distinctions between primitives and objects.

/**
 * 
 *      A primitive:
 * 
 *          - Is a value of primitive type
 *          - There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined
 * 
 *      An Object:
 *          
 *          - Is capable of storing multiple values as properties
 *          - Can be created with {}, for instance: {name: "tarokh", age: 19}. There are other kinds of 
 *          Objects in JavaScript: "functions" for example, are objects.
 * 
 */

// One of the best things about the objects is that we can store a function as one of its properties

let tarokh = {
    firstName: "Tarokh",
    sayHi: function () {
        console.log("Hello from Function inside Object");
    }
};

tarokh.sayHi();

// So here we have made an object "tarokh" with the method sayHi.

/**
 * 
 *      Many built-in objects already exist, such as those that work with "Date", "errors",
 *      "HTML Elements", etc. They have different properties and methods.
 *      But, these features come with a cost!
 *
 *      Objects are "heavier" than primitives. They require additional resources to support the internal machinery.
 *  
 */

//      A PRIMITIVE AS AN OBJECT

/**
 * 
 *      Here is the paradox faced by the creator of the JavaScript:
 * 
 *          - There are many things one would want to do with a primitive, like a string or a number. It would be great to access 
 *          them using methods.
 * 
 *          - Primitives must be as fast and lightweight as possible.
 * 
 * 
 *      The solution is a little bit awkward, but here it is:
 * 
 *          - Primitives are still primitive. A single value, as desired.
 *          - The language allows access to methods and properties of strings, numbers, booleans and symbols. 
 *          - In order for that to work, a special "object wrapper" that provides the extra functionality is created, and then is destroyed. 
 * 
 * 
 *      The "Object Wrappers" are different for each primitive type and are called: "String", "Number", "Boolean", "Symbol" and "BigInt".
 *      Thus, they provide different sets of methods.
 *  
 *      For instance, there exists a string method str.toUpperCase() that returns a capitalized str.
 * 
 * */

let str = "tarokh is a good man";

str = (str.toUpperCase());

console.log(str);   // This is not upper-case

let n = 1.23456;
n = n.toFixed(2);
console.log(n);


let zeroIsNotFalse = new Number(0);

if (zeroIsNotFalse) {  // This is true because zero is now an object !!!

    console.log("ZERO IS TRUTHY ?!?");
}


// Null and Undefined have no methods


//  """Primitives except null and undefined provide many helpful methods""".

