const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const body = document.querySelector("body");
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
let btnId = null;

btnStart.addEventListener("click", onStart);
function onStart() {
  if (!btnId) {
    btnId = setInterval(() => {
      const randomInd = randomIntegerFromInterval(0, colors.length - 1);
      body.style.backgroundColor = colors[randomInd];
    }, 1000);
  }
}
btnStop.addEventListener("click", onStop);
function onStop() {
  clearInterval(btnId);
  btnId = null;
}
