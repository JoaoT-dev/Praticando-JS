let contador = 0;
const botao = document.getElementById("btn");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {
    contador++;
    resultado.innerText = contador;
});