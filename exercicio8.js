$(function() {
    $('.medida').maskMoney({ decimal: '.', thousands: '', precision: 1 });
  });

var saidaA = document.getElementById("medidaA");
var saidaB = document.getElementById("medidaB");
var saidaC = document.getElementById("medidaC");
var resultadoA = document.getElementById("resultadoA");
var resultadoB = document.getElementById("resultadoB");
var resultadoC = document.getElementById("resultadoC");

var exercicio8 = {

    areaQuadrado: 0,
    areaTriangulo: 0,
    areaTrapezio: 0,

    calculo: function () {

        var medidaA = Number(saidaA.value);
        var medidaB = Number(saidaB.value);
        var medidaC = Number(saidaC.value);

        this.areaQuadrado = Math.pow(medidaA, 2).toFixed(4);
        resultadoA.innerHTML = this.areaQuadrado;

        this.areaTriangulo = (medidaB * medidaA / 2).toFixed(4);
        resultadoB.innerHTML = this.areaTriangulo;

        this.areaTrapezio = ((medidaA + medidaB) * medidaC / 2).toFixed(4);
        resultadoC.innerHTML = this.areaTrapezio;


    }

}