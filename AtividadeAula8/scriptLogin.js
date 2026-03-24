const usuarioCorreto = "admin";
const senhaCorreta = "1234";

const inputUsuario = document.getElementById("usuario");
const inputSenha = document.getElementById("senha");
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
  const usuarioDigitado = inputUsuario.value;
  const senhaDigitada = inputSenha.value;

  if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
    alert("Login realizado com sucesso");
    mensagem.innerText = "Login realizado com sucesso";
    mensagem.style.color = "green";
  } else {
    alert("Usuário ou senha inválidos");
    mensagem.innerText = "Usuário ou senha inválidos";
    mensagem.style.color = "red";
  }
});