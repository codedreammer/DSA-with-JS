// const myArr = ["akshay","alok","anand"];

// console.log(myArr[0]);

// Array methods 

// const myArr = [0,1,2,3,4];

// myArr.push(10);
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(9);
// console.log(myArr);

// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// console.log(myArr);

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

// const myArr = [0, 1, 2, 3, 4];

// const sliced = myArr.slice(1, 4);

// console.log(myArr);
// console.log(sliced);

// splice 

// const myArr = [0, 1, 2, 3, 4, 5, 8, 9];

// const removed = myArr.splice(1, 2, 9, 8);

// console.log(myArr);
// console.log(removed);

// marging two diff Arrays
/*
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "aquaman"];

console.log(marvel_heros.concat(dc_heros));
*/

/*
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "aquaman"];
console.log(...marvel_heros,...dc_heros);
*/


// makeing diff arrays into single array

/*
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
*/

// another method 

/*
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(4);
console.log(real_another_array);

*/

/*
console.log(Array.isArray("Akshay"));
console.log(Array.from("Akshay"));
console.log(Array.from({name:"Akshay"})); // intresting
*/

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
