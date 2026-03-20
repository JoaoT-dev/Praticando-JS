// 1.
for (let i = 0; i <= 10; i++) {
    console.log(i);       
}

// 2.
let numEx2 = Number(prompt("2. Digite um número:"));

// Exibir a tabuada de 1 a 10
console.log(`Tabuada do ${numEx2}:`);

for (let i = 1; i <= 10; i++) {
    console.log(`${numEx2} x ${i} = ${numEx2 * i}`);
}

// 3.
let N = Number(prompt("3. Digite um número:"));
let soma = 0;

for (let i = 1; i <= N; i++) {
    soma += i;
}
console.log(`A soma de 1 até ${N} é: ${soma}`);


//INTERMEDIARIO

// 1.
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 4.
let senhaCorreta = "1234";
let tentativa = "";

while (tentativa !== senhaCorreta) {
    tentativa = prompt("4. Digite a senha:");
}
