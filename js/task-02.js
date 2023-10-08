const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredientsList = document.querySelector("#ingredients");
// console.log(ingredientsList)

// ingredients.forEach(ingredient => {
//   const listItem = document.createElement('li');

//   listItem.textContent = ingredient;

//   listItem.classList.add('item');

//   ingredientsList.appendChild(listItem);
// });

const ingredientsList = document.querySelector("#ingredients");

const listItems = [];


ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;

  listItem.classList.add("item");

  listItems.push(listItem);
});


ingredientsList.append(...listItems);

