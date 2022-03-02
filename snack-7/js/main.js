/**
 * Creiamo un array con dieci numeri randomici
 * calcoliamo la somma di tutti gli elementi
 * e calcoliamo anche il valore medio
 */

const randomNumbers = [];
let sum = 0;
let media = 0;
let count = 0;

for (let i = 0; i < 10; i++){
  //assegno un numero random da 0 a 50
  randomNumbers[i] = Math.floor(Math.random() * 50);
  sum += randomNumbers[i];
  count += 1;
}

media = sum/count;

console.log(`L'array è: ${randomNumbers}`);
console.log(`La somma dell'array è: ${sum}`);
console.log(`La media degli elementi dell'array è: ${media}`);
