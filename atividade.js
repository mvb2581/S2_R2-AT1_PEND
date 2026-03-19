const input = document.getElementById("inputItem");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaItens");

botao.addEventListener("click", () => {

    const valor = input.value;

    if(valor.trim() !== ""){

        const novoItem = document.createElement("li");

        novoItem.innerText = valor;
        novoItem.classList.add("list-group-item");

        lista.appendChild(novoItem);

        input.value = "";
    }

});