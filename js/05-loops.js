'use strict'
/* Estruturas Tradicionais
(Tem em todas as linguagens)

while -> Enquanto
do/while -> faça/enquanto
for -> para 

*/

// Exemplo Loop while (enquanto)

console.log("while");

// Variavel de controle do loop 
/* Obs: Normalmente e chamda de i, j ou k  */
let i = 1;
// Enquanto o CONTADOR for meno ou igual a 10
while( i <= 3){
    console.log(`Valor de contador: ${i}`);
    i++;  // incremendo adiciona mais um
}

console.log("------------");

console.log("do/while"); 
// Loop de

let j = 1;  
do{
    console.log(`J vale ${j}`);
    j++;
} while(j <= 3)
//  ou j < 4

console.log("-------------------");

console.log("FOR");
    // Variavel de controle (LET I), (Condição i <= 5), (Atualização da Váriavel i++).
for( let i = 1; i <= 5; i++ ){
    console.log(`I vale: ${i}`);
}

console.log("-----------");

console.log("Loop e Estrutura de Dados");
// Array
let alunos = ["Eduardo", "Vagner", "Thalia", "Claudio", "Jessica"];

console.log(alunos [0]);
console.log("-----------");

// Começar com 0 quando for Array
for( let i = 0; i < 5; i++){
    console.log(alunos[i]); /* Usa a mesma varial do for para acessar o array */
}
/* .sort função para ordenar arrays */
// console.log(alunos.sort());

console.log("---------------");

console.log("Loops exclusivos do JS");

// for/of: ótimos para Arrays
// Let aluno acessa o Array Alunos

for ( let aluno of alunos ){
    console.log(aluno);
}



let livro = {
    titulo: "Senhor dos Anéis",
    ano: 1954,
    volumes: 3
};

// for/in: Melhor para obj Usaremos no Simplicity
for( let dados in livro ){
    console.log( livro[dados] );
}

