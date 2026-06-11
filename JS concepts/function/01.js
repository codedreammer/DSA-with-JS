// function

/*
function addtwonumber(n1,n2) {
    console.log(n1+n2);
}
addtwonumber(2,3); // 5
addtwonumber("2",3); // 23 because js think it is as a string
*/
// add two number using return
/*
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));
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

/*
let arr = [ 200, 300, 400, 600]

function arrays(getArray) {
    return getArray[1]
}

// console.log(arrays(arr));
console.log(arrays([200, 400, 500, 600]));
*/

/*
let nums = [1,2,3,1];

function duplicate(nums) {
    let seen = {};

    for (let num of nums) {
        if (seen[num]) {
            return true;
        }
        seen[num] = 1;
    }
    return false;
}
console.log(duplicate(nums));
*/

//  Find Element That Appears Once

/*
let arr = [1,1,2,2,3]

function findsingle(arr) {
    let freq = {};

    //check duplicate
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    // check single number
    for (let num of arr) {
        if (freq[num] === 1) {
            return num;
        }
    }
}

console.log(findsingle(arr));
*/

// Most Frequent Number

/*
let arr = [1,2,2,3,3,3];

function Frequentnum(arr) {
    let freq = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (freq[num]) {
            freq[num]++
        }else{
            freq[num] = 1;
        }
    }
    // find most frequent
    let maxCount = 0;
    let mostFrequent = null;
    for (let key in freq) {
        if (freq[key] > maxCount) {
            maxCount = freq[key];
            mostFrequent = Number(key);
        }
    }

    return { freq, mostFrequent };
}
console.log(Frequentnum(arr));
*/

// First Non-Repeating Character

let arr = "swiss";

function nonrepeating(arr) {
    let freq = {};

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (freq[num]) {
        freq[num]++
    }else{
        freq[num] = 1;
    }
}
    for (let i = 0; i < arr.length; i++) {
        if (freq[arr[i]] === 1) {
            return arr[i];
        }
    }
}

console.log(nonrepeating(arr));
