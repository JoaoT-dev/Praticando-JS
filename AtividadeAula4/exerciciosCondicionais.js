// 1.
let idade = Number(prompt("Qual a sua idade?"))
if (idade >= 18) {
    console.log("Voce é maior de idade");
} else {
    console.log("Voce é menor de idade");
}

// 2.
let numero = Number(prompt("Escolha qualquer número"))
if (numero >= 0) {
    console.log("O numero é positivo");
} else {
    console.log("O numero é negativo");
}

// 3.
let notaProva = Number(prompt("Qual foi sua nota?"))
if (idade >= 60) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// 4.
let numeroEx4 = Number(prompt("Escolha qualquer número"))
if (numeroEx4 > 0) {
    console.log("O numero é positivo");
} else if (numeroEx4 == 0) {
    console.log("O numero é 0");
}
else {
    console.log("O numero é negativo")
}

// 5. 
let idadeEx5 = Number(prompt("Qual a sua idade?"))
if (idade >= 0 && idade <= 12) {
    console.log("Voce é criança");
} else if (idade >= 13 && idade <= 17) {
    console.log("Voce é adolescente");
}
else {
    console.log("Voce é maior de idade");
}

// 6.
let numeroEx6 = Number(prompt("Escolha qualquer número"))
let par = numeroEx6 % 2
if (par == 0) {
    console.log("O numero que voce escolheu é par");
} else {
    console.log("O numero que voce escolheu é impar");
}
//INTERMEDIARIO

//3. 
valorProduto = Number(prompt("Escolha o valor da compra"))
let desconto = 10 / 100 * valorProduto
if (valorProduto >= 100) {
    let resultado = valorProduto - desconto
    console.log(`A sua compra com descontos ficou R$${resultado}`);
} else {
    console.log(`A sua compra ficou R$${valorProduto}`);
}

// 4.
let user = prompt("Usuario:");
let senha = prompt("Senha:");
if (user == "admin" && senha == 1234) {
    console.log("Bem vindo!");
} else {
    console.log("Login inválido");
}