// 374 

let n = 10

function guessNumber(n) {
    let start = 1;
    let end = n;

    while (start <= end) {
        let mid = start + Math.floor((end - start)/2)
        let result = guess(mid); // You call a pre-defined API int guess(int num), which returns three possible results:
        if (result === 0) {
            return mid;
        }
        else if (result === -1) {
            end = mid -1;
        }
        else start = mid + 1;
    }
    return -1;
}
console.log(guessNumber(n));
