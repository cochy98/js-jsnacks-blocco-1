/**
 * 
   L'utente inserisce due parole in successione, con due prompt.
   Il software stampa prima la parola più corta, poi la parola più lunga.
 */

let charOne = prompt('inserisci parola 1').trim().length;
let charTwo = prompt('inserisci parola 2').trim().length;

if (charOne > charTwo){
    console.log(`la parola 1 è maggiore ${charOne}`);
}
else if (charOne < charTwo){
    console.log(`la parola 2 è maggiore ${charTwo}`);
}

else{
    console.log(`le due parole hanno lo stesso numero di caratteri`);
}