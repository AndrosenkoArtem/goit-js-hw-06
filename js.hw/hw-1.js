const listEl = document.querySelectorAll('li.item');
console.log('Number of categories:', listEl.length);

listEl.forEach(el => {
  const titleEl = el.querySelector('h2');
  const Technologies = el.querySelectorAll('ul li');
  console.log('Category:', titleEl.textContent);
  console.log('Elements:', Technologies.length);
});
