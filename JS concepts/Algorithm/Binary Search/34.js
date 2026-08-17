// 34. Find First and Last Position of Element in Sorted Array

let arr = [10,20,30,40,50,50,50,60,70]
let target = 50

function firstOccurrence(arr, target) {
    let start = 0
    let end = arr.length - 1
    let answer = -1

    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        if(arr[mid] === target){
            answer = mid;
            end = mid - 1;
        }
        else if (target < arr[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return answer;
}

function lastOccurrence(arr, target) {
    let start = 0
    let end = arr.length - 1
    let answer = -1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] === target) {
            answer = mid
            start = mid + 1
        }
        else if (target < arr[mid]) {
            end = mid - 1
        }
        else {
            start = mid + 1
        }
    }

    return answer
}

function countOccurrence(arr, target) {
    let first = firstOccurrence(arr,target)
    let last = lastOccurrence(arr, target)

    if (first === -1) {
        return 0
    }
    return last - first + 1
}

console.log([
    firstOccurrence(arr, target),
    lastOccurrence(arr, target)
])

console.log(countOccurrence(arr, target))