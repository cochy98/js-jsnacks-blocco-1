/**
 *
   Chiedi un numero di 7 cifre all'utente
   e calcola la somma di tutte le cifre che compongono il numero.
   
 *
 */

const userNumber = prompt("inserisci un numero");

let sum = 0;

for (let i = 0; i < userNumber.length; i++){
    sum += userNumber.charAt(i);
}

console.log(sum);