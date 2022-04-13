'use strict'

// console.log("Eventos");

// Exemplo

const subExemplo01 = document.querySelector("#subtitulo-exemplo01")
const msg = document.querySelector("#mensagem")

// Monitor/Ouvinte de Evendo
// Função é como se tivesse alguem do outro lado da porta monitorando  o que estamos fazendo Assim q ouvir ele entra recebe 2 parâmetros
subExemplo01.addEventListener("click", function () {
    msg.textContent ="Olá" ;
} );

subExemplo01.addEventListener("dblclick", function(){
    msg.textContent = "";
})


/* Exemplo 02: modo noturno */

const botao = document.querySelector("#noturno");
const pagina = document.querySelector("body")

botao.addEventListener("click", function () {
    pagina.classList.toggle("modo-noturno");
});


// Tocar Texto do botao
