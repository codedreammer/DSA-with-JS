// first bad version (LeetCode 278)

let n = 10;
let bad = 4; // change this to test different first-bad versions

// Mock API for local testing
function isBadVersion(version) {
    return version >= bad;
}

var solution = function(isBadVersion) {
    return function(n) {
        let start = 1;
        let end = n;
        while (start < end) {
            let mid = start + Math.floor((end - start) / 2);
            if (isBadVersion(mid)) {
                end = mid; // mid might be the first bad
            } else {
                start = mid + 1;
            }
        }
        return start; // start === end is the first bad version
    };
};

const firstBad = solution(isBadVersion);
console.log(firstBad(n));
