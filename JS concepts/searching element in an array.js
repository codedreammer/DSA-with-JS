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

/*
let data = [5,5,5,5,5];
let target = 5;
let count = 0;

for (let i = 0; i < data.length; i++) {
    if (data[i] === target) {
        count++;
    }
    
}
console.log(count);
*/
// count last element of an arrys 
/*
let data = [10,20,30,20,50];
let target = 20;
let index = null;

for (let i = data.length-1; i >= 0; i--) {
    if (data[i] === target) {
        index = i;
        break;
    }
}

console.log(index);
// short method
// console.log(data.lastIndexOf(target));

// find the first number greater then 50 

/*
let data = [10,20,45,55,70];
let index = null;

for (let i = 0; i < data.length; i++) {
    if (data[i] > 50) {
        index = data[i];
        break;
    }
}
console.log(index);
*/

// finding two diff number from an array
/*
let arr = [10, 20, 30, 40, 55, 60, 65, 70];
let firstOver50 = null;
let firstOver60 = null;

for (let i = 0; i < arr.length; i++) {
  let value = arr[i];

  if (value > 50 && firstOver50 === null) {
    firstOver50 = value;
  }

  if (value > 60 && firstOver60 === null) {
    firstOver60 = value;
  }

  if (firstOver50 !== null && firstOver60 !== null) {
    break;
  }
}

console.log(firstOver50);
console.log(firstOver60);
*/

// find the first even number 

/*
let data = [11,13,15,18,21];
let index = null;

for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
        index = data[i]
    }
}
console.log(index);
*/

// find the odd number from an arry

/*
let data = [2,4,6,9,10];
let index = null;

for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 !== 0) {
        index = data[i];
    }
}
console.log(index);
*/

// 1295. Find Numbers with Even Number of Digits

/*
    let nums = [12, 345, 2, 6, 7896];
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
    let digits = String(nums[i]).length;
    if (digits % 2 === 0) {
        count++;
    }
    }

    console.log(count);
*/
// Find number with odd number of digits 

    let nums = [12, 345, 2, 6, 7896];
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
    let digits = String(nums[i]).length;
    if (digits % 2 !== 0) {
        count++;
    }
    }

    console.log(count);
