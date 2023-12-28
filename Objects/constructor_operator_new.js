
/**
 * 
 *      The regular {...} syntax allows us to create one object. But often we need to create 
 *      many similar objects, like multiple users or menu items and so on.
 *      
 *      That can be done using constructor functions and the "new" operator. 
 * 
 */

/**
 * 
 *      Constructor functions technically are regular functions. There are two conventions though:
 * 
 *      1   -   They are named with capital letter first.
 *      2   -   They should be executed only with "new" operator
 * 
 *      For Instance:
 */


function User(name, isAdmin) {
    this.name = name;
    this.isAdmin = isAdmin;
}

let username = "tarokh";
let username0 = "Mohammed";
let user = new User(username, true);
let otherUser = new User(username0, false);

console.log(user.name);
console.log(user.isAdmin);

console.log(otherUser.name);
console.log(otherUser.isAdmin);


/**
 * 
 *      When a function is executed using new, it does the following steps:
 *
 *      1   -   A new empty object is created and assigned to 'this'.
 *      2   -   The function body executes. Usually it modifies 'this', adds new properties to it.
 *      3   -   The value of 'this' is returned
 * 
 */

// In other words, new User(...) does something like:

function Admin(name, isAdmin) {
    // this = {};   (implicitly)

    // add properties to "this"

    this.firstName = name;
    this.isAdmin = isAdmin;

    // return "this"; (implicitly)
}

// So, let user = new User(username) gives the same result as : 

let myUser = {
    name: "tarokh",
    isAdmin: false
};

/**
 * 
 *      Now, if we want to create new users, we can do new User(username0), new User(username1) and ...
 *      Much shorter than using literals everytime and also easy to read.
 *      
 *      That is the main purpose of constructors--to implement reuseable object creation code.
 * 
 *      Let's note once again--technically, any function (except arrow functions, as they do not have "this") can
 *      be used as a constructor. It can be run with "new", and it will execute the algorithm above.
 *      The "Capital Letter First" is a common agreement, to make it clear that a function is to be run with "new".
 * 
 */



// If we have many lines of code all about creation of a single complex object, we can wrap them in an immediately called constructor function 
// , like this :

let mUser = new function () {        // create a function and immediately call it with new 
    this.username = "tarokh";
    this.password = "0123456321";
    this.isAdmin = true;


    // ...Other code for user creation
    // maybe complex logic and statements
    // local variables etc...

};

// This constructor can't be called again, because it is not saved anywhere, just created and called,
// So this trick aims to encapsulate the code that constructs the single object, without future reuse.


/* CONSTRUCTOR MODE TEST: new.target  */

// The syntax from this section is rarely used, skip it unless you wanna know everything ...

/**
 * 
 *      Inside a function, we can check whether it was called with new or without it, using a special new.target property.
 *      It is undefined for regular calls and equals the function if called with new. 
 * 
 */


/**
 *      That can be used inside the function to know whether it was called with 'new', 'in constructor mode', or without it,
 *      "in regular mode".
 * 
 *      We can also make both 'new'  and regular calls to do the same, like this
 */
function People(name, address) {

    if (!new.target) return new People(name, address);

    this.name = name;
    this.address = address;
    this.PlaySoccer = function (player) {
        this.soccerPlayer = player;
        console.log(`The player is called ${this.soccerPlayer}`);
    }
}

let usersname = "Tarokh";
let otherUsersName = "Jake The Brogrammer";
let usersAddress = "Tehran";
let newPlayer = People(usersname, usersAddress);        // this will not work, it is not constructed using new 
let newPlayerWithNew = new People(otherUsersName, usersAddress);

console.log(newPlayerWithNew.name);
newPlayerWithNew.PlaySoccer(otherUsersName);

console.log("---------------------------");

console.log(newPlayer.name);
newPlayer.PlaySoccer(usersname);

console.log("---------------------------");


