
// The most used data structures used in JS are Object and Array.

// - Objects allow us to create a single entity that stores data items by key.
// - Arrays allow us to gather data items into an ordered list.

// Although when we pass Objects or Arrays to functions, the function may need individual parts of that array or object, not the whole.

// Destructuring assignment is a special syntax that allows us to 'unpack' arrays or objects into a bunch of variables, as sometimes that is more convenient

let arr = ["John", "smith"];

let [firstname, lastname] = arr;

console.log(`${firstname} ${lastname}`);

let fullname = "Tarokh Yaghoubi";
let [firstName, lastName] = fullname.split(' ');
console.log(`${firstName} ${lastName}`);

let [name, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];  // that second comma is skipping the second element of the array
console.log(`${name} ${title}`);

let [a, b, c] = "abc";  // ["a", "b", "c"]

let [one, two, three] = new Set([1, 2, 3]);
console.log(`${one} ${two} ${three}`);


let user = {};

let userAndJob = "Tarokh Yaghoubi, C Programmer";
[user.name, user.job] = userAndJob.split(", ");
console.log(`${user.name} is a ${user.job}`);

let newUser = {
    name: "tarokh",
    age: 19
};

for (let [key, value] of Object.entries(newUser)) {
    console.log(`${key} has the value ${value}`);
}

// for MAPS it is even easier as maps are iterable.

let map = new Map();
map.set("username", "tarokh");
map.set("password", "tarokhisagoodman534321");

for (let [key, value] of map) {
    console.log(`${key} ${value}`);
}

// swap variables trick

let guest = "Jane";
let admin = "Pete";

[guest, admin] = [admin, guest];    // we can also do this in python
console.log(`${guest} ${admin}`);


// The rest '...'

// Usually, if the array is longer than the list at the left, the "extra" items are ommited.
// for example, here only two items are taken, and the rest is just ignored.

let [name1, name2] = ["Jesus", "Tarokh", "Babak", "Sara", "Mohammad"];
console.log(`${name1} ${name2}`);

// If we would also like to gather all that follows - we can add one more parameter that gets "the rest" using three dots
// "..."

let [name4, name5, ...rest] = ["tarokh", "jimmy", "muhammad", "james", "kathrine"];
console.log(name4);
console.log(name5);
console.log(rest.length);