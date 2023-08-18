function insert(num) {
  document.calculator.output.value = document.calculator.output.value + num;
}

function equals() {
  const expression = document.calculator.output.value;
  try {
    eval(expression);
    if (eval(expression) === undefined) {
      return document.calculator.output.value = 'Empty Input...'
    } else {

      return document.calculator.output.value = eval(expression);
    }
  }
  catch (error) {
    // console.log(error);
    return document.calculator.output.value = 'Not Valid...';
  }
}

function back() {
  const num = document.calculator.output.value;
  document.calculator.output.value = num.substring(0, num.length - 1);
}
