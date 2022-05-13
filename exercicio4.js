var saidaPreco = document.getElementById("preco");
var saidaQuantidade = document.getElementById("quantidade");
var saidaPagamento = document.getElementById("pagamento");
var saidaTroco = document.getElementById("troco");

var exercicio4 = {

    troco: 0,

    calculo: function () {

        var preco = Number(saidaPreco.value);
        var volume = Number(saidaQuantidade.value);
        var caixa = Number(saidaPagamento.value);
        var total =preco * volume;

        if (caixa < total) {
            return alert ("Dinheiro insuficiente!!!")
        } else {

            this.troco = caixa - total;
            saidaTroco.innerHTML = (this.troco).toFixed(2);

        }

    }

}
