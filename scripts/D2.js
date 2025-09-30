/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n1 = 12
const n2 = 25
if (n1 < n2); {
    console.log('25 è Maggiore di 12')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n3 = 34
if (n3 !== 5); {
    console.log("not equal")
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n4 = 35
if (n4 % 5 === 0); {
    console.log("divisibile per 5")
}



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n5 = 16
const n6 = 8
if (n6 === n5 - n6) {
    console.log("8 è uguale a 16-8")
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*const totalShoppingCart = 49
if (totalShoppingCart > 50) {
    //console.log("Congratulazioni! Hai diritto alla spedizione gratuita!")
} else {
    console.log("Spese di spedizione: +10€")
}*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 200
const sconto = (totalShoppingCart * 20) / 100
const prezzoFinale = totalShoppingCart - sconto

if (totalShoppingCart - sconto > 50) {
    console.log("Congratulazioni! Hai diritto alla spedizione gratuita!")
    console.log("Black Friday! Sconto del 20% applicato!")
} else {
    console.log("Ordine minimo non raggiunto. Spese di spedizione: +10€")
    console.log("Black Friday! Sconto del 20% applicato!")
}
console.log("PREZZO FINALE", prezzoFinale)



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n7 = 93
const n8 = 34
const n9 = 56
if (34 < 56) {
    console.log("n7 è il più grande", n7)
} if (n9 > n8) {
    console.log("n9 è il secondo", n9)
} if (n8 < n7) {
    console.log("n8 è il più piccolo", n8)
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n10 = 25
if (typeof n10 === "number") {
    console.log("n10 è un numero")
} else { console.log("n10 non è un numero") }
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n11 = 343
if (n11 % 2 === 0) {
    console.log("il numero 343 è pari")
} else {
    console.log("il numero 343 è dispari")
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
if (val < 10) {
    console.log("meno di 10");
} if (!(val < 5)) {
    console.log("non è meno di 5");
} else {
    console.log("uguale a 10 o maggiore")
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/


const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto",
    /* SCRIVI QUI LA TUA RISPOSTA */

    /* ESERCIZIO 12
      Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
    */

    /* SCRIVI QUI LA TUA RISPOSTA */
    delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop()

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numbers.splice(9, 1, 100)
console.log("Linea di numeri", numbers)