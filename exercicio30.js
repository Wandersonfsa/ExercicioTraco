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