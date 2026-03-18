/*
IF          -> SE (se chover......)
ELSE        -> SENÃO (senão chover......)
ELSE IF     -> SENÃO SE 
SWITCH      -> SWITCH (como se fosse um menu de opções)
*/

let nome = prompt("digite seu nome: ");
console.log(`seu nome é: ${nome}`);

// Exemplos:
// 1. Sistema de verificação da temperatura
let temperatura = Number(prompt('digite a temperatura atual: '));
if (temperatura < 20) {
    console.log("Está frio!");
}
else {
    console.log("Está calor!");
}

// 2. Verificação de bateria
let bateria = Number(prompt("digite o nivel de bateria (%) :"))

// Sistema de acesso
let TipoUsuario = prompt();

if (TipoUsuario == "cliente") {
    console.log("Acesso invalido!");
}
else if (TipoUsuario == "admin") {
    console.log("Acesso garantido.");
} else {
    console.log("Acesso inválido");
}


// 4. Classificar qualidade da internet
let velocidade = Number(prompt("Digite a velocidade da internet"));
if (velocidade >= 100) {
    console.log("Rapido");

} else if (velocidade >= 50) {
    console.log("média");
} else {
    console.log("lenta");
}

// OPERADORES LÓGICOS
/*
&&      AND     -> E
||      OR      -> OU
!       NOT     -> NÃO (negação)
*/

// AND   -> Retorna verdadeiro se todas as condições forem verdadeiras.

let operadorAnd = (5 > 3) && (2 < 4);
console.log(operadorAnd); // true

// OR   -> Retorna verdadeiro se pelo menos uma das condições forem verdadeiras.
let operadorOu = (5 > 3) || (10 > 100)
//               true       false

console.log(operadorOu); // verdadeiro

// NOT  -> NÃO
let operadorNao = !(5 > 3) // (5>3) true, !(5>3) false
console.log(operadorNao); // false


// 5. Analisar volume de itens
let quantidade = 50;
if (quantidade === 0) {
    console.log("nenhum item selecionado");
} else if (quantidade < 5) {
    console.log("poucos itens");
} else if (quantidade >= 5 && quantidade <= 10) {
    console.log("médios itens");
} else {
    console.log("muitos itens");
}

const nota = 8
if (nota >= 7) {
    if (nota === 10) {
        console.log("aprovado com premiação");
    } else {
        console.log("Aprovado");
    }
} else {
    console.log("reprovado");
}

let dispositivo = prompt("Voce esta usando: celular, tablet ou computador?")
if (dispositivo == "celular" || dispositivo == "tablet") {
    console.log("modo mobile ativado!");
} else if (dispositivo == "computador") {
    console.log("modo desktop ativado!");
} else {
    console.log("dispositivo não reconhecido");
}

// 8. SWITCH / CASE
// mudar o tema do sistema
let tema = prompt("digite o tema: claro, escuro, azul")
switch (tema) {
    case "claro":
        console.log("tema claro ativado.");
        break;
    case "escuro":
        console.log("tema escuro ativado.");
        break;
    case "azul":
        console.log("tema azul ativado.");
        break;
    default:
        console.log("tema invalido.");
        break;
}