let valorA = document.getElementById("valorA");
let valorB = document.getElementById("valorB");
let valorC = document.getElementById("valorC");
let resultado = document.getElementById("resultado");

function bhaskara(a, b, c) {
    a = Number(valorA.value)
    b = Number(valorB.value);
    c = Number(valorC.value);


    let delta = Number(b * b - 4 * a * c);
    let x1 = Number(b + Math.sqrt(delta) / (2 * a)).toFixed(4);
    let x2 = Number(b - Math.sqrt(delta) / (2 * a)).toFixed(4);

    if (delta < 0) {
        resultado.innerHTML = "Não possui raizes reais"
    } else {
        resultado.innerHTML = `X1 = ${x1}<br> X2 = ${x2}`
    };


};



