const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList)

ingredients.forEach(ingredient => {
  const listItem = document.createElement('li');

  listItem.textContent = ingredient;

  listItem.classList.add('item');

  ingredientsList.appendChild(listItem);
});

