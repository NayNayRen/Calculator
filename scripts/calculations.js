function insert(num) {
  document.calculator.output.value = document.calculator.output.value + num;
}

function equals() {
  const num = document.calculator.output.value;
  if (num) {
    document.calculator.output.value = eval(num);
  }
}
function back() {
  const num = document.calculator.output.value;
  document.calculator.output.value = num.substring(0, num.length - 1);
}
