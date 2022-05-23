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