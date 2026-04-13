const botao = document.getElementById("botao-adicionar");
const lista = document.getElementById("lista");

botao.addEventListener("click", function () {
  const texto = prompt("Digite um item:");

  // validação
  if (texto === null || texto.trim() === "") {
    alert("Digite um item válido!");
    return;
  }

  // cria item da lista
  const li = document.createElement("li");
  li.innerText = texto;

  // remover ao clicar
  li.addEventListener("click",() => {
    li.remove();
  });

  // adiciona na lista
  lista.appendChild(li);
});