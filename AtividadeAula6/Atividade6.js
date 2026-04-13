const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 150 },
    { id: 3, nome: "Teclado", preco: 200 },
    { id: 4, nome: "Monitor", preco: 1200 }
];


// Filtrar produtos com preço acima de 500
const acimaDe500 = produtos.filter(produto => produto.preco > 500);
console.log(acimaDe500);

// Encontrar o primeiro produto chamado "Mouse"
const mouse = produtos.find(produto => produto.nome === "Mouse");
console.log(mouse);

// Criar um array apenas com os nomes dos produtos
const nomes = produtos.map(produto => produto.nome);
console.log(nomes);

// Somar todos os preços dos produtos usando reduce
const total = produtos.reduce((soma, produto) => soma + produto.preco, 0);
console.log(total);