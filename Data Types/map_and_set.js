
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