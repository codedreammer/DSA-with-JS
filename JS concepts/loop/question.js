// Print numbers 1–100

/*
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
    */

// Sum of two numbers

/*
let a = 10;
let b = 20;

const c = a + b;
console.log(`Sum of n number is: ${c}`);
*/

// sum of n number

/*
let n = 5;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log(`Sum of first ${n} numbers is: ${sum}`);
*/

/*
let n = 1;
let sum = 1;

for (let i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log(`${sum}`);


// Multiplication table

/*
for (let i = 1; i < 5; i++) {
    for (let j = 1; j <= 10; j++) {
        //console.log(i + '*' + j + '=' + i*j); // + is used here for joining text * is used here for multiplication
        console.log(`${i} * ${j} = ${i * j}`); // modern way 
    }
}
    */

// Multiplication table 1 to 10
/*
for (let i = 1; i <= 10; i++) {
    console.log(`table of ${i}`);
    for (let j = 1; j <=10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}
    */

//Reverse counting

/*
for (let i = 100; i >= 1; i--) {
    console.log(i);
}
    */

// Factorial

/*
let n = 5;
let result = 1;

for (let i = 1; i <= n; i++) {
    result = result * i;
}
console.log(result);
*/

/*
let n = 10;
let result = 1;

for (let i = 1; i <= n; i++) {
    result = result * i;
}
console.log(result); */
// Note: for factorial, keep updating the same variable again and again [result = result * i]


// Count digits

/*
let number = 4567;
let count = 0;
let temp = number; // copy of number, so original number stays the same

if (number === 0) {
    count = 1; // 0 has only one digit
} else {
    while (temp > 0) {
        temp = Math.floor(temp / 10); // remove the last digit
        count++; // increase digit count by 1
    }
}

console.log(`Total digits in ${number} is: ${count}`);

*/

// Check prime number

let n = 20;
let isPrime = true;

if (n <= 1) {
    isPrime = false;
}else{
    for (let i = 2; i <= n; i++) {
        if (n % i ===0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(n + " is prime");
}else{
    console.log(n + " is not prime");
    
}

