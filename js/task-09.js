function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

btnEl.addEventListener("click", onBtnClick);

function onBtnClick() {
  colorEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorEl.textContent;
}
