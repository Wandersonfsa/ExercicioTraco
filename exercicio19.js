$(function() {
    $('.valor').maskMoney({ decimal: '.', thousands: '', precision: 2 });
  });


let salario = document.getElementById("salario");
let resultado = document.getElementById("resultado");

let exercicio19 = {

    aumentoA: 20,
    aumentoB: 15,
    aumentoC: 10,
    aumentoD: 05,

    calculo: function () {

        let saldo = Number(salario.value);
        if (saldo <= 999) {
            let aumento = saldo / 100 * this.aumentoA;
            let novoSalario = saldo + aumento;
            resultado.innerHTML = `Novo salário = R$ ${(novoSalario).toFixed(2)} <br> Aumento = R$ ${(aumento).toFixed(2)}<br> Porcentagem = ${this.aumentoA}%`;
        } if (saldo >= 1000 && saldo <= 2999) {
            let aumento = saldo / 100 * this.aumentoB;
            let novoSalario = saldo + aumento;
            resultado.innerHTML = `Novo salário = R$ ${(novoSalario).toFixed(2)} <br> Aumento = R$ ${(aumento).toFixed(2)}<br> Porcentagem = ${this.aumentoB}%`;
        } if (saldo >= 3000 && saldo <= 7999) {
            let aumento = saldo / 100 * this.aumentoC;
            let novoSalario = saldo + aumento;
            resultado.innerHTML = `Novo salário = R$ ${(novoSalario).toFixed(2)} <br> Aumento = R$ ${(aumento).toFixed(2)}<br> Porcentagem = ${this.aumentoC}%`;
        } if (saldo >= 8000) {
            let aumento = saldo / 100 * this.aumentoD;
            let novoSalario = saldo + aumento;
            resultado.innerHTML = `Novo salário = R$ ${(novoSalario).toFixed(2)} <br> Aumento = R$ ${(aumento).toFixed(2)}<br> Porcentagem = ${this.aumentoD}%`;
        } 
    }
};