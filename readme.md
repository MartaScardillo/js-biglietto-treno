# Calcolo del prezzo del biglietto del treno

- ## variabili iniziali

  - creo la variabile priceKm e assegno ad esso il costo del viaggio per km
  - creo la variabile discount e assegno ad esso il valore 0

- ## input utente

  - chiedo all'utente quanti km vuole percorrere e li salvo nella variabile numKm
  - chiedo all'utente quanti anni ha e li salvo nella variabile userAge

- ## calcolo viaggio

    - prendo il prezzo al km e i km del viaggio dell'utente e calcolo il prezzo del viaggio dell'utente

    - ## if l'utente è minorenne 

        - calcolo il 20% di sconto sul suo viaggio

    - ## else if l'utente è over 65

        - calcolo il 40% di sconto sul suo viaggio

- ## calcolo eventuale discountedPrice

    - sottraggo price con discount 

- ## controllo i valori

    - console log di price, discount e discountedPrice

- ## faccio apparire nell'HTML

    - prendo l'elemento dell'HTML nel quale voglio far apparire il discountedPrice
    - inserisco nell'elemento il discountedPrice con innerHTML