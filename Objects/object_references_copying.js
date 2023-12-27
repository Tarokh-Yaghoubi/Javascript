
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

let someObj = Object.assign({}, admin);
console.log(someObj);

let C_Programmer = {
    name: "tarokh",
    age: 19,
    company: "EniacTech",
    func: function() {
        console.log(this.company);
    },
    languages: {
        low_level_lang: "C programming language",
        script_lang: "JavaScript",
        human_lang: "English and Persian"
    }
};

console.log(C_Programmer);
// let C_Programmer_Clone = Object.assign({}, C_Programmer);
let C_Programmer_Clone = {};
for (let key in C_Programmer) {
    if (typeof C_Programmer[key] !== "function") C_Programmer_Clone[key] = C_Programmer[key];
}
console.log(C_Programmer_Clone);
// C_Programmer_Clone.func();

let anotherClone = Object.assign({}, C_Programmer);
console.log(anotherClone);


let newUser = new Object(); 
newUser.me = newUser;

let newClone = structuredClone(newUser);
console.log(newClone);


