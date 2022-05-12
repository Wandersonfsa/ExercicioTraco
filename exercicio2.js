var saidaBase = document.getElementById("base");
var saidaAltura = document.getElementById("altura");
var saidaArea = document.getElementById("area");
var saidaPerimetro = document.getElementById("perimetro");
var saidaDiagonal = document.getElementById("diagonal");

var exercicio = {

    area: 0,
    perimetro: 0,
    diagonal: 0,

    calculo: function () {

        var base = Number(saidaBase.value);
        var altura = Number(saidaAltura.value);

        this.area = base * altura;
        saidaArea.innerHTML = (this.area).toFixed(4);

        this.perimetro = base * 2 + altura * 2;
        saidaPerimetro.innerHTML = (this.perimetro).toFixed(4);

        this.diagonal = Math.pow(base, 2) + Math.pow(altura, 2);
        saidaDiagonal.innerHTML = Math.sqrt(this.diagonal).toFixed(4);


    }



};
