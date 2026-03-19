const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");
const mensagem = document.getElementById("mensagem");

btnAdicionar.addEventListener("click", () => {

    const textoTarefa = inputTarefa.value;

    if(textoTarefa.trim() === ""){

        mensagem.innerHTML = ` <div class="alert alert-danger"> Tarefa vazia! </div>
        `;
        //tarefa vazia aparece em vermelho
    } else {

      
        const novaTarefa = document.createElement("li");
        novaTarefa.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        //adiciona nova tarefa 
     
        const texto = document.createElement("span");
        texto.innerText = textoTarefa;

      
        const btnRemover = document.createElement("button");
        btnRemover.innerText = "Remover";
        btnRemover.classList.add("btn", "btn-danger", "btn-sm");
        //botão de remover 
       
        btnRemover.addEventListener("click", () => {
            novaTarefa.remove();
            //com o click remove
        });

        
        novaTarefa.appendChild(texto);
        novaTarefa.appendChild(btnRemover);

       
        listaTarefas.appendChild(novaTarefa);

    
        inputTarefa.value = "";

        mensagem.innerHTML = `
        <div class="alert alert-success">Tarefa adicionada com sucesso!</div>`;
        //adicionou a tarefa
    }

});

