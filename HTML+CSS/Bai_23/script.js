const input = document.querySelector("input");
const buttonSend = document.querySelector("#send");
const buttonClear = document.querySelector("#clear");
const buttonUp = document.querySelector("#up");

const resultDiv = document.querySelector("#result");

buttonSend.addEventListener("click", () => {
  const name = input.name;
  const value = input.value;
  if (value) {
    localStorage.setItem(name, value);
    const email = localStorage.getItem("email");
    resultDiv.innerHTML = email;
  }
});

buttonClear.addEventListener("click", () => {
  localStorage.clear();
  count = 0;
  resultDiv.innerHTML = "";
});

let count = 0;
buttonUp.addEventListener("click", () => {
  localStorage.setItem(`key${count}`, `value${count}`);
  count++;
  localStorage.setItem("key" + count, " value" + count);
  count++;
});
