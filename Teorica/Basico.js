/* Variaveis
    Palavras pra criar variaveis:
        const
        let
        var
*/

// CONST -> Quando um valor não pode mudar (+ seguro)
const idade = 30;

// LET -> Quando um valor pode mudar (+ utilizado)
let nome = "kessia";

// VAR -> Forma antiga de declarar variáveis (evitar usar)
var cidade = "São Caetano do Sul";

//imprimindo os valores
console.log(idade);
console.log(nome);
console.log(cidade);

//ALTERANDO VALORES
console.log(nome);
nome = "lucas";
console.log(nome);
// valor antigo vai primeiro, nome atualiza pra lucas, log aparece lucas

// TIPOS PRIMITIVOS

// 1. String (textos em geral)

let mensagem = "Ola mundo"
console.log(mensagem);


//INTERPOLAÇÃO
console.log(`Meu nome é ${nome}, tenho ${idade} anos de idade.`); // dessa forma é mais facil de entender e de usar
console.log("Juntando nome " + nome + " com idade " + idade);

// 2. Number (armazena numeros inteiros ou decimais)
let quantidade = 5;
let temperatura = 36.8;

// 3. Boolean -> True/false
let estaChovendo = true;
let temSol = false;
console.log(typeof temSol);

// 4. Undefined -> Variavel ainda não recebeu valor
let pedido;
console.log(typeof pedido)

// 5. Null
let endereço = null;
console.log(typeof endereço);

// CONVERSÃO DE TIPOS
//Conversão Implicita (automatica)
console.log("5" + 3);
console.log("5" - 3);

// Conversão Explicita (manual)
// Converter para número:
let numero = "42"; //string texto
console.log(typeof numero);

let numeroConvertido = Number(numero); // converteu pra number
console.log(typeof numeroConvertido);

// Converter pra string
let num = 100;
console.log(typeof num);

let texto = String(num); // convertendo de número para texto
console.log(typeof texto);

// Converter booleano pra numero
let TrueConvertido = Number(true);
console.log(typeof TrueConvertido);

let FalseConvertido = Number(false);
console.log(typeof FalseConvertido);

// OPERADORES RELACIONAIS
/*
<   menor que
>   maior que  
<=  menor ou igual
>=  maior ou igual
==  igualdade (ignora o tipo)
=== igualdade (verifica o tipo)
!=  diferente (ignora o tipo)
!== diferente (verifica o tipo)
*/

// exemplos

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 5);
console.log(10 <= 5);

// diferença entre == e ===
console.log(5 == "5");      // ignora o tipo (true)
console.log(5 === "5");     // verifica o tipo (false)

// OPERADORES MATEMÁTICOS
// São usados pra fazer cálculos - como soma, multiplicação, etc.

/*
    +   Soma
    -   Subtração
    *   Multiplicação
    /   Divisão
    %   Resto de divisão
    **  Potencia
*/

// exemplos:

let a = 10;
let b = 5;
let soma = a + b
let Subtração = a - b
let multiplicação = a * b
let divisão = a / b
let restDiv = a % b
let Potencia = a ** b


console.log(`${soma} -> Soma`);
console.log(`${Subtração} -> Soma`);
console.log(`${divisão} -> Soma`);
console.log(`${multiplicação} -> Soma`);
console.log(`${restDiv} -> Soma`);
console.log(`${Potencia} -> Soma`);
console.log(`${soma} -> Soma`);
console.log(`${soma} -> Soma`);