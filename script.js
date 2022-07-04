const input = document.querySelector("#input-screen");
const buttons = document.getElementsByTagName("button");
console.log(buttons);

const displayNum = (event) => {
  const pressedButton = event.target.value;

  switch (true) {
    case pressedButton == "AC":
      input.value = "";
      break;

    case pressedButton == "+/-":
      reverseNumber();
      break;

    case pressedButton == "=":
      performOperation();
      break;

    case pressedButton == "+":
    case pressedButton == "-":
    case pressedButton == "/":
    case pressedButton == "x": {
      if (
        ["+", "-", "x", "/"].includes(input.value[input.value.length - 1]) &&
        input.value.length > 0
      ) {
        input.value =
          input.value.substring(0, input.value.length - 1) + pressedButton;
        break;
      }
      input.value = input.value + pressedButton;
      break;
    }

    default:
      input.value = input.value + pressedButton;
  }
};

Array.from(buttons).forEach((button) =>
  button.addEventListener("click", displayNum)
);

const performOperation = () => {
  let expression = [];
  let value = NaN;

  switch (true) {
    case input.value.includes("+"):
      expression = input.value.split("+");
      value = parseFloat(expression[0]) + parseFloat(expression[1]);
      break;

    case input.value.includes("-"):
      expression = input.value.split("-");
      value = parseFloat(expression[0]) - parseFloat(expression[1]);
      break;

    case input.value.includes("x"):
      expression = input.value.split("x");
      value = parseFloat(expression[0]) * parseFloat(expression[1]);
      break;

    case input.value.includes("/"):
      expression = input.value.split("/");
      value = parseFloat(expression[0]) / parseFloat(expression[1]);
      break;

    case input.value.includes("%"):
      expression = input.value.split("%");
      value = parseFloat((expression[0] / parseFloat(expression[1])) * 100);
  }

  input.value = value;
};

const reverseNumber = () => {
  input.value = input.value * -1;
  return;
};
