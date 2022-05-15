$(function() {
    $('.valor').maskMoney({ decimal: '.', thousands: '', precision: 2 });
  });



let resultado = document.getElementById("resultado");
let distanciaA = document.getElementById("distanciaA");
let distanciaB = document.getElementById("distanciaB");
let distanciaC = document.getElementById("distanciaC");

function maiorDistancia (a, b, c, d) {

    a = Number(distanciaA.value);
    b = Number(distanciaB.value);
    c = Number(distanciaC.value);
    resultado.innerHTML = `Maior distância = ${Math.max(a, b, c).toFixed(2)}`;
}