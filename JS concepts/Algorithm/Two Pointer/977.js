// Squares of a sorted array

//let nums = [-4,-1,0,3,10];
let nums = [-7,-3,2,3,11]

function sortedSquares(nums) {
    let left = 0
    let right = nums.length-1
    let index = nums.length-1
    let result = new Array(nums.length);
    while(left <= right){
        if(Math.abs(nums[left]) > Math.abs(nums[right])){   //In a sorted array, the largest absolute value is always at one of the ends.
            result[index] = nums[left] * nums[left];
            left++
        }
        else{
            result[index] = nums[right] * nums[right];
            right--
        }   
        index--
    }
    return result;
}

console.log(sortedSquares(nums));

