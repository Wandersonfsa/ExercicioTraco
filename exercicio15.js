$(function() {
    $('.valor').maskMoney({ decimal: '.', thousands: '', precision: 1 });
  });

let medida = document.getElementById("medida");
let classificacao = document.getElementById("classificacao");

let exercicio15 = {

    Normal: "De 0 a 100",
    Elevado: "De 101 a 140",
    Diabetes: "Acima de 140",

    calculo: function (a) {
        a = Number(medida.value);

        if (a <= 100) {
            classificacao.innerHTML = `Classificação: Normal!`
        } if (a > 100 && a <=140) {
            classificacao.innerHTML = `Classificação: Elevado!`
        } if (a >140) {
            classificacao.innerHTML = `Classificação: Diabetes!!!`
        } if (a < 0) {
            classificacao.innerHTML = `Digite um número maior ou igual a 0`;
        } 
    }

}