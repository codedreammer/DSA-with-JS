
//  Find Element That Appears Once

/*
let arr = [1,1,2,2,3]

function findsingle(arr) {
    let freq = {};

    //check duplicate
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    // check single number
    for (let num of arr) {
        if (freq[num] === 1) {
            return num;
        }
    }
}

console.log(findsingle(arr));
*/

// Most Frequent Number

/*
let arr = [1,2,2,3,3,3];

function Frequentnum(arr) {
    let freq = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (freq[num]) {
            freq[num]++
        }else{
            freq[num] = 1;
        }
    }
    // find most frequent
    let maxCount = 0;
    let mostFrequent = null;
    for (let key in freq) {
        if (freq[key] > maxCount) {
            maxCount = freq[key];
            mostFrequent = Number(key);
        }
    }

    return { freq, mostFrequent };
}
console.log(Frequentnum(arr));
*/

// First Non-Repeating Character

/*
let arr = "swiss";

function nonrepeating(arr) {
    let freq = {};

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (freq[num]) {
        freq[num]++
    }else{
        freq[num] = 1;
    }
}
    for (let i = 0; i < arr.length; i++) {
        if (freq[arr[i]] === 1) {
            return arr[i];
        }
    }
}

console.log(nonrepeating(arr));
*/