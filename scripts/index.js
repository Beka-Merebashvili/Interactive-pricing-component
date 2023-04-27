let range = document.getElementById("myRange");
let pageWiewers = document.getElementsByTagName("h2")[0];
let price = document.getElementsByClassName("price")[0];
let button = document.getElementsByClassName("click")[0];
let month = document.getElementsByClassName("month")[0];
let greenLine = document.getElementById("green-line");
let biling = false;

button.addEventListener("click", function () {
  button.classList.toggle("active");
  biling = !biling;
  calculate();
});

range.addEventListener("change", function () {
  calculate();
});

let calculate = () => {
  if (!biling) {
    month.innerText = "/ month";
    if (range.value == 1) {
      pageWiewers.innerText = "10k PAGEVIEWS";
      price.innerText = "$8.00";
      greenLine.style.width = "0%";
    }
    if (range.value == 2) {
      pageWiewers.innerText = "50k PAGEVIEWS";
      price.innerText = "$12.00";
      greenLine.style.width = "25%";
    }
    if (range.value == 3) {
      pageWiewers.innerText = "100k PAGEVIEWS";
      price.innerText = "$16.00";
      greenLine.style.width = "50%";
    }
    if (range.value == 4) {
      pageWiewers.innerText = "500k PAGEVIEWS";
      price.innerText = "$24.00";
      greenLine.style.width = "75%";
    }
    if (range.value == 5) {
      pageWiewers.innerText = "1m PAGEVIEWS";
      price.innerText = "$36.00";
      greenLine.style.width = "100%";
    }
  } else {
    month.innerText = "/ year";
    if (range.value == 1) {
      pageWiewers.innerText = "10k PAGEVIEWS";
      price.innerText = "$72.00";
      greenLine.style.width = "0%";
    }
    if (range.value == 2) {
      pageWiewers.innerText = "50k PAGEVIEWS";
      price.innerText = "$108.00";
      greenLine.style.width = "25%";
    }
    if (range.value == 3) {
      pageWiewers.innerText = "100k PAGEVIEWS";
      price.innerText = "$144.00";
      greenLine.style.width = "50%";
    }
    if (range.value == 4) {
      pageWiewers.innerText = "500k PAGEVIEWS";
      price.innerText = "$216.00";
      greenLine.style.width = "75%";
    }
    if (range.value == 5) {
      pageWiewers.innerText = "1m PAGEVIEWS";
      price.innerText = "$324.00";
      greenLine.style.width = "100%";
    }
  }
};
