const produtos = [
    { codigo: 1, nome: "Notebook Dell Inspiron", preco: 3500.00, categoria: "Eletrônicos" },
    { codigo: 2, nome: "Mouse Logitech", preco: 120.00, categoria: "Eletrônicos" },
    { codigo: 3, nome: "Teclado Mecânico", preco: 250.00, categoria: "Eletrônicos" },
    { codigo: 4, nome: "Monitor 24\"", preco: 900.00, categoria: "Eletrônicos" },
    { codigo: 5, nome: "Cadeira Gamer", preco: 1200.00, categoria: "Móveis" },
    { codigo: 6, nome: "Mesa Escritório", preco: 700.00, categoria: "Móveis" },
    { codigo: 7, nome: "Smartphone Samsung", preco: 2200.00, categoria: "Eletrônicos" },
    { codigo: 8, nome: "Fone de Ouvido Bluetooth", preco: 180.00, categoria: "Eletrônicos" },
    { codigo: 9, nome: "Caixa de Som JBL", preco: 300.00, categoria: "Eletrônicos" },
    { codigo: 10, nome: "Smart TV 50\"", preco: 2800.00, categoria: "Eletrônicos" },

    { codigo: 11, nome: "Geladeira Brastemp", preco: 3200.00, categoria: "Eletrodomésticos" },
    { codigo: 12, nome: "Micro-ondas", preco: 600.00, categoria: "Eletrodomésticos" },
    { codigo: 13, nome: "Fogão 4 bocas", preco: 900.00, categoria: "Eletrodomésticos" },
    { codigo: 14, nome: "Liquidificador", preco: 150.00, categoria: "Eletrodomésticos" },
    { codigo: 15, nome: "Batedeira", preco: 200.00, categoria: "Eletrodomésticos" },

    { codigo: 16, nome: "Camiseta Básica", preco: 50.00, categoria: "Vestuário" },
    { codigo: 17, nome: "Calça Jeans", preco: 120.00, categoria: "Vestuário" },
    { codigo: 18, nome: "Tênis Esportivo", preco: 300.00, categoria: "Calçados" },
    { codigo: 19, nome: "Jaqueta de Couro", preco: 450.00, categoria: "Vestuário" },
    { codigo: 20, nome: "Boné", preco: 40.00, categoria: "Acessórios" },

    { codigo: 21, nome: "Relógio Digital", preco: 200.00, categoria: "Acessórios" },
    { codigo: 22, nome: "Óculos de Sol", preco: 180.00, categoria: "Acessórios" },
    { codigo: 23, nome: "Mochila Escolar", preco: 150.00, categoria: "Acessórios" },
    { codigo: 24, nome: "Bolsa Feminina", preco: 220.00, categoria: "Acessórios" },
    { codigo: 25, nome: "Carteira Masculina", preco: 90.00, categoria: "Acessórios" },

    { codigo: 26, nome: "Livro de JavaScript", preco: 80.00, categoria: "Livros" },
    { codigo: 27, nome: "Livro de Python", preco: 85.00, categoria: "Livros" },
    { codigo: 28, nome: "Caderno 200 folhas", preco: 25.00, categoria: "Papelaria" },
    { codigo: 29, nome: "Caneta Azul", preco: 5.00, categoria: "Papelaria" },
    { codigo: 30, nome: "Lápis HB", preco: 3.00, categoria: "Papelaria" },

    { codigo: 31, nome: "Bicicleta Aro 29", preco: 1500.00, categoria: "Esportes" },
    { codigo: 32, nome: "Bola de Futebol", preco: 100.00, categoria: "Esportes" },
    { codigo: 33, nome: "Luvas de Academia", preco: 60.00, categoria: "Esportes" },
    { codigo: 34, nome: "Esteira Elétrica", preco: 2500.00, categoria: "Esportes" },
    { codigo: 35, nome: "Halter 10kg", preco: 120.00, categoria: "Esportes" },

    { codigo: 36, nome: "Perfume Masculino", preco: 250.00, categoria: "Beleza" },
    { codigo: 37, nome: "Perfume Feminino", preco: 270.00, categoria: "Beleza" },
    { codigo: 38, nome: "Shampoo", preco: 25.00, categoria: "Beleza" },
    { codigo: 39, nome: "Condicionador", preco: 30.00, categoria: "Beleza" },
    { codigo: 40, nome: "Creme Hidratante", preco: 40.00, categoria: "Beleza" },

    { codigo: 41, nome: "Sofá 3 lugares", preco: 2000.00, categoria: "Móveis" },
    { codigo: 42, nome: "Guarda-roupa", preco: 1800.00, categoria: "Móveis" },
    { codigo: 43, nome: "Cama Casal", preco: 1400.00, categoria: "Móveis" },
    { codigo: 44, nome: "Colchão Queen", preco: 1200.00, categoria: "Móveis" },
    { codigo: 45, nome: "Criado-mudo", preco: 300.00, categoria: "Móveis" },

    { codigo: 46, nome: "Panela de Pressão", preco: 180.00, categoria: "Cozinha" },
    { codigo: 47, nome: "Jogo de Talheres", preco: 120.00, categoria: "Cozinha" },
    { codigo: 48, nome: "Prato de Vidro", preco: 20.00, categoria: "Cozinha" },
    { codigo: 49, nome: "Copo de Vidro", preco: 10.00, categoria: "Cozinha" },
    { codigo: 50, nome: "Frigideira Antiaderente", preco: 90.00, categoria: "Cozinha" }
];

const inputCodigo = document.getElementById("produto");
const botaoBuscar = document.getElementById("botao-buscar");
const campoNome = document.getElementById("nome");
const campoPreco = document.getElementById("preco");
const campoCategoria = document.getElementById("categoria");

function limparCampos() {
    campoNome.value = "";
    campoPreco.value = "";
    campoCategoria.value = "";
}

function buscarProduto() {
    const codigo = inputCodigo.value.trim();

    if (codigo === "") {
        alert("Digite um código de produto!");
        limparCampos();
        return;
    }

    const codigoNumero = Number(codigo);

    const produto = produtos.find(p => p.codigo === codigoNumero);

    if (!produto) {
        alert("Produto não encontrado!");
        limparCampos();
        return;
    }

    campoNome.value = produto.nome;
    campoPreco.value = "R$ " + produto.preco.toFixed(2);
    campoCategoria.value = produto.categoria;
}

botaoBuscar.addEventListener("click", buscarProduto);

inputCodigo.addEventListener("click", () => {
    if (inputCodigo.value.trim() === "") {
        limparCampos();
        return;
    }
    buscarProduto();
});