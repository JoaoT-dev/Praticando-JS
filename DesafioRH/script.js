document.getElementById('bonificacaoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Captura dos valores
    const nome = document.getElementById('nome').value;
    const nivel = document.getElementById('nivel').value;
    const vendas = parseFloat(document.getElementById('vendas').value);

    let porcentagemBonus = 0;
    let mensagemPromocao = "";

    // Lógica por Nível
    if (nivel === "I") {
        if (vendas > 80000) {
            alert(`O vendedor ${nome}, nível I foi promovido ao nível II`);
        } else if (vendas > 50000) {
            porcentagemBonus = 0.35;
        } else if (vendas > 20000) {
            porcentagemBonus = 0.20;
        } else if (vendas < 5000) {
            alert(`O vendedor ${nome}, nível I, está em risco de demissão.`);
        }
    } 
    
    else if (nivel === "II") {
        if (vendas > 200000) {
            alert(`O vendedor ${nome}, nível II, foi promovido ao nível III`);
        } else if (vendas > 120000) {
            porcentagemBonus = 0.40;
        } else if (vendas > 90000) {
            porcentagemBonus = 0.25;
        } else if (vendas < 50000) {
            alert(`O vendedor ${nome}, nível II, está em risco de virar nível I.`);
        }
    } 
    
    else if (nivel === "III") {
        if (vendas > 500000) {
            alert(`O vendedor ${nome}, nível III, virou o dono da firma!`);
        } else if (vendas > 250000) {
            porcentagemBonus = 0.45;
        } else if (vendas > 210000) {
            porcentagemBonus = 0.30;
        } else if (vendas < 100000) {
            alert(`O vendedor ${nome}, nível III, está em risco de virar nível II.`);
        }
    }

    // Exibição da Bonificação (se houver)
    if (porcentagemBonus > 0) {
        const valorBonus = vendas * porcentagemBonus;
        alert(`O vendedor ${nome}, nível ${nivel}, deverá receber uma bonificação de R$ ${valorBonus.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}.`);
    }
});