const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('ul#ingredients');
const elements = [];
for (let i = 0; i < ingredients.length; i++) {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = ingredients[i];
  ingredientsEl.classList = 'item';
  elements.push(ingredientsEl);
}
listEl.append(...elements);
