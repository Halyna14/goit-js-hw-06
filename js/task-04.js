let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
