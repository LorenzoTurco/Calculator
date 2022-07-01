const input = document.querySelector("#input-screen");

const button1 = document.querySelector("#button1");

const buttons = document.getElementsByTagName("button");
console.log(buttons);

const displayNum = (event) => {
  input.value = input.value + event.target.value;
};

Array.from(buttons).forEach((button) =>
  button.addEventListener("click", displayNum)
);
