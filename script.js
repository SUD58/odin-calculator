let num1 = "";
let num2 = "";
let operator = "";
let currentNum = "";
let result = "";
let isNum2 = false;

const display = document.querySelector("#display");
const numberButtons = document.querySelector("#number-buttons");
const operatorButtons = document.querySelector("#operator-buttons");
const clearButton = document.querySelector("#clear-button");
const equalOperator = document.querySelector("#equal-operator");

numberButtons.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    currentNum += event.target.innerText;
    console.log(currentNum);
  }
  display.textContent = currentNum;
});

operatorButtons.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    operator = event.target.innerText;
    if (!isNum2) {
      num1 = currentNum;
      isNum2 = true;
      console.log(`Num1: ${num1}`);
    } else {
      num2 = currentNum;
      console.log(`Num2: ${num2}`);
    }
    currentNum = "";
    display.textContent += operator;
  }
});

equalOperator.addEventListener("click", () => {
  if (!isNum2) {
    alert("Input operation and second number");
  } else {
    num2 = currentNum;
    console.log(`Num2: ${num2}`);
  }

  result = operate(num1, num2, operator);
  display.textContent = result;
  num1 = result;
});

clearButton.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  currentNum = "";
  isNum2 = false;
  display.textContent = "";
});

function operate(number1, number2, operation) {
  number1 = parseFloat(number1);
  number2 = parseFloat(number2);

  switch (operation) {
    case "+":
      return add(number1, number2);
    case "-":
      return subtract(number1, number2);
    case "×":
      return multiply(number1, number2);
    case "÷":
      return divide(number1, number2);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
