/**
 *
   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 *
 */


const guests = ['luca', 'paolo', 'nicola', 'giovanni', 'francesco'];
const userName = prompt('inserisci il tuo nome').toLowerCase().trim();

let isGuest = false;
for(let i = 0; i<guests.length; i++){
  if(guests[i] == userName){
    isGuest = true;
  }
}

if (isGuest){
  console.log('utente presente in lista, puo partecipare alla festa');
} else{
  console.log('utente non presente in lista');
}