let dia = document.getElementById("dia");
let mes = document.getElementById("mes");
let resultado = document.getElementById("resultado");

function signo() {
    let numDay = dia.value;
    let numMes = mes.value;

    
    if (numMes < 1 || numMes > 12) { alert ('Mês inválido!!!')}

    if (numDay < 1 || numDay > 31) { alert ('Dia inválido!!!')}

    if ((numMes == 1 && numDay < 20) || (numMes == 12 && numDay >= 22)) {
        resultado.innerHTML = ("<h1>Capricornio</h1>");

    }

    if ((numMes == 2 && numDay < 19) || (numMes == 1 && numDay >= 22)) {
        resultado.innerHTML = ("<h1>Aquarios</h1>");
    }

    if ((numMes == 3 && numDay < 21) || (numMes == 2 && numDay >= 24)) {
        resultado.innerHTML = ("<h1>Peixes</h1>");

    }

    if ((numMes == 4 && numDay < 20) || (numMes == 3 && numDay >= 23)) {
        resultado.innerHTML = ("<h1>Aries</h1>");

    }

    if ((numMes == 5 && numDay < 21) || (numMes == 4 && numDay >= 23)) {
        resultado.innerHTML = ("<h1>Touro</h1>");

    }

    if ((numMes == 6 && numDay < 22) || (numMes == 5 && numDay >= 23)) {
        resultado.innerHTML = ("<h1>Gemeos</h1>");

    }

    if ((numMes == 7 && numDay < 23) || (numMes == 6 && numDay >= 22)) {
        resultado.innerHTML = ("<h1>Cancer</h1>");

    }

    if ((numMes == 8 && numDay < 23) || (numMes == 7 && numDay >= 21)) {
        resultado.innerHTML = ("<h1>Leao</h1>");

    }

    if ((numMes == 9 && numDay < 23) || (numMes == 8 && numDay >= 20)) {
        resultado.innerHTML = ("<h1>Virgem</h1>");

    }

    if ((numMes == 10 && numDay < 24) || (numMes == 9 && numDay >= 21)) {
        resultado.innerHTML = ("<h1>Libra</h1>");

    }

    if ((numMes == 11 && numDay < 22) || (numMes == 10 && numDay >= 19)) {
        resultado.innerHTML = ("<h1>Escorpiao</h1>");

    }

    if ((numMes == 12 && numDay < 22) || (numMes == 11 && numDay >= 20)) { resultado.innerHTML = ("<h1>Sagitarios</h1>"); }

}