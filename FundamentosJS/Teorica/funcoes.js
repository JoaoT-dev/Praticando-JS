let numeros = [1,2,3,4];

let numerosDobrados = numeros.map(function(num) {
    return num *2
});

console.log(numerosDobrados);

let numerosDobradosArrow = numeros.map(num => num * 2);
console.log(numerosDobradosArrow);

// IF ternário
/*
let resposta = (idade >= 18)
*/
// FILTER -> filtra os elementos de uma lista com base em uma condição
let numerosFilter = [5,10,15,20]

let maioresQueDez = numeros.filter(num => num > 10)
console.log(maioresQueDez);


// REDUCE -> Reduz o valor de um array pra um único valor 
let soma = numeros.reduce((total,num) => total + num, 0)

// reduce (acumulador, auxiliar)
let soma2 = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);
console.log(soma2);

// FIND -> Retorna o primeiro elemento que atenda a condição
let produtos = [
    {id: 1, nome: "Teclado", preco: 50},
    {id: 2, nome: "Mouse", preco: 30}
]
let item = produtos.find(produto => produto.id === 2)
console.log(produtos);

// SPLIT -> Divide uma string em partes, transformando em uma lista
let frase = "JS é muito bom!!";
let palavras = frase.split("")
console.log(palavras);

// TRIM -> Remonve espaço no inicio e final de uma string
let nome = "       João         "
let nomeLimpo = nome.trim();
console.log(nome);
console.log(nomeLimpo);

// INCLUDES -> Verifica se existe um valor dentro de uma lista ou string
let frutas = ["maçã", "banana"];

let frutasIncludes = frutas.includes("banana")
console.log(frutasIncludes);

//toLowerCase -> Transforma o texto em minúsculo
//toUpperCase -> transforma o texto em maiúsculo

let KESSia = "KESSia"
let cargo = "InStRuTORA" 

console.log(KESSia.toLowerCase);
console.log(KESSia.toUpperCase);
console.log(cargo.toLowerCase);
console.log(cargo.toUpperCase);

// FOREACH -> Percorre todos os elementos do array 
// Diferente do map, Não retorna um novo array
let nomes = ["pedro, joão guilherme"]
nomes.forEach(nome => console.log("seu nome é: ", nome))

// SOME -> Verifica se pelo menos um item atende a condição

let numeros2 = [1,3,5,8]

let temPar = numeros2.some(num => num % 2 === 0)
console.log(temPar); // true

// EVERY -> Verifica se todos os elementos possuem uma condição

let todosPar = numeros2.every(num => num % 2 === 0)
console.log(temPar); // true

// SORT -> Ordena os elementos do array
let numerosOrdem = [6,7,3,4,5,1,2,3,9,6,8,5,6,7,4]

numerosOrdem.sort()
console.log(numerosOrdem);

// REVERSE -> Inverte a ordem de um array(lista)

let reverso = "Mensagem secreta"


// JOIN -> Junta os elementos de um array em string

// PUSH -> Insere elementos no final da lista
// POP -> Exclui elementos no final da lista

// SHIFT -> Remove do inico da lista 
// UNSHIFT -> Adiciona do inico da lista 

// SLICE -> Cria uma copia de uma parte da lista

// SPLICE 
// REPLACE -> Substitui uma parte da string

let texto = "Olá mundo!"
let novoTexto = texto.replace("mundo","Cliente")

let textoP = document.getElementById("texto")

let saudacao = "bom dia"
if (saudacao == "bom dia") {
    textoP.textContent = saudacao
} else{textoP.textContent = "Sextouuu"}

