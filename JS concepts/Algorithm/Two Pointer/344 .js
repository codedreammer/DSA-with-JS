// Reverse string 

let s = ["h","e","l","l","o"]

function Reversestring(s) {
    let left = 0
    let right = s.length - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s
}
console.log(Reversestring(s));

// let Q = ["a","k","s","y"]

// function Reverse(Q) {
    
//     let left = 0
//     let right = Q.length-1;

//     while (left < right) {
//         [Q[left], Q[right]] = [Q[right], Q[left]];
//         left++
//         right--
//     }
//     return Q
// }
// console.log(Reverse(Q));
