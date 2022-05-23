let num = document.getElementById("num");
let resposta = document.getElementById("resposta");


function tabuada() {
    vfinal = Number(num.value);
    resposta.innerHTML = "<br/>";
    for (let y = 1; y <= 10; y++) {
        let multiplicacao = vfinal * y;

        resposta.innerHTML += `${vfinal} x ${y} = ${multiplicacao} <br/>`; //
    };
};