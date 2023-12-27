
/**
 * 
 *      Memory Management in JS is performed automatically and invisibly to us. we create primitives, objects,
 *      functions... All takes memory.
 * 
 *      What happens when something is not needed anymore ? How does the JS Engine discover it and clean it up ?
 * 
 */

// The main concept of memory management in JS is reachability
// "reachable values" are those that are accessible or usable somehow . they are guaranteed to be 
// stored in memory.

// There is a base set of inherently reachable values, that cannot be deleted for obvious reasons 
/**
 * 
 *      For Instance :
 *          - The currently calling function, its local variables and parameters.
 *          - Other functions on the current chain of nested calls, their local variables and parameters
 *          - Global variables 
 *          - (there are some other, internal ones as well)
 * 
 *      These values are called roots
 * 
 */

/**
 * 
 *      Any other value is considered reachable if it's reachable from root by a reference or by a chain of references.
 * 
 *      For instance, if there is an object in a global variable, and that object has a property referencing other object,
 *      that object is considered reachable. And those that it references are also reachable. Detailed examples to follow.
 * 
 */

// There is a background process in the JavaScript engine that is called garbage collector. It monitors all objects and removes those that have
// become unreachable.

let user = {
    firstName: "tarokh"
};

console.log(user.firstName);

// if the value of user is overwritten , the reference is lost.

/*  user = null;  */


//Now tarokh becomes unreachable, There is no way to access it, no references to it. 
// Garbage collector, will junk the data and free the memory.


// now imagine we have copied the reference from user to admin

let admin = user;

// now if we do the same, the object is still reachable via admin global variable, so it must stay in memory.
// If we overwrite the admin too, the it can be removed

user = admin = null;


function marry(man, woman) {

    //let before_marriaged_woman = Object.assign({}, woman);
    //let before_marriaged_man = Object.assign({}, man);
    woman.husband = man;
    man.wife = woman;  
    
    return {
        father: man,
        mother: woman
    }
}

let family = marry(
    {name: "Jacob"},
    {name: "Anna"}
);

// console.log(family);

console.log(family.father);
console.log(family.mother.husband);

delete family.father;
delete family.mother.husband;

console.log(family);


// Unreachable island

family = null;      // now the whole island is unreachable and it is removed from the memory.

// Object Collection is Done automatically . we cannot force or prevent it 

