const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");
const mensagem = document.getElementById("mensagem");

btnAdicionar.addEventListener("click", () => {

    const textoTarefa = inputTarefa.value;

    if(textoTarefa.trim() === ""){

        mensagem.innerHTML = `
        <div class="alert alert-danger">
        Tarefa vazia!
        </div>
        `;

    } else {

        // cria o li
        const novaTarefa = document.createElement("li");
        novaTarefa.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

        // texto da tarefa
        const texto = document.createElement("span");
        texto.innerText = textoTarefa;

        // botão remover
        const btnRemover = document.createElement("button");
        btnRemover.innerText = "Remover";
        btnRemover.classList.add("btn", "btn-danger", "btn-sm");

        // ação de remover
        btnRemover.addEventListener("click", () => {
            novaTarefa.remove();
        });

        // adiciona texto e botão dentro do li
        novaTarefa.appendChild(texto);
        novaTarefa.appendChild(btnRemover);

        // adiciona na lista
        listaTarefas.appendChild(novaTarefa);

        // limpa input
        inputTarefa.value = "";

        mensagem.innerHTML = `
        <div class="alert alert-success">
        Tarefa adicionada com sucesso!
        </div>
        `;
    }

});

