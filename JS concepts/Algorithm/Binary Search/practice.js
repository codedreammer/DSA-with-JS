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

// pattern 1

/*
nums = [10,20,30,40]
target = 5

function find(nums, target) {
    let start = 0
    let end = nums.length -1

    while (start <= end) {
        let mid = Math.floor((start + end)/2)

        if (nums[mid] === target) {
            return mid
        }
        else if (target < nums[mid]) {
            end = mid -1;
        }
        else{
            start = mid + 1
        }
    }
    return start;
}
console.log(find(nums, target));
*/

// pattern 2 - Largest integer whose square <= x (LeetCode 69)

/*
x = 15

function find(x) {
    let start = 0
    let end = x

    while (start <= end) {
        let mid = start + Math.floor((start + end)/2)
        let result = mid * mid
        
        if(result === x){
            return mid;
        }
        else if (result < x) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return end;
}

console.log(find(x));
*/

// You have 100 chocolates.Each student must get k chocolates.There are 15 students.

let chocolates = 100;
let students = 15;

function findLargestK(chocolates, students) {
    let start = 0;
    let end = chocolates;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        let totalNeeded = mid * students;

        if (totalNeeded <= chocolates) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return end;
}

console.log(findLargestK(chocolates, students));