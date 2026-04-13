/*
Objetivo:
Nesta atividade, vocês irão criar um mini sisteminha no terminal/console usando apenas a sintaxe básica do JavaScript.
Além disso, irão praticar o uso do Git e GitHub para salvar e publicar o projeto.
A ideia é simular um pequeno sistema de lanchonete, loja, cadastro ou outro tema simples, exibindo informações no console com console.log().
*/


let nome = prompt(`Bem vindo a nossa lanchonete!
Para continuar, informe seu nome:`);

let produto = prompt(`Temos:
1.  Hamburger   -> R$25.00
2.  Sorvete     -> R$10.00
3.  Batata      -> R$8.00       
Escolha o numero do produto:`);
if (produto == 1){
    let precoProduto = 25
}
else if (produto == 2){
    let precoProduto = 10
}
else if(produto == 3){
    let precoProduto = 8
}
else{
    console.log("erro na escolha do produto");
}
let quantidade = prompt(`Quantas unidades?`);
let total = produto * quantidade
console.log(`O total ficou R$ ${total}`);

console.log(`Resumo do pedido:
Nome: ${nome} 
Produto: ${produto}
Quantidade: ${quantidade}
O total ficou R$ ${total}`);
console.log(`Pedido realizado com sucesso!
Obrigado pela preferência.`);
