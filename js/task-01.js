const categoriesList = document.querySelector("#categories");

const categoryItems = categoriesList.children;

console.log(`Number of categories: ${categoryItems.length}`);

const elementLiRef = document.querySelectorAll(".item");

elementLiRef.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});



















