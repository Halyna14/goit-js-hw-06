const categEl = document.querySelector("#categories");
const categItemEl = document.querySelectorAll(".item");

console.log("Number of categories:", categEl.children.length);

for (let i = 0; i < categItemEl.length; i++) {
  console.log("Category: " + categItemEl[i].querySelector("h2").textContent);
  console.log("Elements: " + categItemEl[i].querySelectorAll("ul li").length);
}
