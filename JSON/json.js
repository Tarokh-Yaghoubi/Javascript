
let user = {
    name: "Tarokh",
    age: 19,

    toString() {
        return `{name: "${this.name}", age: ${this.age}}`;
    }
};

console.log(user);

let student = {
    name: "Tarokh",
    age: 20,
    isAdmine: false,
    courses: ['Python', 'C', 'JavaScript', 'Rust'],
    spouse: null
};

let json = JSON.stringify(student);

console.log(typeof json);
console.log(json);
