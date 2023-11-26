const result = document.getElementById("resultText");
const calc = document.getElementById("calcText");

function insert(num) {
  calc.textContent += num;
  console.log(num);
}

document.getElementById("clear").addEventListener("click", function () {
  calc.textContent = "";
  result.textContent = 0;
});


document.getElementById("equal").addEventListener("click", function () {
  var exp = calc.textContent;
  result.textContent = eval(exp);
  calc.textContent = result.textContent;
});
 
document.getElementById("back").addEventListener("click", function () {
  var exp = calc.textContent;
  calc.textContent = exp.substring(0, exp.length - 1);
});