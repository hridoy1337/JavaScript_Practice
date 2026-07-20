/**
 * binary --> two
 * Ternary --> three
 * 
 * 
 * condition ? if true : if false
*/

//const age = 20;
// if (age >= 18) {
//     console.log('please vote');
// }
// else {
//     console.log('grow up kid');
// }

//age >= 18 ? console.log('Please VOTE') : console.log('Grow Up Kid')


//let price = 500;
//const isLeader = true;

// if (isLeader) {
//     price = 0;
// }
// else {
//     price = price + 100;
// }

// console.log('price is: ', price);

//price = isLeader ? 0 : price + 100;

//console.log('Price now: ', price)

const age = 18;
age >= 18 ? console.log("Please go ahead") : console.log("You can't go kid!");

let price = 500;
const isLeader = false;

if(isLeader){
    price = 0;
}
else{
    price += 100; //500 + 100
}
console.log(price); //600

price = isLeader ? 0 : price + 100; //600+100
console.log(price);