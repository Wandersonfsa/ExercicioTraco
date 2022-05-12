
var saidaLargura = document.getElementById("largura");
var saidaComprimento = document.getElementById("comprimento");
var saidaValor = document.getElementById("valor");
var calculoArea = document.getElementById("areaTerreno");
var calculoPreco = document.getElementById("precoTerreno");


var exercicioUM = {

    areaTerreno: 0,
    precoTerreno: 0,

    calculo: function () {

        var largura = Number(saidaLargura.value);
        var comprimento = Number(saidaComprimento.value);
        var valor = Number(saidaValor.value);

        this.areaTerreno = largura * comprimento;
        calculoArea.innerHTML = (this.areaTerreno).toFixed(2);

        this.precoTerreno = valor * areaTerreno.innerHTML;
        calculoPreco.innerHTML = (this.precoTerreno).toFixed(2);


    }



};
