
// Initial Commit


let arr = [1, 2, 3];
// delete arr[2];
console.log(arr.length);

arr.splice(2, 2);
console.log(arr);

let newArr = ["tarokh", "mohammad", "James", "Sara", "parvin"];
newArr.splice(1, 2);
console.log(newArr);
newArr.splice(3, 0, "are good", "people")

let test = ['t', 'e', 's', 't'];
console.log(test.slice(1, 4));
console.log(test.slice(-3));        // same result 

let concatArr = [1, 2, 3];
console.log(concatArr.concat([4, 5, 6], [7, 8, 9]));

let arrFor = ["tarokh", "jacob", "mohammad"];
arrFor.forEach((item, position) => { console.log(`${item} is in position : ${position}`); })

for (let char of arrFor) if (char === "tarokh") { console.log("found tarokh"); break; }

if (arrFor.includes("jacob")) {
    console.log("Included Jacob");
}

// if the item does not exist in the array, it will return -1

console.log(arrFor.indexOf("tarokh"));


let users = [
    { id: 1, name: "John" },
    { id: 2, name: "tarokh" },
    { id: 3, name: "Mary" }
];


let user = users.find(item => item.id == 1);

console.log(user.name);

let myUsers = [
    { id: 0, username: "tarokh" },
    { id: 1, username: "mohammad" },
    { id: 2, username: "james" },
    { id: 3, username: "tarokh" }
];

console.log(myUsers.findIndex(myUsers => myUsers.username == "tarokh"));
console.log(myUsers.findLastIndex(myUsers => myUsers.username == "tarokh"));


myUsers.forEach(function (item, index) {
    console.log(`username is : ${item.username}, index is : ${index}`);
});


myUsers.forEach((item, index) => {      // the same thing as above using arrow style 
    console.log(`the username is : ${item.username}, id is : ${item.id}, index is : ${index}`);
});




let result = myUsers.find(item => item.username == "tarokh");
console.log(result);
console.log(typeof result);
console.log(result.username);


result = myUsers.find(item => item.username == "tarokh" && item.id == 3);
console.log(result);
console.log(result.username, result.id);



let someUsers = myUsers.filter(item => item.id < 3);
console.log(someUsers);

let otherUsers = myUsers.filter(id => id.id == 3 && id.username == "tarokh");
console.log(typeof otherUsers);



// Transform an Array 

// map 

// The arr.map method is one of the most useful and often used.

// it calls the function for each element of the array and returns the array of results

let mapResult = ["tarokh", "Jordy", "Elizabeth"].map(item => item.length);
console.log(mapResult);


let unSortedArr = [5, 4, 6, 1, 15, 3, 7, 9];
unSortedArr.sort();
console.log(unSortedArr);


function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}


unSortedArr.sort(compareNumeric);
console.log(unSortedArr);


unSortedArr.reverse();
console.log(unSortedArr);



let names = 'tarokh, mohammad, jimmy, sara, rozita';
let namesArr = names.split(',', 2);
for (let name in namesArr) console.log(`hello to : ${namesArr[name]}`);
// or
for (let name of namesArr) console.log(`hello to : ${name}`);


let username = "tarokh";
let str = username.split('');
console.log(str);


let joinArr = ['Bilbo', 'Gandalf', 'Dumbledor'];
let newStr = joinArr.join(';');
console.log(newStr);


let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age <= this.maxAge;
    }
};

let armyUsers = [
    { age: 16 },
    { age: 20 },
    { age: 23 },
    { age: 25 },
];

let soldiers = users.filter(army.canJoin, army);
