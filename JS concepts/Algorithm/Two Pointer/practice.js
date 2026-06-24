// first two pointer question 

arr = [2,3,4,7,11,15]
target = 15

function twosum(arr, target) {
    
    let left = 0;
    let right  = arr.length -1 

    while (left < right) {
        let sum = arr[left] + arr[right]

        if(sum === target){
        return [arr[left], arr[right]];
    }
    if(sum < target){
        left++;
    }else{
        right--;
    }
    }
}
console.log(twosum(arr, target));
