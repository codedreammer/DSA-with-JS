//1207. Unique Number of Occurrences

let arr = [1,2,2,1,1,3]

function uniqueOccurance(arr) {
    let freq = {}

    for (let num of arr){
        freq[num] = (freq[num] || 0) + 1;
    }

    let seen = new Set();

    for (let key in freq) {
        if (seen.has(freq[key])) {
            return false;
        }
        seen.add(freq[key]);
}
return true;
}
console.log(uniqueOccurance(arr));