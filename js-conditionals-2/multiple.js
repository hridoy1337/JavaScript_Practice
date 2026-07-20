/**
 * MULTIPLE CONDITIONS
 * 
 * 
 * 
 * 
*/

const salary = 25000;
const isBCS = true;
const hasCar = false;

if (salary > 50000 && isBCS === true && hasCar) {
    // console.log('su........Patro')
}
else {
    // console.log('Tor Kopale biya nai!!!!')
}

if (salary > 75000 || isBCS === true || hasCar) {
    console.log('bolo baba kobul');
}
else {
    console.log('Vaag tui mokbul');
}


// ----------------------------------------------------

if ((salary > 50000 && hasCar) || isBCS) {

}

if (20 < 30 || (20 === 20 && 30 === 30)){
    
}
//-----------------------------------------------------

if((salary >= 50000 && hasCar) || isBCS){
    console.log("Welcome!")
} else{
    console.log('Get Out Bruh!');
}