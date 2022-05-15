let valorA = document.getElementById("numeroA");
let valorB = document.getElementById('numeroB');
let resultado = document.getElementById("resultado");

function calculo(a, b) {

    a = Number(valorA.value);
    b = Number(valorB.value);

    let soma = 0;
    for (let i = a; i <= b; i++)
        soma += i;
    resultado.innerHTML = soma;

};