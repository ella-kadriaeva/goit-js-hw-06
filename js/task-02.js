const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('ul');

const elements = ingredients.map(ingredient => {
  const navItemEl = document.createElement('li');
  navItemEl.textContent = ingredient;
  navItemEl.classList.add('item');
  return navItemEl;
});
list.append(...elements);