var arr = ["8", "8", "444.9", "528.9", "528.9"];
var min = arr.map(Number).reduce(function(a, b) {
  return Math.min(a, b);
});

console.log(min); // 444.9