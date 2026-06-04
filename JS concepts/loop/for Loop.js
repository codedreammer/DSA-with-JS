//for Loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element === 5) {
//         console.log("5 is best number");
        
//     } //condition print first then other 
//     console.log(element);
    
// }

// for (let i = 0; i < 20; i++) {
//     const element = i;
//     if (element >= 11) {
//         break
//     }
//     console.log(element);
    
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element === 9) {
//         console.log("nine");
//     }
//     else if (element === 0) {
//         console.log("start");
        
//     }
//     console.log("all");
    
// }

////////////////////////////////

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value:${i}`);
//     for (let j = 0; j <=10; j++) {
//         console.log(i + '*' + j + '=' +  i*j);
//     }
// }

// for (let i = 0; i < 20; i++) {
//     console.log(`outer loopvalue ${i}`);
//     for (let j = 0; j <= 20; j++) {
//         console.log(i + '*' + j + '=' + i*j );    
//     }
// }

// for (let i = 1; i <= 5; i++) {
//     let str = ""
//     for (let j = 1; j <= i; j++) {
//         str +=j
//     }
//     console.log(str);
// }

for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        console.log(i, j);
    }
    }