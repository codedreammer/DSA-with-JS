/*

let arr = [2,5,8,9,12,18,20,25,67,101,125]
let  index = binarySearch(arr, 0 , arr.length-1 , 20)

if(index == -1)
    console.log("Not found");
else console.log("target found at" + index+ "index");


function binarySearch(arr, first, last, target) {
    while (first<=last) {
        let mid = Math.floor((first+last)/2)
        if (arr[mid] == target)
            return mid
        else if(arr[mid]> target) last = mid-1
        else first = mid+1
    }
    return -1
}
*/

// first binary search 
/*
let arr = [10,20,30,40,50,60,70]
let target = 50

function binarySearch(arr, target){
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        if(arr[mid] === target){
            return mid;
        }
        else if (target < arr[mid]) {
            end = mid - 1;
        }else {
            start = mid + 1;
        }
    }
    return -1;
}
console.log(binarySearch(arr, target));
*/

// 1. Search Target

/*
let arr = [1,2,3,4,5,6,7];
let target = 6

function binarySearch(arr, target) {
        let start = 0;
        let end = arr.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end)/2)
        if(arr[mid] === target){
            return mid;
        }
        else if (target < arr[mid]) {
            end = mid - 1;
        }else {
            start = mid + 1;
        }
    }
    return -1;
}
console.log(binarySearch(arr, target));
*/

// 2. Search Target Not Found
/*
let arr = [1,2,3,4,5,6,7];
let target = 10;

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length -1;
    while (start <= end) {
        let mid = Math.floor((start + end)/2)
        if(arr[mid] === target){
            return mid;
        }
        else if (target < arr[mid]) {
            end = mid - 1;
        }else {
            start = mid + 1;
        }
    }
    return -1;
        }
console.log(binarySearch(arr, target));
*/

// 3. Binary Search on Strings

/*
let arr = ["apple","banana","cat","dog","elephant"];
let target = "dog";

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length -1;
    while (start <= end) {
        let mid = Math.floor((start + end)/2)
        if(arr[mid] === target){
            return mid;
        }
        else if (target < arr[mid]) {
            end = mid - 1;
        }else {
            start = mid + 1;
        }
    }
    return -1;
        }
console.log(binarySearch(arr, target));
*/