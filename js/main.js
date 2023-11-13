'use srtict';

// elementi della spesa
const elementi = ['Pane', 'Acqua', 'Pasta'];

// ul 
const lista = document.querySelector('.lista');

//contatore
let contatore = 0;

while(contatore < elementi.length){
    const elemento = document.createElement('li');
    elemento.append(elementi[contatore]);
    lista.append(elemento);
    contatore++;
}