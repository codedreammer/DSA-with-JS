// with for loop

/*
let arr = [2,7,11,15];
let target = 9;

function sum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return[i, j];
            }
        }
    }
    return null
}
console.log(sum(arr, target));
*/

// using object 

    let arr = [2, 7, 11, 15];
    let target = 9;

    function twoSum(arr, target) {
    const seen = {};

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];

        if (seen[complement] !== undefined) {
        return [seen[complement], i];
        }

        seen[arr[i]] = i;
    }

    return null;
    }

    console.log(twoSum(arr, target)); // [0, 1]