// 125. Valid Palindrome

// what is palindrom: A palindrome reads the same from both ends.

let s = "race a car"

function palindrom(s) {
    let left = 0;
    let right = s.length-1;
    while (left < right) {
        if (!/[a-z0-9]/i.test(s[left])) {
            left++
            continue
        }
        else if (!/[a-z0-9]/i.test(s[right])) {
            right--
            continue
        }
        else {
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false
        }
            left++
            right--
    }
}
    return true
    }
    
console.log(palindrom(s));
