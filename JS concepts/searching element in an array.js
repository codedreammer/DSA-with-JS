// searching the element from an array
/*
let data = [20, 40, 60, 5, 10, 70];
let item = 5;
let index = [];
for (let i = 0; i < data.length; i++) {
    if (data[i] === item) {
        index = i;
    }

}
console.log(index);
*/

/*
let data = [10,20,70,40];
let target = 70;
let index = -1;

for (let i = 0; i < data.length; i++) {
    if (data[i] === target) {
        index = i;
        break;
    }
}
if (index === -1) {
    console.log("not found");
}
else{
    console.log(`found at index: ${index}`);
}
*/

// searching element from an array if 2 same elements are present

/*
let data = [20, 5, 40, 5, 60, 10, 5, 60];
let item = 5;
let index = [];

for (let i = 0; i < data.length; i++) {
    if (data[i] === item) {
        index.push(i);
    }
}
console.log(index);
*/

// Find whether 30 exists in the array.
/*
let data = [10,20,30,40,50];
let target = 30;
let index = [];

for (let i = 0; i < data.length; i++) {
    if (data[i] === target) {
        index = i;
    }
}
console.log(`found at: ${index}`);
*/

// counting the occurrences

/*
let data = [10,20,10,30,10];
let target = 10;
let count = 0;

for (let i = 0; i < data.length; i++) {
    if (data[i] === target) {
        count++;
    }
}
console.log(count);
*/

let data = [5,5,5,5,5];
let target = 5;
let count = 0;

for (let i = 0; i < data.length; i++) {
    if (data[i] === target) {
        count++;
    }
    
}
console.log(count);
