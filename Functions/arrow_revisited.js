
// Arrow functions are not just a shorthand for writing small stuff. They have some very specific and useful features.

// JS is full of situations where we need to write a small function that is executed somewhere else.

// For instance :

// - arr.forEach(func) - func is executed by forEach for every array ITEM.
// - setTimeout(func) - func is executed by the built-in scheduler.
// - ...there are more

let group = {
    title: "Our group",
    student: ["tarokh", "jacob", "mosh"],

    showlist() {
        this.student.forEach(
            studetn => console.log(`${this.title}: ${this.student}`)
        );
    }
};

group.showlist();

let group1 = {
    title: "Our group",
    student: ["Mosh", "Kane", "David"],

    // showList() {
    //     this.student.forEach(function (student) {
    //         console.log(`${this.title}: ${student}`);
    //     });
    // }        // this is not allowed because this is belonged to the function no the object.
};

group.showList();

