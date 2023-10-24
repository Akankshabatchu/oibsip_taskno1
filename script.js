const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let res ="";

const calculate = (buttonValue) => {
  display.focus();
  if (buttonValue === "=" && res !== "") {
    res = eval(res.replace("%", "/100"));
  } else if (buttonValue === "AC") {
    res = "";
  } else if (buttonValue === "DEL") {
    res = res.toString().slice(0, -1);
  } else {
    if (res === "" && specialChars.includes(buttonValue)) return;
    res += buttonValue;
  }
  display.value = res;
};
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});