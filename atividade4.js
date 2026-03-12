const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");
const mensagem = document.getElementById("mensagem");

btnAdicionar.addEventListener("click", () => {

    const textoTarefa = inputTarefa.value;

 
    if (textoTarefa.trim() === "") {

        mensagem.innerHTML = `
        <div class="alert alert-danger">
            Tarefa vazia!
        </div>
        `;

    } else {

       
        const novaTarefa = document.createElement("li");

     
        novaTarefa.classList.add("list-group-item");

       
        novaTarefa.innerText = textoTarefa;

        
        listaTarefas.appendChild(novaTarefa);

        
        inputTarefa.value = "";

       
        mensagem.innerHTML = `
        <div class="alert alert-success">
            Tarefa adicionada com sucesso!
        </div>
        `;
    }

});