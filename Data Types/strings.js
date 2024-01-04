
// STRINGS IN JS


// in JS the textual data is stored in strings, there is not seperate data type for a single character.
// The internal format for strings is always UTF-16, it is not tied to the page encoding.

console.log(`Guests:
    * Tarokh
    * Pete
    * Mary`);
// this is the advantage of backtiks, {multiple-line-quote}


let name = "tarokh\n";
console.log(name.length);
// \n is a single special character, so indeed it will add 1 to the sting length 


console.log("---------------  ---------------");

let str = "tarokh";
console.log(str[0]);
// console.log(str.at(0));
console.log(str[str.length - 1]);
// console.log(str.at(-1));

console.log("---------------  ---------------");

for (let char of str) {
    console.log(char);
    if (char == "r") break;
}

console.log(str[0]);

let inter = "Interface"; // interface 
inter[0] = inter[0].toLowerCase();
console.log(inter);

let x = [];
for (let char of inter) {
    x.push(char);
}
x[0] = x[0].toLowerCase();
console.log(`this is x : ${x}`);
let final = x.join("");
console.log(final);


console.log(final.indexOf("f"));

console.log("---------------  ---------------");

let nstr = "As sly as a fox, as strong as an ox";

let target = 'as';      // let's look for it

let pos = 0;

while (true) {
    let foundpos = nstr.indexOf(target, pos);
    if (foundpos == -1) break;

    console.log(`Found at : ${foundpos}`);
    pos = foundpos + 1;
}


let testString = "This string is for a test in JS";

console.log(testString.includes("string"));
console.log(testString.includes("is", 1));
console.log(testString.startsWith("This"));
console.log(testString.endsWith("JS"));


console.log(testString.slice(0, 4));
console.log(testString.substring(0, 4));


console.log(testString.codePointAt(0));

let saveStr = '';
let string = "tarokh is a good C programmer";
for (let char in string) saveStr += ' ' + string.codePointAt(char);
console.log(saveStr);

console.log("tarokh".localeCompare("tarokH"));

let username = "tarokh";

if (username.localeCompare("tarokh") === 0) console.log("I am going to let you in :)");
else console.log("username is not correct");