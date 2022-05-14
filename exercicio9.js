let tempo = document.getElementById("segundosA");
let tempoB = document.getElementById("segundosB");
let tempoC = document.getElementById("segundosC");
let tempo2 = document.getElementById("aqui");
let tempo3 = document.getElementById("aqui2");
let tempo4 = document.getElementById("aqui3");

function somar() {

    let qtdSegundos = parseInt(tempo.value);
    const valores = [3600, 60, 1];
    const resultado = [];

    for (let valor of valores) {
        resultado.push(parseInt(qtdSegundos / valor));
        qtdSegundos = qtdSegundos % valor;
    }
    tempo2.innerHTML = resultado.join(":");


    let qtdSegundosB = parseInt(tempoB.value);
    const valoresB = [3600, 60, 1];
    const resultadoB = [];

    for (let valor of valoresB) {
        resultadoB.push(parseInt(qtdSegundosB / valor));
        qtdSegundosB = qtdSegundosB % valor;
    }
    tempo3.innerHTML = resultadoB.join(":");


    let qtdSegundosC = parseInt(tempoC.value);
    const valoresC = [3600, 60, 1];
    const resultadoC = [];

    for (let valor of valoresC) {
        resultadoC.push(parseInt(qtdSegundosC / valor));
        qtdSegundosC = qtdSegundosC % valor;
    }
    tempo4.innerHTML = resultadoC.join(":");



};