let arr = [2,1,5,1,3,2]
let k = 3
let window_sum = 0
let max_sum = 0

function maxSubarraySum(arr, k) {
for (let i = 0; i < k; i++) {
    window_sum += arr[i];
}

for (let i = k; i < arr.length; i++) {
        let enteringElement = arr[i];
        let leavingElement = arr[i - k];

    window_sum = window_sum - leavingElement + enteringElement;
    max_sum = Math.max(max_sum, window_sum);
}

return max_sum;

}

console.log(maxSubarraySum(arr, k));
