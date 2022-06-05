const botoes = document.querySelectorAll('[data-abre-modal]');
for (let botao of botoes) {
    botao.addEventListener('click', abreModal);
};

function abreModal(e) {
    const botaoClicado = e.currentTarget;
    const seletorDoModal = botaoClicado.dataset.abreModal;
    const modal = document.querySelector(seletorDoModal);
    modal.classList.add('visivel');
};

const botoesDeFechar = document.querySelectorAll('.fechar-modal')
botoesDeFechar.forEach(fechar1 => fechar1.addEventListener('click', fecharModal));

function fecharModal(e) {
    const fecharModal = e.currentTarget;
    const modal = fecharModal.closest('.modal')
    modal.classList.remove('visivel');
};

const mascara = document.querySelector('#mascara');
mascara.addEventListener('click', fecharModalAberto);

function fecharModalAberto() {
    document.querySelector('.modal.visivel').classList.remove('visivel');
};

//Script exercício 1
/*

var exercicioUM = {

    areaTerreno: 0,
    precoTerreno: 0,

    calculo: function () {
        var saidaLargura = document.getElementById("largura");
        var saidaComprimento = document.getElementById("comprimento");
        var saidaValor = document.getElementById("valor");
        var calculoArea = document.getElementById("areaTerreno");
        var calculoPreco = document.getElementById("precoTerreno");


        var largura = Number(saidaLargura.value);
        var comprimento = Number(saidaComprimento.value);
        var valor = Number(saidaValor.value);

        this.areaTerreno = largura * comprimento;
        calculoArea.innerHTML = (this.areaTerreno).toFixed(2);

        this.precoTerreno = valor * areaTerreno.innerHTML;
        calculoPreco.innerHTML = (this.precoTerreno).toFixed(2);
    }
};

//Script exercício 2



var exercicio = {

    area: 0,
    perimetro: 0,
    diagonal: 0,

    calculo: function () {
        var saidaBase = document.getElementById("base");
        var saidaAltura = document.getElementById("altura");
        var saidaArea = document.getElementById("area");
        var saidaPerimetro = document.getElementById("perimetro");
        var saidaDiagonal = document.getElementById("diagonal");

        var base = Number(saidaBase.value);
        var altura = Number(saidaAltura.value);

        this.area = base * altura;
        saidaArea.innerHTML = (this.area).toFixed(4);

        this.perimetro = base * 2 + altura * 2;
        saidaPerimetro.innerHTML = (this.perimetro).toFixed(4);

        this.diagonal = Math.pow(base, 2) + Math.pow(altura, 2);
        saidaDiagonal.innerHTML = Math.sqrt(this.diagonal).toFixed(4);
    }
};

//Script exercício 3



var exercicio3 = {

    resultado: [],

    calculo: function () {
        var saidaNome1 = document.getElementById("nome1");
        var saidaIdade1 = document.getElementById("idade1");
        var saidaNome2 = document.getElementById("nome2");
        var saidaIdade2 = document.getElementById("idade2");
        var resultadoEx3 = document.getElementById("resultadoEx3");

        var nomeUm = saidaNome1.value;
        var idadeUm = Number(saidaIdade1.value);
        var nomeDois = saidaNome2.value;
        var idadeDois = Number(saidaIdade2.value);
        var soma = idadeUm + idadeDois;
        var media = (soma / 2).toFixed(1)

        this.resultado = `A idade média de ${nomeUm} e ${nomeDois} é ${media}`;
        resultadoEx3.innerHTML = this.resultado;
    }
};

//Script exercicio 4



var exercicio4 = {

    troco: 0,

    calculo: function () {
        var saidaPreco = document.getElementById("preco");
        var saidaQuantidade = document.getElementById("quantidade");
        var saidaPagamento = document.getElementById("pagamento");
        var saidaTroco = document.getElementById("troco");

        var preco = Number(saidaPreco.value);
        var volume = Number(saidaQuantidade.value);
        var caixa = Number(saidaPagamento.value);
        var total = preco * volume;

        if (caixa < total) {
            return alert("Dinheiro insuficiente!!!")
        } else {

            this.troco = caixa - total;
            saidaTroco.innerHTML = (this.troco).toFixed(2);
        }
    }

};


// Script exercício 5

let exercicio5 = {

    area: 0,

    calculo: function () {
        let saidaRaio = document.getElementById("raio");
        let saidaArea = document.getElementById("area");
        let botao = document.getElementById("botao")

        let raio = Number(saidaRaio.value);
        let calculoArea = (Math.PI * (raio * raio)).toFixed(3);

        this.area = `Area: ${calculoArea}`;
        saidaArea.innerHTML = this.area;
    }
};




/*
//Script exercício 6

var saidaNome = document.getElementById("name");
var saidaValor = document.getElementById("valorHora");
var saidaHora = document.getElementById("horaTrabalhada");
var saidaCalculo = document.getElementById("saida");

var exercicio6 = {

    pagamento: 0,

    calculo: function () {

            var nome = saidaNome.value;
            var valor = Number (saidaValor.value);
            var hora = Number(saidaHora.value);
            var valorHora = (valor * hora).toFixed(2);

            this.pagamento = `O pagamento para ${nome} deve ser ${valorHora}!!`
            saidaCalculo.innerHTML = this.pagamento;
    }
};

$(function() {
    $('.Preco').maskMoney({ decimal: '.', thousands: '', precision: 2 });
  })

//Script exercicio 7

$(function() {
    $('.distancia').maskMoney({ decimal: '.', thousands: '', precision: 1 });
  });

var saidaDistancia = document.getElementById("kmPercorridos");
var saidaCombustivel = document.getElementById("combustivel");
var saidaConsumo = document.getElementById("consumo");

var exercicio7 = {

        consumoMedio: 0,

    calculo: function () {

        var distancia = Number(saidaDistancia.value);
        var combustivel = Number(saidaCombustivel.value);
        var consumo = (distancia / combustivel).toFixed(3);

        this.consumoMedio = `Consumo médio = ${consumo}`;
        saidaConsumo.innerHTML = this.consumoMedio;
    }
};

//Script exercício 8

$(function() {
    $('.medida').maskMoney({ decimal: '.', thousands: '', precision: 1 });
  });

var saidaA = document.getElementById("medidaA");
var saidaB = document.getElementById("medidaB");
var saidaC = document.getElementById("medidaC");
var resultadoA = document.getElementById("resultadoA");
var resultadoB = document.getElementById("resultadoB");
var resultadoC = document.getElementById("resultadoC");

var exercicio8 = {

    areaQuadrado: 0,
    areaTriangulo: 0,
    areaTrapezio: 0,

    calculo: function () {

        var medidaA = Number(saidaA.value);
        var medidaB = Number(saidaB.value);
        var medidaC = Number(saidaC.value);

        this.areaQuadrado = Math.pow(medidaA, 2).toFixed(4);
        resultadoA.innerHTML = this.areaQuadrado;

        this.areaTriangulo = (medidaB * medidaA / 2).toFixed(4);
        resultadoB.innerHTML = this.areaTriangulo;

        this.areaTrapezio = ((medidaA + medidaB) * medidaC / 2).toFixed(4);
        resultadoC.innerHTML = this.areaTrapezio;
    }
};

// Script exercício 9

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

// Script exercício 10

let primeiroValor = document.getElementById("valorA");
let segundoValor = document.getElementById("valorB");
let terceiroValor = document.getElementById("valorC");
let resultado = document.getElementById("resultado");

function calculo (a, b, c) {

       a = Number(primeiroValor.value);
       b = Number(segundoValor.value);
       c = Number(terceiroValor.value);

      resultado.innerHTML = `Menor: ${Math.min(a, b, c)}`;
};

// Script exercício 11

$(function() {
    $('.entrada').maskMoney({ decimal: '.', thousands: '', precision: 1 });
  });

let notaA = document.getElementById("notaA");
let notaB = document.getElementById("notaB");
let resultado = document.getElementById("resultado");

function calculo (a, b) {

    a = Number(notaA.value);
    b = Number(notaB.value);
    let notaFinal = Number(a + b).toFixed(1);
    
    if (notaFinal >= 60) {
        resultado.innerHTML= `NOTA FINAL: ${notaFinal}`;
    } else {
        resultado.innerHTML = `NOTA FINAL: ${notaFinal}<br> REPROVADO`
    }
};

// Script exercício 12

let coeficienteA = document.getElementById("valorA");
let coeficienteB = document.getElementById("valorB");
let coeficienteC = document.getElementById("valorC");
let resultado = document.getElementById("resultado");

function bhaskara(a, b, c) {
    a = Number(coeficienteA.value)
    b = Number(coeficienteB.value);
    c = Number(coeficienteC.value);

    let delta = Number(b * b - 4 * a * c);
    let x1 = Number(b + Math.sqrt(delta) / (2 * a)).toFixed(4);
    let x2 = Number(b - Math.sqrt(delta) / (2 * a)).toFixed(4);

    if (delta < 0) {
        resultado.innerHTML = "Não possui raizes reais"
    } else {
        resultado.innerHTML = `X1 = ${x1}<br> X2 = ${x2}`
    };
};

// Script exercício 13

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

// Script exercício 14

$(function() {
    $('.valor').maskMoney({ decimal: '.', thousands: '', precision: 2 });
  });

let preco = document.getElementById("preco");
let qtd = document.getElementById("qtd");
let dinheiro = document.getElementById("dinheiro");
let troco = document.getElementById("troco");

function calcular (a, b, c) {
    a = Number(preco.value);
    b = Number(qtd.value);
    c = Number(dinheiro.value);

    let soma = (a * b).toFixed(2);
    let caixa = (c - soma).toFixed(2);

    if (a * b > c) {
        troco.innerHTML = `Dinheiro insuficiente, faltam ${a * b - c} reais!`
    } if (a * b - c ==1) {
        troco.innerHTML = `Dinheiro insuficiente, falta ${a * b - c} real!`
    } if (a * b - c ==0) {
        troco.innerHTML = `Pagamento Concluído!`;
    } if (c > soma) {
        troco.innerHTML = `Troco = R$ ${caixa}`;
    }
    
};

// Script exercício 15

$(function() {
    $('.valor').maskMoney({ decimal: '.', thousands: '', precision: 1 });
  });

let medida = document.getElementById("medida");
let classificacao = document.getElementById("classificacao");

let exercicio15 = {

    Normal: "De 0 a 100",
    Elevado: "De 101 a 140",
    Diabetes: "Acima de 140",

    calculo: function (a) {
        a = Number(medida.value);

        if (a <= 100) {
            classificacao.innerHTML = `Classificação: Normal!`
        } if (a > 100 && a <=140) {
            classificacao.innerHTML = `Classificação: Elevado!`
        } if (a >140) {
            classificacao.innerHTML = `Classificação: Diabetes!!!`
        } if (a < 0) {
            classificacao.innerHTML = `Digite um número maior ou igual a 0`;
        } 
    }

};

// Script exercício 16

$(function() {
    $('.valor').maskMoney({ decimal: '.', thousands: '', precision: 2 });
  });

let resultado = document.getElementById("resultado");
let distanciaA = document.getElementById("distanciaA");
let distanciaB = document.getElementById("distanciaB");
let distanciaC = document.getElementById("distanciaC");

function maiorDistancia (a, b, c, d) {

    a = Number(distanciaA.value);
    b = Number(distanciaB.value);
    c = Number(distanciaC.value);
    resultado.innerHTML = `Maior distância = ${Math.max(a, b, c).toFixed(2)}`;
};

// Script exercício 17

let valorA = document.getElementById("numeroA");
let valorB = document.getElementById("numeroB");
let resultado = document.getElementById("resultado");

function calcular(a, b) {

    a = Number(valorA.value);
    b = Number(valorB.value);

    if (a > b || a == b) {
        var calculo = a / b;
        if (Number.isInteger(calculo)) {
            resultado.innerHTML = "Os números são múltiplos";
        } else {
            resultado.innerHTML = "Os números não são múltiplos";
        };
    } else {
        var calculo = b / a;
        if (Number.isInteger(calculo)) {
            resultado.innerHTML = "Os números são múltiplos";
        } else {
            resultado.innerHTML = "Os números não são múltiplos";
        };
    }

};

// Script exercício 18



function calculo()
{
 var num = parseInt(document.getElementById("num").value);
 var resp = document.getElementById("resposta");
 
 if(document.getElementById("CtoF").checked==true)
  resp.innerHTML = ctof(num).toFixed(2);
 if(document.getElementById("FtoC").checked==true)
  resp.innerHTML = ftoc(num).toFixed(2);
}
function ctof(x)
{
 return (1.8*x + 32);
}

function ftoc(x)
{

 return ( (x-32)*5/9 );
}

// Script exercício 19

$(function() {
    $('.valor').maskMoney({ decimal: '.', thousands: '', precision: 2 });
  });


let salario = document.getElementById("salario");
let resultado = document.getElementById("resultado");

let exercicio19 = {

    aumentoA: 20,
    aumentoB: 15,
    aumentoC: 10,
    aumentoD: 05,

    calculo: function () {

        let saldo = Number(salario.value);
        if (saldo <= 999) {
            let aumento = saldo / 100 * this.aumentoA;
            let novoSalario = saldo + aumento;
            resultado.innerHTML = `Novo salário = R$ ${(novoSalario).toFixed(2)} <br> Aumento = R$ ${(aumento).toFixed(2)}<br> Porcentagem = ${this.aumentoA}%`;
        } if (saldo >= 1000 && saldo <= 2999) {
            let aumento = saldo / 100 * this.aumentoB;
            let novoSalario = saldo + aumento;
            resultado.innerHTML = `Novo salário = R$ ${(novoSalario).toFixed(2)} <br> Aumento = R$ ${(aumento).toFixed(2)}<br> Porcentagem = ${this.aumentoB}%`;
        } if (saldo >= 3000 && saldo <= 7999) {
            let aumento = saldo / 100 * this.aumentoC;
            let novoSalario = saldo + aumento;
            resultado.innerHTML = `Novo salário = R$ ${(novoSalario).toFixed(2)} <br> Aumento = R$ ${(aumento).toFixed(2)}<br> Porcentagem = ${this.aumentoC}%`;
        } if (saldo >= 8000) {
            let aumento = saldo / 100 * this.aumentoD;
            let novoSalario = saldo + aumento;
            resultado.innerHTML = `Novo salário = R$ ${(novoSalario).toFixed(2)} <br> Aumento = R$ ${(aumento).toFixed(2)}<br> Porcentagem = ${this.aumentoD}%`;
        } 
    }
};

// Script exercício 20

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

// Script exercício 21

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

// Script exercício 22

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

// Script exercício 23

let valorA =  document.getElementById("numeroA");
let valorB =  document.getElementById("numeroB");
let resultado = document.getElementById("resultado");
let botao = document.getElementById("botao");

function calculo() {

    a = parseInt(valorA.value);
    b = parseInt(valorB.value);

    let soma = 0;
    for (let i = a; i <= b; i++){
        if (i % 2 === 1){
            soma += i;
            resultado.innerHTML = soma;
        }
    }

};


botao.addEventListener('click', () => {
  calculo();
});

// Script exercício 24

const input1 = document.querySelector(".input1");
const btnConvert = document.querySelector(".ordenar");

function sortNumbers(inputText) {
  let numArray = inputText.split(",");
  numArray.sort((a,b) => {return a - b});

  document.getElementById("resultado").innerText = (` ${ numArray} `); 

  return  numArray;
}


btnConvert.addEventListener('click', function () {
  sortNumbers(input1.value);

});

// Script exercício 25

let dia = document.getElementById("dia");
let mes = document.getElementById("mes");
let resultado = document.getElementById("resultado");

function signo() {
    let numDay = dia.value;
    let numMes = mes.value;


    if (numMes < 1 || numMes > 12) { alert('Mês inválido!!!') }

    if (numDay < 1 || numDay > 31) { alert('Dia inválido!!!') }

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

    if ((numMes == 12 && numDay < 22) || (numMes == 11 && numDay >= 20)) {
        resultado.innerHTML = ("<h1>Sagitarios</h1>");
    }

};

// Script exercício 26

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
};

// Script exercício 27

let valor = document.getElementById("value");
let resultado = document.getElementById("resultado");

function verPalindrono (a) {
    a = valor.value; 
        for(var i = 0; i < a.length; i+=1)
         if (a[i] != a[a.length - i - 1]) {
             resultado.innerHTML = 'Não é palindrono'
         } else { resultado.innerHTML = 'Palindrono'}
};

// Script exercício 28

const input1 = document.querySelector(".input1");
const btnConvert = document.querySelector(".ordenar");

function sortNumbers(inputText) {
  let numArray = inputText.split(",");
  numArray.sort((a,b) => {return a - b});

  document.getElementById("resultado").innerText = (` Menor número = ${ Math.min(...numArray)} Maior número = ${Math.max(...numArray)} `); 

  return  numArray;
}


btnConvert.addEventListener('click', function () {
  sortNumbers(input1.value);

});

// Script exercício 29

//Utilizando jquery para bloquear letras e o restante dos caracteres especiais.
$('#cnpj').on('keypress', function() {
    var regex = new RegExp("[0-9/.-]+$");
    var _this = this;
    // Curta pausa para esperar colar para completar
    setTimeout( function(){
        var texto = $(_this).val();
        if(!regex.test(texto))
        {
            $(_this).val(texto.substring(0, (texto.length-1)))
        }
    }, 100);
});


let numCnpj = document.getElementById("cnpj");
let validacao = document.getElementById("resultado");






function validarCNPJ(cnpj) {
    cnpj = numCnpj.value;
 
    cnpj = cnpj.replace(/[^\d]+/g,'');

    if(cnpj == '') {
        validacao.innerHTML = "CNPJ inválido";
    }
     
    if (cnpj.length != 14) {
        validacao.innerHTML = "CNPJ inválido";
    }
        
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999") {
            validacao.innerHTML = "CNPJ inválido";
        }
        
         
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)){
        validacao.innerHTML = "CNPJ inválido";
    }
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)){
        validacao.innerHTML = "CNPJ inválido";
    } else {  
          validacao.innerHTML = "Valido"
        }

    
};

// Script exercício 30

let numeros = document.getElementById("numeros");
let resultado = document.getElementById("resultado");

function escrever (){
    let num = numeros.value;
    var unidades=["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
        var especiais=["Dez","Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove"]; 
        var dezenas=["Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
    	
        if (num > 99) {
            resultado.innerHTML = "Digíte um número de 1 a 99";
        }
        //Valores com 1 algarismo
        if(num.length === 1) {
            //Imprimir unidadades
            resultado.innerHTML = (unidades[parseInt(num[0])]);
        }	

        //Valores com 2 algarismos
        else if(num.length === 2) {
            //Especiais
            if((num[0]=='1') && (num[1]=='0'||num[1]=='1'||num[1]=='2'||num[1]=='3'||num[1]=='4'||num[1]=='5'||num[1]=='6'||num[1]=='7'||num[1]=='8'||num[1]=='9')) {
                resultado.innerHTML =(especiais[parseInt(num[1])]);
            }
        	
            //Dezenas
            else if((num[0]=='2'||num[0]=='3'||num[0]=='4'||num[0]=='5'||num[0]=='6'||num[0]=='7'||num[0]=='8'||num[0]=='9') && num[1]=='0') {
                resultado.innerHTML = (dezenas[parseInt(num[0]-2)]);
            }

            //Dezenas compostas
            else {
                resultado.innerHTML = (dezenas[parseInt(num[0]-2)]+" e "+unidades[parseInt(num[1])]);
            }
        }

}

*/
