// undefined is a datatype 
// Null is an object because of an old JavaScript bug.


// JavaScript primitive data types
const userName = "Akshay"; // string
const age = 21; // number
const isLoggedIn = true; // boolean
let userState; // undefined
const emptyValue = null; // null
const uniqueId = Symbol("id"); // symbol
const bigNumber = 12345678901234567890n; // bigint

console.log("String:", userName, "-", typeof userName);
console.log("Number:", age, "-", typeof age);
console.log("Boolean:", isLoggedIn, "-", typeof isLoggedIn);
console.log("Undefined:", userState, "-", typeof userState);
console.log("Null:", emptyValue, "-", typeof emptyValue);
console.log("Symbol:", uniqueId, "-", typeof uniqueId);
console.log("BigInt:", bigNumber, "-", typeof bigNumber);

//Non-primitive (array,object,function) example
const student = {
  name: "Akshay",
  course: "JavaScript",
};

console.log("Object:", student, "-", typeof student);