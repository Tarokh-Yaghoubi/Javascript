
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
console.log(str.at(0));
console.log(str[str.length - 1]);
console.log(str.at(-1));

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

