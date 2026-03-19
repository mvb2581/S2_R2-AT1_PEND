const botao = document.getElementById("btnMudar");
const texto = document.getElementById("texto");

botao.addEventListener("click", () => {
    texto.innerText = "Texto alterado com JavaScript!";
    //Quando clicado, o texto que estava aparecendo é trocado por outro
});