function FullAdmin(name, sirname, address) {
    if (!new.target) {
        return new FullAdmin(name, sirname, address);
    }
    else if ((new.target)) {
        this.name = name;
        this.sirname = sirname;
        this.address = address;
        this.Login = function (username, password) {
            this.username = username;
            this.password = password;
            let message = `User Logged In; username: ${this.username}, password: ${this.password}`;
            console.log(message);
        }
        this.LogOff = function (username) {
            this.username = username;
            let message = `User LoggedOff; username:${this.username}`;
            console.log(message);
        }
        this.Greet = function (username, text) {
            this.username = username;
            this.text = text;
            let greetMsg = `${this.username}: ${this.text}`;
            console.log(greetMsg);
        }
    }
}

let adminName = "Tarokh";
let adminSirName = "Yaghoubi";
let adminAddress = "Tehran";

let newFullAdmin = new FullAdmin(adminName, adminSirName, adminAddress);
let newFullAdmin1 = FullAdmin("Harry", "Potter", "Hogwarts");

console.log("-------------------------");

newFullAdmin.Login(adminName, "01254136");
newFullAdmin1.Login("Harry", "48659325");

console.log("-------------------------");

newFullAdmin.Greet(adminName, "How are you all ?");
newFullAdmin1.Greet("Harry", "The owls are strangely flying in brawd day-light");

console.log("-------------------------");

newFullAdmin.LogOff(adminName);
newFullAdmin1.LogOff("Harry");


function System(hard=undefined, ram=undefined, cpu=undefined, gpu=undefined) {

    if (!new.target) return new System(hard, ram, cpu, gpu);
    else if (new.target) {

        this.hard = String(hard);
        this.ram = String(ram);
        this.cpu = String(cpu);
        this.gpu = String(gpu);

       this.ShowBios = function() {

             console.log("lack of system resources");
        }

        this.PowerOn = function(checkRam=false, checkCpu=false, checkHard=false) {
            
            let that = this;
            
            this.checkHard = checkHard;
            this.checkRam = checkRam;
            this.checkCpu = checkCpu;

            if ((this.checkCpu || this.checkHard || this.checkRam) === true) {

                if (that.hard !== "undefined" && that.ram !== "undefined" && that.cpu !== "undefined") {
                    this.checkRam = this.checkCpu = this.checkHard = true;
                    console.log(`RAM model: ${that.ram}, CPU model: ${that.cpu}, HARD model: ${that.hard}`);
                } else {
                    that.ShowBios();
                }
            } else {
                console.log("hard and ram and cpu are all false and are not necessary for check");
            }

        }
    }
}

console.log("-------------------------");

let tarokhSystem = System("1TR M2", "AXTROM 32 GIG", "Ryzen 7 5700G", "4090 GigaByte");
tarokhSystem.PowerOn(false, false, true);

console.log("-------------------------");



/**
 * 
 *      This approach 'new.target' is sometimes used in libraries to make the syntax more flexible. 
 *      So that people may call the function with or without "new", and it still works.
 * 
 *      probably not a good thing to use everywhere though, because omitting 'new' makes it a bit less
 *      obvious what is going on! With 'new' we all know that the new object is being created.
 * 
 */

//      RETURN FROM CONSTRUCTOR

/**
 * 
 *      Usually, Constructors do not have a return statement. Their task is to write every necessary thing into 'this',
 *      and it will automatically become the result.
 *
 *      But if there is a return statement, then the rule is simple:
 *          - if "return" is called with an object, then the object is returned instead of "this".
 *          - if "return" is called with a primitive , then it is ignored.
 * 
 *      In other words, return with an object returns that object, in all other cases "this" is returned.
 *      For instance, here "return" overrides "this" by returning and object:  
 * 
 */

function BigUser() {

    this.name = "John";

    return { name: "Godzilla " };

}

console.log(new BigUser().name);

function SmallUser() {
    this.name = "Harry";

    return;
}

console.log(new SmallUser().name);


// After using new we can ommit the () after the constructor name 
// but this is not a good practice 

