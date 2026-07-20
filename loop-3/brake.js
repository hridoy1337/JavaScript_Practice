// for(let i = 0; i <= 100; i++){
//     if(i > 5){
//         console.log("Finish")
//     }
//     console.log(i);
// }

// let count = 0;
// while(count <= 10){
//     if(count >= 5){
//         console.log("Brake Up!")
//         break;
//     }
//     console.log(count);
//     count++;
// }

// for(let i = 0; i <= 10; i++){
//     if(i === 2){
//         continue; //skip the value
//     }
//     console.log("Welcome", i)
// }

for(let i = 1; i <= 10; i++){
    if(i % 2 === 1){
        continue; //skip the value
    }
    console.log("Welcome", i)
}