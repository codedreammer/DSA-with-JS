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
//           Or

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

// Insert Element in Array using splice 

/*
let arr = [1,2,3,4,5,6];
arr.splice(2,3,10);
console.log(arr);
*/

