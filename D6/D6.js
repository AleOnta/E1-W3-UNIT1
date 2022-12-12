/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-------- Exercise 1 --------");

const area_calculator = function (l1, l2) {
  const area = l1 * l2;
  return area;
};

const area = area_calculator(5, 10);
console.log(`This is the area of the rectangle in question: ${area}`);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-------- Exercise 2 --------");

const crazySum = function (n1, n2) {
  if (n1 === n2) {
    const sum = (n1 + n2) * 3;
    return sum;
  } else {
    const sum = n1 + n2;
    return sum;
  }
};

const sum = crazySum(4, 4);
console.log(`This is the result of your crazySum: ${sum}`);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-------- Exercise 3 --------");

const crazyDiff = function (n) {
  let diff = 0;
  switch (n) {
    case n > 19:
      diff = Math.abs((n - 19) * 3);
      return diff;
    default:
      diff = Math.abs(n - 19);
      return diff;
  }
};

const diff = crazyDiff(1);
console.log(`This is the result of your crazyDiff: ${diff}`);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-------- Exercise 4 --------");

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    const bound = true;
    return bound;
  } else {
    const bound = false;
    return bound;
  }
};

const bound = boundary(59);
console.log(`The boundary you're asking for is: ${bound}`);
console.log(bound);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-------- Exercise 5 --------");

const epify = function (word) {
  let input = word.trimStart();
  input = word.substr(0, 7);
  if (input === "EPICODE") {
    const sentence = word;
    return sentence;
  } else {
    const sentence = "EPICODE" + " " + word;
    return sentence;
  }
};

const sentence = epify("EPICODE è il meglio");
console.log(`The last version of the sentence is: ${sentence}`);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
