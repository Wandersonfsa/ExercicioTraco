var saidaNome1 = document.getElementById("nome1");
var saidaIdade1 = document.getElementById("idade1");
var saidaNome2 = document.getElementById("nome2");
var saidaIdade2 = document.getElementById("idade2");
var resultado = document.getElementById("resultado")

var exercicio3 = {
 
    resultado:[],

    calculo: function () {

        var nomeUm = saidaNome1.value;
        var idadeUm = Number (saidaIdade1.value);
        var nomeDois = saidaNome2.value;
        var idadeDois = Number (saidaIdade2.value);
        var media = (idadeUm + idadeDois /2).toFixed(1);

        this.resultado = `A idade média de ${nomeUm} e ${nomeDois} é ${media}`;
        resultado.innerHTML = this.resultado;
        
    }
};