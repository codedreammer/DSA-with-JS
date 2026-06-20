// 704. Binary Search

let nums = [-1,0,3,5,9,12];
let target = 9;

function search(nums, target) {
    let start = 0;
    let end = nums.length -1;
    while (start <= end) {
        let mid = Math.floor((start + end)/2)
        if(nums[mid] === target){
            return mid;
        }
        else if (target < nums[mid]) {
            end = mid - 1;
        }else {
            start = mid + 1;
        }
    }
    return -1;
}
console.log(search(nums, target));
