// # Calcolo del prezzo del biglietto del treno

// - ## variabili iniziali

//   - creo la variabile priceKm e assegno ad esso il costo del viaggio per km
const priceKm = 0.21;
//   - creo la variabile discount e assegno ad esso il valore 0
let discount = 0;

// - ## input utente

//   - chiedo all'utente quanti km vuole percorrere e li salvo nella variabile numKm
let numKm = prompt("Quanti km vuoi percorrere?");
//   - chiedo all'utente quanti anni ha e li salvo nella variabile userAge
let userAge = prompt("Quanti anni hai?");
// - ## calcolo viaggio

//     - prendo il prezzo al km e i km del viaggio dell'utente e calcolo il prezzo del viaggio dell'utente
let price = numKm * priceKm;
//     - ## if l'utente è minorenne
if (userAge < 18) {
  //         - calcolo il 20% di sconto sul suo viaggio
  discount = price * (20 / 100);
  //     - ## else if l'utente è over 65
} else if (userAge > 65) {
  //         - calcolo il 40% di sconto sul suo viaggio
  discount = price * (40 / 100);
}

// - ## calcolo eventuale discountedPrice

//     - sottraggo price con discount

let discountedPrice = price - discount;

// - ## controllo i valori

//     - console log di price, discount e discountedPrice

console.log(price);
console.log(discount);
console.log(discountedPrice);

// - ## faccio apparire nell'HTML

//     - prendo l'elemento dell'HTML nel quale voglio far apparire il discountedPrice
let discountedPriceDomElement = document.getElementById("discountedPrice");
//     - inserisco nell'elemento il discountedPrice con innerHTML
discountedPriceDomElement.innerHTML =
  "Il prezzo del tuo biglietto è: " + discountedPrice;
