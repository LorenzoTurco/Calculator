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
  if (parseInt(input.value) > 0) {
    console.log(input.value);
    console.log(parseInt(input.value) - parseInt(input.value) * 2);
    input.value = parseInt(input.value) - parseInt(input.value) * 2;
    console.log(input.value);

    return;
  }
  input.value = input.value * -1;
  return;
};
