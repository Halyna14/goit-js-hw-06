const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");
console.log(ul);
const arr = [];
for (let i = 0; i < 6; i += 1) {
  const li = document.createElement("li");
  li.classList.add("js-item");
  li.textContent = ingredients[i];
  arr.push(li);
}
ul.append(...arr);
