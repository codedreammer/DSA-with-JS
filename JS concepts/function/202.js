// 202. Happy Number

//let n = 2;
let n = 19;
function isHappy(n) {
    const seen = new Set();

    while (n !== 1) {

        if (seen.has(n)) {
            return false;
        }

        seen.add(n);

        let sum = 0;

        while (n > 0) {
            let digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);
        }

        n = sum;
    }

    return true;
}

console.log(isHappy(n));