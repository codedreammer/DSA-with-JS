// function

/*
function addtwonumber(n1,n2) {
    console.log(n1+n2);
}
addtwonumber(2,3); // 5
addtwonumber("2",3); // 23 because js think it is as a string
*/

// printing output by checking the datatype of the number 
/*
function addtwonumber(n1,n2){
    if (typeof n1 === "number" && typeof n2 === "number") {
        console.log(n1+n2);
    }else {
        console.log("One or both inputs are not numbers");
}
}

addtwonumber("4", 4);
addtwonumber(4,4)
*/

// use of return in function

/*
function add(n1,n2) {
    return n1 + n2;
}
let result = add(3,5)
console.log("result", result);

*/

/*
function login(username) {
    if (username === undefined ) {
        console.log("Please enter a Username");
        return
    }
    return `${username} just login `
}
console.log(login());
// console.log(login("aksahy"));
*/

/*
function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 500));
*/

// function access object 
/*
const user = {
    username: "akshay",
    price: 200
}

function handle(user) {
    console.log(`Username is ${user.username} and price is ${user.price}`);
}

handle(user);
*/

let arr = [ 200, 300, 400, 600]

function arrays(getArray) {
    return getArray[1]
}

// console.log(arrays(arr));
console.log(arrays([200, 400, 500, 600]));