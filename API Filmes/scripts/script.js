
const campoBusca = document.getElementById("campo-busca");
const listaFilmes = document.getElementById("lista-filmes");

const API_KEY = "";

const URL_BASE = "https://api.themoviedb.org/3";
const URL_IMAGEM = "https://image.tmdb.org/t/p/w500";

// Mostrar todos os resultados buscados
function mostrarResultados(lista) {
    listaFilmes.innerHTML = "";

    lista.forEach(item => {
        //ignora se nn tiver imagem
        if (!item.poster_path) {return;
        }

        const titulo = item.title || item.name;
        const nota = item.vote_average || "N/A";

        const div = document.createElement("div");
        div.classList.add("filme");

        div.innerHTML = `
            <img src="${URL_IMAGEM}${item.poster_path}" alt="${titulo}">
            <div class="info">
                <h3>${titulo}</h3>
                <span> ⭐ ${nota}</span>
            </div>
        `;

        listaFilmes.appendChild(div);
    })
        
        
}

// Buscar filmes e séries
async function buscarTitulos(termoDigitado) {
    try {
        const resposta = await fetch(`${URL_BASE}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(termoDigitado)}`);
        const dados = await resposta.json();
        mostrarResultados(dados.results);
    } catch (error) {
        console.error("Erro ao buscar títulos:", error);
    }
} 

// buscar filmes populares
async function buscarPopulares() {
    try {
        const resposta = await fetch(`${URL_BASE}/movie/popular?api_key=${API_KEY}&language=pt-BR`);

        const dados = await resposta.json();
        mostrarResultados(dados.results);
    } catch (error) {
        console.error("Erro ao buscar filmes populares:", error);
    }
}

// adicionar evento para carregar filmes populares ao abrir a página
window.addEventListener("load", () => {
    buscarPopulares();
});

campoBusca.addEventListener("input", () =>{
    const termoDigitado = campoBusca.value.trim()
    if (termoDigitado.length > 2) {
        buscarTitulos(termoDigitado)    
    }
    else {
        buscarPopulares()
    }
})