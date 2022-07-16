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

    case pressedButton == "%":
      percentage();
      break;

    case pressedButton == ".":
      addDot();
      break;

    case pressedButton == "=":
      performOperation();
      break;

    case pressedButton == "+":
    case pressedButton == "-":
    case pressedButton == "/":
    case pressedButton == "x": {
      if (input.value.length == 0) break; //DONT MAKE OPERATOR BE FIRST DIGIT

      //CANT PUT AN OPERATOR AFTER AN OPERATOR - CHANGE OPERATOR (IF OPERATOR LAST DIGIT)
      if (["+", "-", "x", "/"].includes(input.value[input.value.length - 1])) {
        console.log("Cant put an operator after an operator");
        input.value =
          input.value.substring(0, input.value.length - 1) + pressedButton;

        break;
      }

      // IF YOU ARE TRYING TO ADD A SECOND VALID OPERATOR  EVAL THE EXPRESSION

      const operatorsRegex = new RegExp(/[x+/-]/);
      if (operatorsRegex.test(input.value.substring(1))) {
        performOperation();
      }

      input.value = input.value + pressedButton;
      break;
    }

    default:
      console.log("normal number");
      input.value = input.value + pressedButton;
  }
};

Array.from(buttons).forEach((button) =>
  button.addEventListener("click", displayNum)
);

const performOperation = () => {
  let expression = [];
  let value = NaN;

  switch (
    true //includes(searchElement, fromIndex)
  ) {
    case input.value.includes("+"):
      expression = input.value.split("+");
      value = parseFloat(expression[0]) + parseFloat(expression[1]);
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

    case input.value.substring(1).includes("-"):
      if (input.value[0] != "-") {
        expression = input.value.split("-");
        value = parseFloat(expression[0]) - parseFloat(expression[1]);
      } else {
        expression = input.value.substring(1).split("-");
        value = parseFloat(expression[0] * -1) - parseFloat(expression[1]);
      }
  }

  input.value = value;
};

const reverseNumber = () => {
  if (/[x+/-]/.test(input.value.substring(1))) {
    input.value =
      input.value[0] + input.value.substring(1).replace(/[x+/-]/, "");
  }

  input.value = input.value * -1;
  return;
};

const percentage = () => {
  console.log(input.value.substring(1));
  if (/[x+/-]/.test(input.value.substring(1))) return;

  input.value = input.value / 100;
  return;
};

const addDot = () => {
  if (input.value[input.value.length - 1] == ".") {
    return;
  }

  input.value += ".";
};
