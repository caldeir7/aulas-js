'use strict' /* Modo Restrito  Mal uso */

console.log("Funçôes.");

/* Funçoes são blocos de código que podem ser executados e reaproveitados em praticamente qualquer parte da sua aplicação.

Usar funçôes também é uma forma de separar a lógica e organizar melhor sua programação. 
*/
// Forma Tradicional
function linha(){
    console.log("----------");
}

let curso = "Progamador Web";
let escola = "Senac";
let ano = 2022;

console.log(`Curso: ${curso}`);
linha();
console.log(`Escola: ${escola}`);
linha();
console.log(`Ano: ${ano}`);
linha(); /* Chamando função Sempre Retorna algum resultado */


                  //Parametros ou Argumentos 
function soma( valor1, valor2 ){
    let total = valor1 + valor2;
    return total;
} 


console.log( soma(10, 5) );

let resultado = soma(100, 50);
console.log(resultado);

if(resultado < 1000){
    console.log("Abaixo da Meta");
}