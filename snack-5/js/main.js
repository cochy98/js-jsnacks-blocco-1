/**
 * 
   Crea un array vuoto.
   Chiedi per 6 volte all'utente di inserire un numero,
   se è dispari inseriscilo nell'array.
 * 
 */

const numbers = [];

for(let i = 0; i < 6; i++){
    let userNumber = parseInt(prompt("inserisci un numero"));
    // Se il numero non è un multiplo di 2 significa che è un numero dispari
    if ( (userNumber % 2 != 0) && (!isNaN(userNumber)) ){
        numbers[i] = userNumber;
    }
}

console.log(numbers);