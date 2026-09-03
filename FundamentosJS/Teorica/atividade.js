/*
## Exercício 1 — Perfil

Crie variáveis:

nome
idade
profissao
cidade

Mostre no console:

Meu nome é ___, tenho ___ anos, trabalho como ___ e moro em ___.
*/

console.log(`Exercício 1 — Perfil`)

let nome = "João";
let idade = "18";
let profissao = "Programador";
let cidade = "São Caetano";

console.log(`Meu nome é ${nome}, tenho ${idade} anos, trabalho como ${profissao} e moro em ${cidade}.`);

/*
## Exercício 2 — Produto

Crie variáveis:


produto
preco
quantidade

Mostre:

Comprei ___ unidades de ___ por R$___ cada.
*/

console.log(`Exercício 2 — Produto`)
let produto = "paçoca"
let preco = 2.50
let quantidade = 15
console.log(`Comprei ${quantidade} unidades de ${produto} por R$${preco} cada.`);

/*
## Exercício 3 — Calculando valores

Crie:

```jsx
valor1 = 10
valor2 = 20
```

Mostre no console:

```
Soma
Subtração
Multiplicação
Divisão
```
*/

console.log(`Exercício 3 — Calculando valores`)

let valor1 = 10
let valor2 = 20
let soma = valor1 + valor2
let Subtracao = valor1 - valor2
let multiplicacao = valor1 * valor2
let divisao = valor1 / valor2

console.log(   
`Valor1 = ${valor1}
Valor2 = ${valor2}
Soma = ${soma}
Subtração = ${Subtracao}
Multiplicação = ${multiplicacao}
Divisão = ${divisao}`);

/*
## Exercício 4 — Tipos

Crie 5 variáveis com tipos diferentes e mostre:

```jsx
valor
tipo
```

Exemplo esperado:

```
Olá - string
10 - number
true - boolean
```
*/

console.log(`Exercício 4 — Tipos`)
let oi = "Olá"
let dez = 10
let verdade = true

console.log(`${oi} - `, typeof oi);
console.log(`${dez} - `, typeof dez);
console.log(`${verdade} - `, typeof verdade);



/*
## Exercício 5 — Conversões

Crie:

```
let numero = "100"
```

Converta para:

```
number
string novamente
```
*/

console.log(`Exercício 5 — Conversões`)
let numero = "100"

let numeroNumero = Number(numero);
console.log(typeof numeroNumero);

let numeroString = String(numero);
console.log(typeof numero);

/*
# Desafio:

Criar um **mini cadastro**:

Variáveis:

```
nome
idade
altura
peso
cidade
profissao
```

Mostrar:

```
Cadastro do usuário
Nome:
Idade:
Altura:
Peso:
Cidade:
Profissão:
```
*/

console.log(`Desafio`);

let nomeUser = "Joao"
let idadeUser = 18
let altura = 1.80
let peso = 80
let cidadeUser = "SaoCaetano"
let profissaoUser = "programador"

console.log(`Cadastro do usuário:
    Nome: ${nomeUser}
    Idade: ${idadeUser}
    Altura: ${altura}
    Peso: ${peso}
    Cidade: ${cidadeUser}
    Profissão: ${profissaoUser}
    `);