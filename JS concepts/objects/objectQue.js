// How many times does each number appear?

/*
let arr = [10,20,10,30,20];

let freq = {};

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (freq[num]) {
        freq[num]++;
    }else{
        freq[num] = 1;
    }
}
    */
//console.log(freq);


// simple modern version

/*
let arr = [10,20,10,30,20];

let freq = {};

for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
}

console.log(freq);
*/

// Check if an object exists

    /*
    const fruits = {
    apple: "5",
    mango: "4"
};
let key = "apple";
let key2 = "mango"

if (fruits['mango']) {
    console.log(`exists ${key2}: ${fruits[key2]}`);
} else if (fruits['apple']) {
    console.log(`exists ${key}: ${fruits[key]}`);
    
}
    */

// character frequency 

/*
let str = "banana";

let freq = {};

for (let i = 0; i < str.length; i++) {
    let item = str[i];
    
    if (freq[item]) {
        freq[item]++;
    }else{
        freq[item] = 1;
    }
}
console.log(freq);
*/

let arr = "akshay";

let freq = {};

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (freq[num]) {
        freq[num]++;
    }else{
        freq[num] = 1;
    }
}
console.log(freq);
