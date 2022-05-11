/*function resultado (){
    num1 = Number (document.getElementById("largura").value);
    num2 = Number (document.getElementById("comprimento").value);
    num3 = Number (document.getElementById("valor").value);
    document.getElementById("areaTerreno").innerHTML = num1 * num2;
    document.getElementById("precoTerreno").innerHTML = parseInt ("areaTerreno" * num3);
}*/

var saidaLargura = document.getElementById("largura");
var saidaComprimento = document.getElementById("comprimento");
var saidaValor = document.getElementById("valor");
var calculoArea = document.getElementById("areaTerreno");
var calculoPreco = document.getElementById("precoTerreno");


var exercicioUM = {

    areaTerreno: 0,
    precoTerreno: 0,

    calculo: function () {

        var largura = Number (saidaLargura.value);
        var comprimento = Number (saidaComprimento.value);
        var valor = Number (saidaValor.value);

        this.areaTerreno = largura * comprimento;
        calculoArea.innerHTML = (this.areaTerreno).toFixed(2);

        this.precoTerreno = valor * areaTerreno.innerHTML;
        calculoPreco.innerHTML = (this.precoTerreno).toFixed(2);


    }
    


};
