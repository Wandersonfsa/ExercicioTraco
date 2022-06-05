let valor = document.getElementById("value");
let resultado = document.getElementById("resultado");

function verPalindrono (a) {
    a = valor.value; 
        for(var i = 0; i < a.length; i+=1)
         if (a[i] != a[a.length - i - 1]) {
             resultado.innerHTML = 'Não é palindrono'
         } else { resultado.innerHTML = 'Palindrono'}
}


