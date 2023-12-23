 /**
  * 
  *     Objects can also have methods
  *     Methods are actions that can be performed on objects 
  *     Methods are stored in properties as function definitions. 
  * 
  */

 const person = {
    firstName: "Tarokh",
    lastName: "Yaghoubi",
    age: 19,
    eyeColor: "gold",
    fullname: function() {
        console.log(this);
        return this.firstName + " " + this.lastName;
    }
 };

 person.fullname();     // show what is 'this' pointing to

 /**
  * 
  *      A method is a function stored as a property
  * 
  */


 const person2 = {
    firstName: "John",
    lastName: "Smith",
    age: 32,
    eyeColor: "green",
    fullname: function() {
        return this.firstName + " " + this.lastName;
    }
 }

 /**
  * 
  *     In the example above, 'this' is pointing to the person object
  *     this.firstName means the firstName property of person
  *     this.lastName means the lastName property of person
  * 
  */
 /**
  * 
  *     In JS, the 'this' keyword refers to an object
  *     Which object depends on how this is being invoked (used or called)
  *     The 'this' keyword refers to different objects depending on how it is used:
  * 
  */

 /**
  * 
  *     In an object model, this refers to the object.
  *     Alone, this refers to the global object.
  *     In a function, this refers to the global object.
  *     In a function, in strict mode, this is undefined.
  *     In an event, this refers to the element that received the event.
  *     Methods like call(), apply(), and bind() can refer this to any object.
  * 
  */

 // this is not a variable, It is a keyword. You cannot change the value of this.
 // In a function definition, this refers to the 'owner' of the function
 // In the example above, this is the person object that "owns" the fullName function
 // In other words, this.firstName means the firstname property of this object

 let fullname = person2.fullname();

 const cars = ["toyota", "Mercedes", "BMW"];
 cars[0] = "Jafar";
 cars.push("lexux");
 console.log(cars); 


const boys = {
    firstName: "Tony",
    lastName: "Ferguson",
    height: 155,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

let hanaFullname = boys.fullName();
console.log("the full name of the girl is :", hanaFullname);
console.log(boys.fullName);
jesus = new String();
console.log(typeof jesus);

[1, 2, 3].forEach(console.log);

