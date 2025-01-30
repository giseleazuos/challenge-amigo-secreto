//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

/*Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".

Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.

Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.

Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.*/

let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;

    if(nome == "") {
        alert("Por favor, insira um nome válido!");
    } else {
        amigos.push(nome);

        exibirNomes();

        document.getElementById("amigo").value = "";
    }
}

function exibirNomes() {
    let listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";

    amigos.forEach(function(nome){
        let li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}



function sortearAmigo() {

}