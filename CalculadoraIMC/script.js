document.getElementById("imcForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const display = document.getElementById("resultado");

  if (peso > 0 && altura > 0) {
    const imc = (peso / (altura * altura)).toFixed(2);
    let classificacao = "";
    let cor = "#333";
    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
      cor = "#f39c12"; // Laranja
    } else if (imc >= 18.5 && imc <= 24.9) {
      classificacao = "Peso normal";
      cor = "#28a745"; // Verde
    } else if (imc >= 25 && imc <= 29.9) {
      classificacao = "Sobrepeso";
      cor = "#f39c12";
    } else if (imc >= 30 && imc <= 34.9) {
      classificacao = "Obesidade Grau I";
      cor = "#e74c3c"; // Vermelho
    } else if (imc >= 35 && imc <= 39.9) {
      classificacao = "Obesidade Grau II";
      cor = "#c0392b";
    } else {
      classificacao = "Obesidade Grau III (Mórbida)";
      cor = "#7f0000";
    }
    display.style.color = cor;
    display.innerHTML = `${nome}, seu IMC é ${imc}<br>(${classificacao})`;
    alert(`${nome}, seu IMC é ${imc} e sua classificação é: ${classificacao}.`);
  } else {
    alert("Por favor, insira valores válidos.");
  }
});
