/* Estrutura Condicional
if (se), else(senao), else if (senao se) 

Operadores relacionais (usados com condicionais)

> maior que
< menor que
>= maior ou igual
<= menor ou igual
== igualdade
!= diferente*/

// Exemplo 1 condicional simples (usamos só IF)

let numero = 10;

/* Dentro dos colchetes chamamos de condição SE */
if ( numero > 0 ){
    console.log(`${numero} é maior que zero`);

}


// Exemplo 2 condicional Composta (Usamos If/else)

let aluno = "João";
let nota1 = 8;
let nota2 = 7;
let media = (nota1 + nota2) / 2;


console.log(`Aluno: ${aluno}`);
console.log(`Notas: ${nota1} e ${nota2}`);
console.log(`Média: ${media}`); /* tofixed(2) fixando casa decimais em 2 em casos de numero quebrados */

let situacao;
let faltas = 20;
console.log(`Faltas ${faltas}`);
// && -> operador lógico E Usando quando precisamos avaliar mais de uma condição ao mesmo tempo
if(media >= 9 && faltas < 15){
    situacao = "Aprovado";

} else{
    situacao = "Reprovado";
}

console.log(situacao);


// Exemplo 3: condicional Encadeada (if, else if, else)

let desempenho;
if( media < 3){
    desempenho = "Pessimo"
} else if(media < 5){
    desempenho = "Ruim"
} else if(media < 7){
    desempenho = "Regular"
} else if(media < 9){
    desempenho = "Bom"
} else{
    desempenho = "Ótimo"
}

console.log(desempenho);

