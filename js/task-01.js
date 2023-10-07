const categoriesList = document.querySelector("#categories");

const categoryItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;

  const categoryElements = category.querySelectorAll("ul li");
  
  const categoryElementCount = categoryElements.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElementCount}`);
});













