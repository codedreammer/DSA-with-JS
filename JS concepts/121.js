let arr = [7,1,5,3,6,4]

function maxProfit(arr) {
    
    let left = new array(arr.length)
    let right = new array(arr.length)

    left[0] = arr[0]
    right[arr.length-1] = arr[arr.length-1]

    for (let i = 1; i < arr.length; i++) {
        left[i] = Math.min(left(i-1),arr[i])
    }
    for (let i = 1; i < arr.length; i++) {
        right[i] = Math.max(right(i-1),arr[i])
    }
}