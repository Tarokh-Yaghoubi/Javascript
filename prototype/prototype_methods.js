

// Setting or reading the prototype with obj.__proto__ is considered outdated and somewhat deprecated (moved to the so-called 'Annex B' of the JS standard, meant for browsers only).

// The modern methods to get/set a prototype are:

// Object.getPrototype(obj);    - returns the [[Prototype]] of obj.
// Object.setPrototype(obj, proto);     - sets the [[Prototype]] of obj to proto


// the only usage of __proto__, that's not frowned upon, is as a property when creating a new object: {
//      __proto__: ...
//      }
// Although, there is a special method for this too:

// Object.create(proto, [descriptors]) - creates an empty object with given proto as [[Prototype]] and optional property descriptors.

// For instance:

let animal = {
    eats: true
};

// create a new object with animal as a prototype

let owl = Object.create(animal);        // same as {__proto__: animal}

console.log(owl.eats);

console.log(Object.getPrototypeOf(owl) === animal); // true

Object.setPrototypeOf(owl, {});     // change the prototype of owl to {}

let horse = Object.create(animal, {
    jumps: {
        value: true
    }
});

console.log(horse.jumps);
console.log(horse.eats);
console.log(Object.getPrototypeOf(horse) === animal);


let obj = {
    Identity: {
        firstName: "Tarokh",
        lastName: "Yaghoubi",
        age: 19
    },

    Appearance: {
        eyeColor: "Gold",
        height: 190,
        weight: 62
    },

    Job: {
        interesets: ["Music", "Cooking", "Reading 'NewYork Times'", "Learning new Languages"],
        currentlyWorking: true,
        personJob: "Programmer",
        programmingLangs: ["C programming", "JS", "Python", "BASH", "Rust"]
    }
};

console.log(obj);

let newObj = Object.create(obj, Object.getOwnPropertyDescriptors(obj));
console.log(newObj);

Object.setPrototypeOf(newObj, animal);
console.log(Object.getPrototypeOf(newObj) === animal);


console.log("-----------------------------------------------------");
console.log(newObj);


let chineseDictionary = Object.create(null);
chineseDictionary.hello = "你好";
chineseDictionary.bye = "再见";

console.log(Object.values(chineseDictionary));
