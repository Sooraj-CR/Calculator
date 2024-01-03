function displayfunction(display) {
  console.log(display);
  document.getElementById("screen").value =
    document.getElementById("screen").value + display;
}
function clearScreen() {
  document.getElementById("screen").value = "";
}

function equalfunction() {
  let total = document.getElementById("screen").value;
  let result = eval(total);
  document.getElementById("screen").value = result;
}
let operatorssarray = ["+", "-", "/", "*"];
function displayplusfunction(display) {
  // console.log(operatorssarray);
  // document.getElementById("screen").value += display;
  let digits = document.getElementById("screen").value;
  console.log("digits are", digits);
  let lastdigit = digits.charAt(digits.length - 1);
  console.log("lastdigit is", lastdigit);
  if (operatorssarray.includes(lastdigit)) {
    console.log("operator exists");
  } else {
    document.getElementById("screen").value += display;
  }
}
