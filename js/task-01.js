const ulItemsEl = document.querySelectorAll('.item');
console.log(`Number of categories:`, ulItemsEl.length);

ulItemsEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`)
})

