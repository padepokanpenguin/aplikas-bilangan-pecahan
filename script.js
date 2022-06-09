const paragraph = document.querySelector(".number-container");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  clickMe();
});

function clickMe() {
  const str = document.querySelector("#input").value;

  if (!str.includes(0)) {
    const sNumber = str.toString();

    const temp = [];
    const res = [];

    for (let i = 0; i < sNumber.length; i++) {
      temp.push(+sNumber.charAt(i));
    }
    let n = sNumber.length - 1;
    for (const number of temp) {
      res.push(number * 10 ** n);
      n--;
    }

    paragraph.innerHTML = res;
  } else {
    alert("jangan  masukkan angka 0");
  }
}
