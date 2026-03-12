
const btn = document.getElementById("btnEnviar");
const input = document.getElementById("inputNome");
const mensagem = document.getElementById("mensagemNome");


btn.addEventListener("click", () => {

    
    const nomeDigitado = input.value;

   
    if (nomeDigitado.trim() !== "") {

      
        mensagem.innerText = `Olá, ${nomeDigitado}! Seja bem-vindo!`;

        
        mensagem.style.color = "green";

    } else {

        mensagem.innerText = "Digite um nome válido.";
        mensagem.style.color = "red";

    }

});