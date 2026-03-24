let curtido = false;
let likes = 0;

const status = document.getElementById("status");
const botao = document.getElementById("botao");

botao.addEventListener("click", function () {
  if (curtido === false) {
    likes++; // incrementa curtidas
    status.innerText = "❤️ Curtido (" + likes + ")";
    botao.innerText = "Descurtir";
    curtido = true;
  } else {
    status.innerText = "👍 Não curtido";
    botao.innerText = "Curtir";
    curtido = false;
  }
});