const inputPedido = document.getElementById("inputPedido");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaPedidos = document.getElementById("listaPedidos");
const btnAtender = document.getElementById("btnAtender");
const pedidoAtual = document.getElementById("pedidoAtual");

function adicionarPedido() {
    const textoPedido = inputPedido.value.trim();

    if (textoPedido === "") {
        return;
    }

    const novoItem = document.createElement("li");
    const agora = new Date();
    const horario = agora.getHours() + ":" + agora.getMinutes().toString().padStart(2, '0');
    
    novoItem.innerHTML = `
        <span>${textoPedido} <small>(${horario})</small></span>
        <button class="btn-remover">❌</button>
    `;

    novoItem.querySelector("span").addEventListener("click", function() {
    this.style.textDecoration = 
        this.style.textDecoration === "line-through" ? "none" : "line-through";
});

    novoItem.querySelector(".btn-remover").onclick = () => {
        novoItem.remove();
    };

    listaPedidos.appendChild(novoItem);
    inputPedido.value = "";
    inputPedido.focus();
}

btnAtender.onclick = function() {
    const primeiroPedido = listaPedidos.firstElementChild;

    if (primeiroPedido) {
        const texto = primeiroPedido.querySelector("span").innerText;
        pedidoAtual.innerText = "Atendendo: " + texto;
        primeiroPedido.remove();
    } else {
        pedidoAtual.innerText = "Nenhum pedido na fila!";
    }
};

btnAdicionar.addEventListener("click", adicionarPedido);

inputPedido.addEventListener("keypress", (e) => {
    if (e.key === "Enter") adicionarPedido();
});