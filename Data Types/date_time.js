
// Date is a new built-in Object. 
// It stores the date, time and provides methods for date/time management.


// For instance, we can use it to store creation/modification times, to measure time,
// or just to print out the current date.

let now = new Date();
console.log(now);   // this will print the current date/time 

// new Date(milliseconds) =>‌ create a date object with the time equal to number of milliseconds passed after the Jan 1st 1970   UTC+0

let jan01_1970 = new Date(0);
console.log(jan01_1970);    // 0 means 01.01.1970

let jan02_1970 = new Date(24 * 3600 * 1000);
console.log(jan02_1970);

// timestamp: ‌an integer number representing the number of milliseconds that has passed since the beginning of 1970
// We can always create a date from a timestamp using new Date(timestamp) and convert the existing Date object to 
// a timestamp using the date.getTime()  method.


// dates before 01.01.1970 have negative timestamps 
let dec31_1969 = new Date(-24, 3600, 1000);
console.log(dec31_1969);

let date = new Date("2022-01-08");
console.log(date);


// new Date(year, month, date, hours, minutes, seconds, ms)

let mdate = new Date(2022, 0, 5, 3, 34, 55);
console.log(mdate);


let date2 = mdate.getFullYear();
console.log(date2);

let newDate = new Date();
console.log(newDate.getHours());
console.log(newDate.getUTCHours());
console.log(new Date().getTimezoneOffset());


let today = new Date();


today.setHours(0);
console.log(today);     // still today, but the hour is now zero 

today.setHours(0, 0, 0, 0);
console.log(today);     // still today, now 00:00:00 sharp.


let wrongDate = new Date(2013, 0, 32);       // this date is wrong, Date will autocorrect it itself!!‌it will be 1 Feb 2013
console.log(wrongDate);


let new_date = new Date(2016, 1, 28);
new_date.setDate(new_date.getDate() + 2);
console.log(new_date);
