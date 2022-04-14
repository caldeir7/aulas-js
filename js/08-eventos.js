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
// Tocar Texto do botao

const botao = document.querySelector("#noturno");
const pagina = document.querySelector("body")

botao.addEventListener("click", function () {
    pagina.classList.toggle("modo-noturno");
            // Comparação
            // Se o texto do botão for Ativar
    if ( botao.textContent == 'Ativar' ) {
        // então mudamos para Desativar
        botao.textContent = "Desativar"
        
    } else {
        // senão, mudamos para ativar
        botao.textContent = "Ativar"
    }

    // Muda Texto Dentro do Botão.
    

});

/* function Buttontoggle()
{
    let t = document.getElementById("123");

    if(t.innerHTML=="Some Text"){                Muda Texto ao clicar
        t.innerHTML="Toggled Text";              Adicionar/Adicionado 
    } else{                                      Para alterar ao clicar
      t.innerHTML="Some Text";                   no botao adicionar
    }
} */


// Exemplo 03: simulação de cadastro

const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome"); /* Campos do form sempre armazenados em memoria */
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados")

// Detectar o acionamento do formulário
// Obs. : a função dentro do listenner, é chamada de Callback
formulario.addEventListener("submit", function(event){
    event.preventDefault(); /* Não Redirecione o form e anula o comportamento do navegador */

    // 1) Capturar os dados digitador nos campos
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    // 2) Calcular a média das notas
    
    let media = (nota1 + nota2) / 2;
    /* 1) Progame o necessário para determinar se o aluno está aprovado ou reprovado. Critério: media maior/igual a 7 aprovado, caso contrário reprovado */
    let caso;
        if (  media >= 7 ) {
            caso  = "Aprovado"
        } else {
            caso = "Reprovado"
        }
    
    // Criar Elementos dinamicamente via Js
    let paragrafo = document.createElement("p");

    // 3.2) Montar o conteúdo da tag
    /* 2) Mostre a situação do aluno junto com o nome e a media */
    paragrafo.innerHTML = `<b>${nome}</b> - <i>${media}</i> - <b>${caso}</b>`;

    // 3.3) Adicionar tag/conteudo a div resultados
    divResultados.appendChild(paragrafo);
    /* 3) Desafio: faça com que os campos do formulário sejam resetados ao enviar */
    // document.querySelector("form")
    formulario.reset();
    // Devolvendo o foco (cursor) para o campo nome
    campoNome.focus();

});



 let media = (nota1 + nota2) / 2;
    /* 1) Progame o necessário para determinar se o aluno está aprovado ou reprovado. Critério: media maior/igual a 7 aprovado, caso contrário reprovado */
    let caso;
        if (  media >= 7 ) {
            caso  = "Aprovado"
        } else {
            caso = "Reprovado"
        }

    
    
    
    

    

