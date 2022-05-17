let valorA = document.getElementById("valorA");
let resultado = document.getElementById("resultado");

let exercicio21 = {

    valor: [],
    
    calculo: function () {
        let num = valorA.value;
        
        for (i = 2; i <= num; i++) {
            if (i % 2 == 0){
                this.valor.push (i)
                resultado.innerHTML = this.valor;
            };
        };
    }


};