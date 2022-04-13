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
/* function soma( valor1, valor2 ){
    let total = valor1 + valor2;
    return total;
}  */

// Versão 2: sintaxe Arrow Function (Função Seta/Flecha) Asssociada a uma constanto um codigo que nao vai receber alteração

const soma = ( valor1, valor2 ) => {
    let total = valor1 + valor2;
    return total
};

const soma1 = (valor1, valor2) => valor1 + valor2;

console.log( soma(10, 5) );

let resultado = soma(100, 50);
console.log(resultado);

if(resultado < 1000){
    console.log("Abaixo da Meta");
}

linha();

// Versão 1 Tradicional
/* function dobra( valor ){
    let resultado = valor *2
    return resultado
}
 */
/* 
function dobra(valor){
    return valor *2
}
 */


// Versaõ 2: Arrow Function
// const dobra = (valor) => {
//     let resultado = valor *2;
//     return resultado
// };


// const dobra = (valor) =>{
//     return  valor *2
// }

// retorno Implicito
// Obs... como só temos um parâmetro (valor), pode tirar os ()
const dobra = valor => valor * 2;


console.log( dobra ( 10 )  );
console.log( dobra ( 150 ) );