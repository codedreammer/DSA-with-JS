// we have to print running sum 

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].


let num = [1,2,3,4,5];
let toatl = 0;
let runningSum = [];

for (let i = 0; i < num.length; i++) {
    toatl  += num[i]
    runningSum.push(toatl);
}
console.log(runningSum);


let num = [1,2,3,5,7]
let num2 = [4,4,6,8,10]
let num3 = [];
let N1 = 0, N2 = 0, N3 = 0;
let total = 0;
let runningSum = [];

while (N1<num.length && N2<num2.length) {
    if (num[N1] < num2[N2]) {
        num3[N3] = num[N1];
        N1++;
    }else{
        num3[N3] = num2[N2];
        N2++;
    }
    N3++;
}

while (N2<num2.length) {
    num3[N3] = num2[N2];
    N2++;
    N3++;
}
console.log(num3);

for (let i = 0; i < num3.length; i++) {
        total += num3[i];
    runningSum.push(total);
}
console.log(runningSum);
