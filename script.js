const numberContainer = document.querySelector(".number-container");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  button.textContent === "generate" ? generateNumber() : clearElement();
});

function generateNumber() {
  const str = document.querySelector("#input").value;

  if (!str.includes(0)) {
    const sNumber = str.toString();

    const temp = [];

    for (let i = 0; i < sNumber.length; i++) {
      temp.push(+sNumber.charAt(i));
    }

    let n = sNumber.length - 1;
    for (const number of temp) {
      numberContainer.innerHTML += `<p>${number * 10 ** n}</p>`;
      n--;

      numberContainer.hasChildNodes
        ? (button.innerHTML = "clear")
        : (button.innerHTML = "generate");
    }
  } else {
    alert("jangan  masukkan angka 0");
  }
}

function clearElement() {
  document.location.reload();
}
