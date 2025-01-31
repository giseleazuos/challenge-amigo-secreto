let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;

    if (nome.trim() === "") {
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

    amigos.forEach(function (nome) {
        let li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {

    if (amigos.length != 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        let nomeSorteado = amigos[indiceAleatorio];
        document.getElementById("resultado").textContent = `O amigo secreto sorteado é: ${nomeSorteado}`;
    }
}

