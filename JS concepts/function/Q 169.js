// 169. Majority Element

let nums = [3,2,3];

function majorityElement(nums) {
    let freq = {};

    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        if (freq[num]) {
            freq[num]++
        }else{
            freq[num] = 1;
        }
    }
    let maxCount = 0;
    let mostFrequent = null;
    for (let key in freq) {
        if (freq[key] > maxCount) {
            maxCount = freq[key];
            mostFrequent = Number(key);
        }
    }
    return {mostFrequent};
};

console.log(majorityElement(nums));
