const backButton = document.querySelector('.back-btn');
const equalsButton = document.querySelector('.equals-btn');
const outputEntered = document.querySelector('.output-entered');
const clearButton = document.querySelector('.clear-btn');
let buttons = document.querySelectorAll('.btn');

function insert(number) {
  if (document.calculator.output.value === 'Empty Input...' || document.calculator.output.value === 'Invalid Input...') {
    document.calculator.output.value = '';
  }
  document.calculator.output.value = document.calculator.output.value + number;
}

function back() {
  const expression = document.calculator.output.value;
  document.calculator.output.value = expression.substring(0, expression.length - 1);
}

function evaluate() {
  const expression = document.calculator.output.value;
  try {
    eval(expression);
    if (eval(expression) === undefined) {
      return document.calculator.output.value = 'Empty Input...';
    } else {
      outputEntered.innerHTML = `
        <span>Expression Used :</span>
        <p>${document.calculator.output.value}</p>
      `;
      outputEntered.classList.add('output-entered-action');
      return document.calculator.output.value = eval(expression);
    }
  }
  catch (error) {
    // console.log(error);
    return document.calculator.output.value = 'Invalid Input...';
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    insert(button.value);
  });
});

clearButton.addEventListener('click', () => {
  outputEntered.classList.remove('output-entered-action');
  document.calculator.output.value = '';
});

backButton.addEventListener('click', () => {
  back();
});

equalsButton.addEventListener('click', () => {
  evaluate();
});
