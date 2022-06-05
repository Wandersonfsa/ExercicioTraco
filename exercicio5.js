var saidaRaio = document.getElementById("raio");
var saidaArea = document.getElementById("area");

var exercicio5 = {

    area: 0,

    calculo: function () {

        var raio = Number (saidaRaio.value);
        var calculoArea = (Math.PI * (raio * raio)).toFixed(3);

        this.area = `Area: ${calculoArea}`;
        saidaArea.innerHTML = this.area;

    }
};