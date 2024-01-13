
// map is a collection of keyed data items, just like an Object. But the main difference is that Map,
// allows keys of any type.

/**
 *      Methods and properties are:
 * 
 *          - new Map(): creates the map.
 *          - map.set(key, value): stores the value by the key.
 *          - map.get(key): returns the value by the key, undefined if key does not exist in map.
 *          - map.has(key): returns true if key exists, false otherwise.
 *          - map.delete(key): removes the element (the key/value pair) by the key.  
 *          - map.clear(): removes everything from the map.
 *          - map.size: returns the current element count.
 * 
 */

// for instance : 


let map = new Map();

map.set('1', 'string1');    // a string key 
map.set(1, 'number1');      // a numeric key
map.set(true, "Boolean1");  // a Boolean key

// remember the regular Object, it would convert keys to string 
// Map keeps the type, so these two are different:

console.log(map.get(1));    // number1;
console.log(map.get('1'));  // string1;
console.log(map.size);


map.clear();
console.log(map.size);


// map can also use objects as keys : 

let john = { name: "john" };

let visitCountMap = new Map();

visitCountMap.set(john, 123);

console.log(visitCountMap.get(john));       // like this, I am logging the value of key john which is an object 


let tarokh = { username: "tarokh" };
let nanami = { username: "namami" };


let visitsCountObj = {};    // try to use an object

visitsCountObj[tarokh] = 321;
visitsCountObj[nanami] = 987;

console.log(visitsCountObj);        // wrong


let set = new Set();

set.add(tarokh);
set.add(nanami);
console.log(set.size);
for (let char of set) console.log(char.username);

console.log("-------------------  -------------------");

let nmap = new Map();
nmap.set(1, "tarokh")
    .set(2, "jayson")
    .set(3, "jay");



// For looping over a map, there are three methods : 
/**
 * 
 *      map.keys() => returns an iterable for keys, 
 *      map.values() => returns an iterable for values,
 *      map.entries() => returns an iterable for entries [key, value], it's used by default in for...of
 * 
 */

let receipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50],
]);

for (let vegs of receipeMap.keys()) console.log(vegs);
console.log("-------------------  -------------------");
for (let amount of receipeMap.values()) console.log(amount);
console.log("-------------------  -------------------");
for (let entry of receipeMap) console.log(entry);

receipeMap.forEach((value, key) => {
    console.log(`${key} has the value : ${value}`);
});

let mmap = new Map([
    [1, "MySQL"],
    [2, "Reddis"],
    [3, "RabbitMQ"]
]);
console.log(mmap);
for (let key of mmap.keys()) console.log(mmap.get(key));


// If we have a plain object, and we'd like to create a Map from it, then we can use built-in method
// Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.


let obj = {
    name: "tarokh",
    age: 19
};

let mapObj = new Map(Object.entries(obj));

mapObj.forEach((value, key) => {
    if (value === "tarokh") {
        mapObj.set(key, "Jafar");
        value = mapObj.get("name");
    }
    console.log(`name has the value ${value}`);
});

console.log(mapObj);

let arr = [1, 2, 3, 4, 5, 6, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29];
let newArr = [];

newArr = arr.map((num => num * num));
console.log(newArr);

let words = ['tarokh', 'kayne', 'alaba'];
let upperWords = words.map(words => words.toUpperCase());
console.log(upperWords);



let people = [
    { name: "Jerry", sirname: "bbb" },
    { name: "Tom", sirname: "basdb" },
    { name: "Ken", sirname: "bghjb" }
];

let peopleName = people.map(firstname => firstname.name);
console.log(peopleName);


let nums = [1, 2, 3, 4, 5];
let filterNumbers = nums.map(numbers => numbers * numbers).filter(num => num % 2 === 0);
console.log(filterNumbers);



// We can use Object.fromEntries to get a plain object from Map

let prices = Object.fromEntries([
    ['a', 54],
    ['b', 84],
    ['c', 49]
]);


console.log(prices.a);
console.log(prices.b);
console.log(prices.c);



map = new Map();
map.set('tarokh', 8);
map.set('mohammad', 4);
map.set('Jimmy', 36);
map.set('Sukuna', 19);

obj = Object.fromEntries(map.entries());
console.log(obj);




// A SET IS A SPECIAL TYPE COLLECTION, "set of values" (without keys), where each value may occur only once.

// Its main methods are: 

/**
 * 
 *      new Set([iterable]): creates the set, and if an iterable object is provided (usually an array),
 *      copies values from it into the set.
 * 
 *      set.add(value): adds a value, returns the set itself.
 *      set.delete(value): removes the value, returns true if value existed at the moment of the call, otherwise false.
 *      set.has(value): returns true if the value exists in the set, otherwise false.
 *      set.clear(): removes everything from the set.
 *      set.size: The elements count.
 * 
 */

// repeated calls of set.add() with the same value does nothing , that is why each value appears only once in the set.


let mset = new Set();

let daizy = { name: "daizy" };
let jay = { name: "jay" };
let pete = { name: "pete" };

mset.add(daizy);
mset.add(jay);
mset.add(pete);
mset.add(jay);
mset.add(daizy);


console.log(mset.size);

let newMap = new Map();
let i = 0;

// for (let user of mset) console.log(user.name);
mset.forEach((user) => {
    let userName = user.name.toUpperCase();
    newMap.set(i, userName);
    i++;
});

const kodan = mset.values()

// dhsfkjdshfjds.forEach((item, index) => { console.log(`item: ${item}`); console.log(`index: ${index}`); });
