
// an Empty object can be created using one of two syntaxes:



// let user = new Object();        // "Object Constructor" syntax
// let user1 = {};         // "Object literal" syntax

// user = {
//     name: "tarokh",
//     age: 19
// };

// console.log(user);
// user.isAdmin = true;
// console.log(user);

// if (!user.eyeColor) user.eyeColor = "blue";
// console.log(user);
// delete user.name;
// if (!user.name) user.language = "Japanese";
// console.log(user);

// user = {
//     firstName: "Tarokh",
//     lastName: "Yaghoubi",
//     age: 19,
//     "Likes Cats": true
// };

// console.log(user);
// console.log(user["Likes Cats"]);

// let fruit = new Object();
// let appleFruit = "Apple";

// fruit = {
//     [appleFruit + 'Computer']: 5
// };

// console.log(fruit);


function makeUser(name, age, eyeColor) {
    return {
        name: name,
        age: age,
        eyeColor: eyeColor
    };
}

function makeProgram(language, technology, programmer) {
    return {
        language: language,
        technology: technology,
        programmer: programmer
    };
}

function makeBetterUser(firstName, job, age) {
    return {
        firstName,
        job,
        age
    };
}


let user = new Object();
user = makeUser("tarokh", 19, "brown");
console.log(user);

let betterUser = new Object();
betterUser = makeBetterUser("Tarokh", "C Developer", 19);
console.log(betterUser);

// There is no limitation for Object property names 
// actually everything becomes a string 

let obj = new Object();
obj = {
    0: "test",
    1: "jesus"
};

// obj.__proto__ = 5;

obj.__proto__.data = 54;

obj.__proto__.func = function() {
    console.log(this.name);
    console.log(this.age);
    console.log("THis is from prototype");
}

console.log("------------------------");
console.log(obj);
console.log(obj.__proto__.data);

console.log(obj[0]);

// Property existence test, "in" operator

let nObj = new Object();

nObj = makeUser("tarokh", 19, "Brown");
if ("age" in nObj) console.log("Exists");
else console.log("Does not exists");


let returnValue = "age" in nObj;
if (returnValue) console.log(true);
else console.log(false);


// for-in loop in JS 


console.log("----------------------");
nObj.func();
console.log("----------------------");
for (key in nObj) {
    if (typeof nObj[key] !== "function") {
        console.log(nObj[key]);
    }
}

let jesus = {
    profitName: "JESUS"
};

console.log("----------------------");
for (key in jesus) console.log(jesus[key]);
console.log("----------------------");


