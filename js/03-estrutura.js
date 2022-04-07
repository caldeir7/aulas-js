// Estrutura de dados no JavaScript

// ARRay (VETOR) Lista de dados indexados

let alunos = ["Tiago", "João", "Marília", "Vagner"];
// Acessando o aluno armazenado no indice 1
console.log(alunos[1]);
console.log(alunos [3]);


console.log(alunos);

/* Crie um array contendo os seguintes dados de uma pessoa:
nome e Sobrenome
idade
cidade
estado */

let pessoa = ["Guilherme Santana", 21, "São Paulo", "SP"];
/* Para Acessar as inf nessario passar o array "pessoa" e o indice [1] ficando assim (pessoa [0]) */
console.log(pessoa [0], "é de", (pessoa [2]), "e tem", (pessoa [1]),"anos.");

console.log("---------------")

/* OBJETO
Lista de dados não-indexados */

let filme = {
    // Propriedado: valor
    titulo: "Homem Aranha",
    ano: 2021,
    genero: "acão",
    classificacao: 16
};

console.log(filme.titulo);
console.log(filme.ano);
console.log(
    `${filme.titulo} foi lançado em ${filme.ano} com classificação de +${filme.classificacao}`
);


/* Exercicio de Objeto */
let  pedido = {
    data: "27/02/2022",
    produto: "LacosteSport",
    preco: 180,
    prazo: 7
    
}

console.log(
    `O Produto ${pedido.produto} foi comprado em ${pedido.data} com prazo de entrega em ${pedido.prazo} dias úteis, no valor de ${pedido.preco}R$ reais.`
)