$(function() {
    $('.valor').maskMoney({ decimal: '.', thousands: '', precision: 2 });
  });

let preco = document.getElementById("preco");
let qtd = document.getElementById("qtd");
let dinheiro = document.getElementById("dinheiro");
let troco = document.getElementById("troco");

function calcular (a, b, c) {
    a = Number(preco.value);
    b = Number(qtd.value);
    c = Number(dinheiro.value);

    let soma = (a * b).toFixed(2);
    let caixa = (c - soma).toFixed(2);

    if (a * b > c) {
        troco.innerHTML = `Dinheiro insuficiente, faltam ${a * b - c} reais!`
    } if (a * b - c ==1) {
        troco.innerHTML = `Dinheiro insuficiente, falta ${a * b - c} real!`
    } if (a * b - c ==0) {
        troco.innerHTML = `Pagamento Concluído!`;
    } if (c > soma) {
        troco.innerHTML = `Troco = R$ ${caixa}`;
    }
    
};