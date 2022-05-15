let min = document.getElementById("minutos");
let valor = document.getElementById("valor");

function calcular (a) {
    a = Number(min.value);
    
    if (a <= 100) {
        valor.innerHTML = `Valor a pagar: R$ 50.00`
    } else {
        let total = (a - 100) * 2 + 50;
        valor.innerHTML = `Valor a pagar: R$ ${total}`;
    }
}