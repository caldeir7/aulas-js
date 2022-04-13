'use strict'
/* Funções ou Métodos de acesso/seleção ao DOM 

-getElementById() - Obter elemento pelo ID (Apenas 1 Elemento identificado) Seleciona 1 elemento atraavés do id.
-querySelector()  - Seleciona UM elemento através de um seletor  Qualquer Seletor.
-querySelectorAll()   - Seleciona Vários elementos através de seletor. Sempre um Array pois trabalha com indice
*/

// Exemplos

// const titulo = document.getElementById("titulo-principal");
const titulo = document.querySelector("#titulo-principal");
const subtitulos = document.querySelectorAll("h2");
console.log(titulo);
console.log(subtitulos);


// leitura do conteúdo
console.log( titulo.textContent );
console.log( subtitulos[1].textContent );
    
// Alteração do conteúdo
titulo.textContent = "Olá Dom, meu velho amigo."
subtitulos[0].innerHTML ="<i>Aprendendo DOM</i>" /* Texto e Alterar a tag do html */

// Manipulando CSS via Js

// 1) Inline
const pagina = document.querySelector("body");
pagina.style.backgroundColor = "lightblue"

// 2) Classe
// const primeiroItem = document.querySelectorAll("#lista-editores li:nth-child(2)"); para selecionar outros itens 
const primeiroItem = document.querySelector("#lista-editores li:first-child");
console.log( primeiroItem);

primeiroItem.classList.add("destaque-item")