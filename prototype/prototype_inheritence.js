
// In programming, we often want to take something and extend it.

// For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it.

// We would like to what we have in user, not copy/reimplement its methods, just build a new object on top of it.

/**
 * 
 *      Prototypal inheritence is a language feature that helps in that
 *
 *      
 *      In JS, Objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object.
 *      That object is called "a prototype". 
 */

// object(prototype) -> {prototype object} :)

// when we read a property from object, and it is missing, JS automatically takes it from the prototype. In programming, this is called (prototypal inheritence).

// The PROPERTY [[prototype]] is internal and hidden, but there are many ways to set it.

// one of them is to use the special name __proto__, like this:

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;      // sets rabbit.[[Prototype]] = animal

// Now if we read a property from rabbit, and it is missing, JS will automatically take it from animal.

// For instance:

console.log(rabbit.eats);
console.log(rabbit.jumps);

// Here we can say that "animal" is the prototype of rabbit "or" rabbit prototypically inherits from animal.

// So if animal has a lot of useful properties and methods, then they become automatically available in rabbit.
// Such properties are called "inherited".

// If we have a method in animal, it can be called on rabbit.

animal = {
    eats: false,
    walk(animName) {
        console.log(`${animName} is walking ...`);
    }
};

let cat = {
    runs: true,
    sleeps: true,
    __proto__: animal
};

cat.walk("Tom");
console.log(cat.sleeps);
console.log(cat.eats);


// The prototype chain can be longer:

let human = {

    hands: true,
    legs: true,
    lazers: false,
    blood: true,

    breath() {
        console.log("A human can breath");
    }

};

let man = {

    height: true,
    weight: true,
    emotions: true,

    cry() {
        console.log("A man can cry");
    },

    __proto__: human

};


let tarokh = {

    firstName: "tarokh",
    lastName: "Yaghoubi",
    EyeColor: "Light-Brown",
    rich: false,

    walk(firstname) {

        console.log(`${firstname} can walk`);

    },

    __proto__: man

};



console.log(tarokh.firstName);
console.log(tarokh.lastName);
tarokh.walk("tarokh");
tarokh.cry();
tarokh.breath();
man.breath();
console.log(man.blood);

// There are only two limitations for this:
/**
 *      - The references can not go in circles, JS will throw an error if we try to assign __proto__ in a circle.
 *      - The value of __proto__ can be either an object or null, other types are ignored.
 *
 */

// it may be obvious: but still there can be only one prototype, an object may not inherit from two others.

/******************************************************************************************************
**    The __proto__ property is a bit outdated. It exists for historical reasons,
**    modern JavaScript suggests that we should use Object.getPrototypeOf/Object.setPrototypeOf functions
**    instead that get/set the prototype. We’ll also cover these functions later.
*******************************************************************************************************/
/**
*   The prototype is only used for reading properties.
*   Write/delete operations work directly with the object.
**/


// If we have a method in an Object, and we have a method with the same name in the object prototype,
// the one will be used that is declared in the object, not the prototype

let boy = {
    _age: 19,

    get age() {
        return this._age;
    },

    set age(age) {
        if (age == this._age) console.log("No need to update the age");
        else if (age > this._age) this._age = age;
        else console.log("Age is smaller than the object age");
    }

};


boy.age = 9;
console.log(boy.age);


// note: "this" is not affected by prototypes at all.


let outside = {
    walk() {
        if (!this.raining) console.log("walk! It is not rainy");
    },
    rainy() {
        this.raining = false;
    }
};

let me = {
    name: "Jacob",
    __proto__: outside
};


me.rainy();

console.log(`outside.hasOwnProperty result => ${outside.hasOwnProperty("raining")}`);

outside.rainy();
me.walk();
console.log(me.raining);
console.log(outside.raining);   // this would be false if outside.rainy() was not above 

console.log("----------------- ----------------");
for (let prop in me) if (prop == "raining") console.log(typeof prop, prop); else console.log(prop);
