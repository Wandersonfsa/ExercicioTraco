let valorA = document.getElementById("valorA");
let valorB = document.getElementById("valorB");
let valorC = document.getElementById("valorC");
let resultado = document.getElementById("resultado");


function calculo (a, b, c) {

       a = Number(valorA.value);
       b = Number(valorB.value);
       c = Number(valorC.value);

      resultado.innerHTML = `Menor: ${Math.min(a, b, c)}`;

};
