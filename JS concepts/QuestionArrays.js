//Print Array Elements
/*
let myArr = [1,2,3,4];

console.log(myArr.join("\n"));
*/

// Find Sum of Array
/*
let arr = [1,2,3,4];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);

*/
/*
let arr = [10,20,30];
let sum =0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    
}
console.log(sum);
*/

// marging two arrays then it's sum

/*
let arr1 = [1,2,3,4];
let arr2 = [5,6,7]

let mergedArr = arr1.concat(arr2);
let sum = 0;
for (let i = 0; i < mergedArr.length; i++) {
    sum += mergedArr[i];
}
console.log(sum);
*/

//Find Largest Element

/*
let Arr = [4,7,1,9,2];
let LargestArr = Arr[0];
for (let i = 1; i < Arr.length; i++) {
    if (Arr[i] > LargestArr) {
        LargestArr = Arr[i];
    }
}
console.log(LargestArr);
*/
// find the second largest number from an array[ for the second-largest pattern, using:  let LargestArr = -Infinity; let SmallestArr = -Infinity; ]

/*
let Arr = [4,7,1,9,2];
let LargestArr = -Infinity;
let SmallestArr = -Infinity;

for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] > LargestArr) {
        SmallestArr = LargestArr;
        LargestArr = Arr[i];
    }

    else if (Arr[i] > SmallestArr && Arr[i] < LargestArr) {
        SmallestArr = Arr[i];
    }
}
console.log(SmallestArr);

*/

/*
let arr = [10,50,20,70,30];
let largestarr = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestarr) {
        largestarr = arr[i];
    }
    }
    console.log(largestarr);
    */
/*
let Arr = [20,30,40,100,10];
let smallestArr = Arr[0];
for (let i = 1; i < Arr.length; i++) {
    if (Arr[i] < smallestArr) {
        smallestArr = Arr[i];
    }
}
console.log(smallestArr);
*/

//           Or largest using Math

/*
let arr = [5, 2, 9, 1, 7];
let largest = Math.max(...arr);
console.log(largest);
*/

// Find Smallest Element

/*
let arr = [5, 2, 9, 1, 7];
let largest = Math.min(...arr);
console.log(largest);

*/

//     OR

/*
let Arr = [4,7,1,9,2];
let smallestArr = Arr[0];
for (let i = 1; i < Arr.length; i++) {
    if (Arr[i] < smallestArr) {
        smallestArr = Arr[i];
    }
}
console.log(smallestArr);
*/

// Count Even Numbers in Array
/*
let arr = [1,2,3,4,5,6,7];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        count++;
    }
}

console.log(count);
*/

// count occurrence of a number in an array
/*
let data = [20,10,20,30,20];
let target = 20;
let count = 0;

for (let i = 0; i < data.length; i++) {
    if (target === data[i]) { // we use === for comparison 
        count++;
    }
}
console.log(count);
*/

/*
let Arr = [10,11,12,13,14];
let count = 0;

for (let i = 0; i < Arr.length; i++) {
    if (Arr[i]% 2 === 0) {
        count++;
    }
    
}
console.log(count);
*/

// Insert Element in Array (do counting of the array from end)

/*
let arr = [20,30,4,5,7];
let newEl = 70;
let position = 2;

for (let i = arr.length - 1; i >= position; i--) {
    arr[i + 1] = arr[i];
}
arr[position] = newEl;
console.log(arr);
*/
/*
let data = [10,20,30,40];
let newElement = 25;
let position = 2;

for (let i = data.length-1; i >= position; i--) {
    data[i+1] = data[i];
}
data[position] = newElement;
console.log(data);
*/
/*
let data = [10,20,30,40];
data.splice(2,30,90);
console.log(data);
*/

// Insert Element in Array using splice 

/*
let arr = [1,2,3,4,5,6];
arr.splice(2,3,10);
console.log(arr);
*/

// we use 0 when we want to insert without deleting anything

/*
let arr = [1,2,3,4,5,6];
arr.splice(4,0,15);
console.log(arr);
*/

// we use 1 when we want to insert and replace the number anything from insert number
/*
let arr = [1,2,3,4,5,6];
arr.splice(4,1,15);
console.log(arr);
*/


