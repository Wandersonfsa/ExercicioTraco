var saidaNome = document.getElementById("name");
var saidaValor = document.getElementById("valorHora");
var saidaHora = document.getElementById("horaTrabalhada");
var saidaCalculo = document.getElementById("saida");

var exercicio6 = {

    pagamento: 0,

    calculo: function () {

            var nome = saidaNome.value;
            var valor = Number (saidaValor.value);
            var hora = Number(saidaHora.value);
            var valorHora = (valor * hora).toFixed(2);

            this.pagamento = `O pagamento para ${nome} deve ser ${valorHora}!!`
            saidaCalculo.innerHTML = this.pagamento;

    }

};

$(function() {
    $('.Preco').maskMoney({ decimal: '.', thousands: '', precision: 2 });
  })