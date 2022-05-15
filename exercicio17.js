let valorA = document.getElementById("numeroA");
let valorB = document.getElementById("numeroB");
let resultado = document.getElementById("resultado");

function calcular(a, b) {

    a = Number(valorA.value);
    b = Number(valorB.value);

    if (a > b || a == b) {
        var calculo = a / b;
        if (Number.isInteger(calculo)) {
            resultado.innerHTML = "Os números são múltiplos";
        } else {
            resultado.innerHTML = "Os números não são múltiplos";
        };
    } else {
        var calculo = b / a;
        if (Number.isInteger(calculo)) {
            resultado.innerHTML = "Os números são múltiplos";
        } else {
            resultado.innerHTML = "Os números não são múltiplos";
        };
    }

};