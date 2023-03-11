// let b = prompt("Boyingizni kiriting");
// let v = prompt("Vazningizni kiriting");
// let bmi = v / (b * b);
// if (bmi < 14.99) {
//   console.log("siz ozro vazin toplashiz kere");
// }
// if (24.99 > bmi && bmi > 14) {
//   console.log("siz soglom insonsiz");
// }

// if (25.99 < bmi) {
//   console.log("sizda vazin bn bogliq muammolar mavjud");
// }

const boy = document.querySelector(".boy");
const vazn = document.querySelector(".kg");
const ok = document.querySelector(".ok");
const bmi = document.querySelector(".title");
const bok = document.querySelector(".cc");

ok.addEventListener("click", function () {
  let b = boy.value / 100;
  let l = b * 2;
  let k = vazn.value;
  let t = k / l;
  let n = t.toFixed(1);
  console.log(n);
  if (n < 18.5) {
    bmi.textContent = "kam vazin";
    bmi.style = "color:apua";
    bok.textContent = n;
  } else if (18.5 < n && n < 24.9) {
    bmi.textContent = "odiy vazin";
    bmi.style = "color:green";
    bok.textContent = n;
  } else if (25 < n && n < 29.9) {
    bmi.textContent = "ortiqcha vazin";
    bmi.style = "color:gold";
    bok.textContent = n;
  } else if (n >= 30) {
    bmi.textContent = "semirib ketgan";
    bmi.style = "color:red";
    bok.textContent = n;
  }
});
