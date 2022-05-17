let valorA = document.getElementById("valorA");
let resultado = document.getElementById("resultado");


function  calculo() {
        let num = valorA.value;
        let html = '';
        for (i = 2; i <= num; i++) {
            if (i % 2 === 0){
                html += i + '<br/>'
                resultado.innerHTML = html;
            };
        }
    };