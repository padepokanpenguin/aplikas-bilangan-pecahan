const paragraph = document.querySelector(".number-container");
const button = document.querySelector("#btn");
const inputValue = document.querySelector("#input").value;

button.addEventListener("click", splitNumber);

console.log(inputValue)
function splitNumber(inputValue) {
  const sNumber = inputValue.toString();
  const temp = [];
  const result = [];

  for (let i = 0; i < sNumber.length; i++) {
    temp.push(+sNumber.charAt(i));
  }

  let n = sNumber.length - 1;
  console.log(inputValue);
  for (const number of temp) {
    result.push(+number * Math.pow(10, n));
    n--;
  }
  paragraph.innerHTML = result;
  console.log(result);
}

// splitNumber(23567);
