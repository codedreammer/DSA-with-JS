// 283. Move Zeroes
// THIS IS A TWO POINTER QUESTION I WHICH WE MOVE TWO POINTS IN SAME DIRECTION 

let nums = [0,1,0,3,12]

function movezero(nums) {
    let s= 0
    let f= 0
    while (f < nums.length) {
        if (nums[f] !== 0) {
            [nums[s],nums[f]] = [nums[f],nums[s]]
            s++
        }
        else{
        f++
        }
    }
    return nums;
}
console.log(movezero(nums));
