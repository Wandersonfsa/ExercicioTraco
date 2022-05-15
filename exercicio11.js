$(function() {
    $('.entrada').maskMoney({ decimal: '.', thousands: '', precision: 1 });
  });

let notaA = document.getElementById("notaA");
let notaB = document.getElementById("notaB");
let resultado = document.getElementById("resultado");

function calculo (a, b) {

    a = Number(notaA.value);
    b = Number(notaB.value);
    let notaFinal = Number(a + b).toFixed(1);
    
    if (notaFinal >= 60) {
        resultado.innerHTML= `NOTA FINAL: ${notaFinal}`;
    } else {
        resultado.innerHTML = `NOTA FINAL: ${notaFinal}<br> REPROVADO`
    }

}