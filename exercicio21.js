let valorA = document.getElementById("valorA");
let resultado = document.getElementById("resultado");

function calcular (a) {
    a = Number (valorA.value);
    let soma = [];
    for (let i = 0; i <=a; i+=2)
    soma = i;
    resultado.innerHTML = soma;
}