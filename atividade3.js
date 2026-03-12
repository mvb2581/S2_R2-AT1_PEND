const inputItem = document.getElementById("inputItem");
const btnAdicionar = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaItens");

btnAdicionar.addEventListener("click", () => {

    const texto = inputItem.value;

    if(texto.trim() !== ""){

        const novoItem = document.createElement("li");

        novoItem.innerText = texto;
        novoItem.classList.add("list-group-item");

        lista.appendChild(novoItem);

        inputItem.value = "";
    }

});