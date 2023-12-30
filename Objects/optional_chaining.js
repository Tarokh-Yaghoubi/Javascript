

let user = {
    address: {
        home: "Black Smith",
    }
};

console.log(user);

// console.log(user.address.street.map(item => item));

// console.log(user?.address?.street?.map(item => item));


let mUser = null;

mUser?.sayHI();


let userAdmin = {
    admin() {
        console.log("I am admin");
    }
};

let userGuest = {};

userAdmin.admin?.();

userGuest.admin?.();

let key = "firstName";

let user1 = {
    firstName: "tarokh"
};

let user2 = null;

console.log(user1?.[key]);
console.log(user2?.[key]);

delete user1?.firstName;        // delete user1.firstName if user1 exists.

// We can use optional chaining ?. for safe deleting and reading, but not writing

/**
* 
*   The optional chaining ?. syntax has three forms:

*    obj?.prop – returns obj.prop if obj exists, otherwise "undefined".
*    obj?.[prop] – returns obj[prop] if obj exists, otherwise "undefined".
*    obj.method?.() – calls obj.method() if obj.method exists, otherwise returns "undefined".

*    As we can see, all of them are straightforward and simple to use.
*    The ?. checks the left part for "null/undefined" and allows the evaluation to proceed if it’s not so.
*    A chain of ?. allows to safely access nested properties.
*    Still, we should apply ?. carefully, only where it’s acceptable, according to our code logic,
*    that the left part doesn’t exist. So that it won’t hide programming errors from us, if they occur.
* 
*/


