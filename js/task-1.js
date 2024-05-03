const list = document.querySelector('#categories');

console.log('Numbers of categories:', list.children.length);

Array.from(list.children).forEach(item => {
  console.log('Category:', item.querySelector('h2').textContent);
  console.log('Elements:', item.querySelectorAll('li').length);
});
