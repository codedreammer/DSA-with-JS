//387. First Unique Character in a String

let s = "leetcode"

function FirstUnique(s) {
    let freq = {}
    for (let i = 0; i < s.length; i++) {
        let num = s[i]
        if (freq[num]) {
            freq[num]++
        }else{
            freq[num] = 1
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]] === 1) {
            return i
        }
    }

    return -1
}
console.log(FirstUnique(s));

