$(function() {
    $('.distancia').maskMoney({ decimal: '.', thousands: '', precision: 1 });
  });


var saidaDistancia = document.getElementById("kmPercorridos");
var saidaCombustivel = document.getElementById("combustivel");
var saidaConsumo = document.getElementById("consumo");

var exercicio7 = {

        consumoMedio: 0,

    calculo: function () {

        var distancia = Number(saidaDistancia.value);
        var combustivel = Number(saidaCombustivel.value);
        var consumo = (distancia / combustivel).toFixed(3);

        this.consumoMedio = `Consumo médio = ${consumo}`;
        saidaConsumo.innerHTML = this.consumoMedio;

    }
}