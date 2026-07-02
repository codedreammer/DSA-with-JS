// search left and right 

const arr = [1, 2, 2, 2, 3, 4];
const target = 4;

// left search

function findFirstOccurrence(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;

    while (start <= end) {
        
        let mid = Math.floor(start + (end - start) / 2);

        if (arr[mid] === target) {
            result = mid;     
            end = mid - 1;  
        } else if (target < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return result; 
}

console.log(findFirstOccurrence(arr, target));

// right 

function findLastOccurrence(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1; 

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (arr[mid] === target) {
            result = mid;     
            start = mid + 1;  
        } else if (target < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return result; 
}

console.log(findLastOccurrence(arr, target));

//first two function

function countOccurance(arr, target) {
    
    let firstIndex = findFirstOccurrence(arr, target);

    if (firstIndex === -1) {
        return 0;
    }
    
    let lastIndex = findLastOccurrence(arr, target);

    return (lastIndex - firstIndex) + 1;
    
}

console.log(countOccurance(arr, target));