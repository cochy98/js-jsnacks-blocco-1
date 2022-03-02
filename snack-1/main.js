/* 
    L'utente inserisce due numeri in successione, con due prompt. 
    Il software stampa il maggiore 
*/

let numberOne = parseInt(prompt('inserisci numero 1').trim());
let numberTwo = parseInt(prompt('inserisci numero 2').trim());

if (numberOne > numberTwo){
    console.log(`il numero 1 è maggiore ${numberOne}`);
}
else if (numberOne < numberTwo){
    console.log(`il numero 2 è maggiore ${numberTwo}`);
}

else{
    console.log(`I numeri sono uguali`);
}