let palavra = document.getElementById("palavra");
let result = document.getElementById("resultado");
const vogais = 'aeiou';
const consoantes = 'bcdfghjklmnpqrstvwxyz';

function somar() {
    let frase = palavra.value;
    let contarVogal = 0;
    let contarCons = [];
    for (let i = 0; i < vogais.length; i++) {
            for (let k = 0; k < frase.length; k++) {
                if (vogais[i] == frase[k]) {
                    contarVogal++
                    result.innerHTML = `Vogais: ${contarVogal} Consoantes: ${contarCons}`;
                }
            }        
    }
}




