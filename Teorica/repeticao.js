// ESTRUTURAS DE REPETIÇÃO
// Permite executar um bloco de código varias vezes
/*
FOR         -> Usamos quando sabemos quantas vezes o código vai se repetir.
WHILE       -> 
DO WHILE    ->
FOREACH     ->
*/

// FOR vai se repetir até o limite definido

for (let i = 0; i <= 5; i++) {
    console.log("Oi!!");
    console.log(`Numero: ${i}`);
}

let contador = 1;
while (contador <= 3) {
    console.log("repetindo...");
    contador++
}

// Executa pelo menos uma vez antes da condição
// DO WHILE faz depois pergunta
// WHILE pergunta antes pra validar se a condição é true
let numero = 5
do {
    console.log("Executou pelo menos uma vez.");
    
} while (numero <= 3);


// FOREACH  ->  Usado quando temos uma lista de elementos e queremos percorrer os elementos dessa lista
// lista (array)
let nomes = ["Maria","Jossepe","John","Jose","Jonathas"]

nomes.forEach(function(nome) {
    console.log("Nome: ", nome); 
});

// FOREACH simplificado -> (arrow function)
nomes.forEach(nome => {
    console.log("Nome: ", nome);
});


// Sitema de intervalo definido pelo usuário
let inicio = Number(prompt("Digite o numero inicial: "));
let fim = Number(prompt("Digite o numero final: "));

for (let i = inicio; i <= fim; i++) {
    console.log(i);       
}
// Contagem pulando os numeros

for (let i = inicio; i <= fim; i+=2) {
    console.log(i);       
}

// while com condição para sair do sistema

let limite = Number(prompt("Mostrar numeros maiores que: "));

for (let i = 1; i <= 10; i++) {
    if (i > limite) {
        console.log(i);
    }
}

//             0       1       2
let cores = ["Azul","Verde","Vermelho"]
// tamanho 3
// começa no 0 vai até o 2

//length -> tamanho (pega o tamanho do array)

for (let i = 0; i <= cores.length; i++) {
    console.log(`Posição da cor ${i}:`);
}

// PraCada -> Vê todas os elementos da lista em sequência
cores.forEach(cor => {
    console.log(`Cor: ${cor}`);
});

