const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('ul');

ingredients.map(ingredient => {
  const navItemEl = document.createElement('li');
  navItemEl.textContent = ingredient;
  navItemEl.classList.add('item');
  list.append(navItemEl);
});
