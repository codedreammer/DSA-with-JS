let nums = [1,12,-5,-6,50,3];
let k = 4;
let max_sum = 0;
let window_sum = 0;
let answer = 0;

function SlidingWin(nums, k) {
    for (let i = 0; i < k; i++) {
    window_sum += nums[i];
        }
    
    for (let i = k; i < nums.length; i++) {
        let enteringElement = nums[i];
        let leavingElement = nums[i - k];

    window_sum = window_sum - leavingElement + enteringElement;
    max_sum = Math.max(max_sum, window_sum);
    }

    for (let i = k; i < nums.length; i++) {
        answer = max_sum/k
    }

    return answer;
}

console.log(SlidingWin(nums,k));
