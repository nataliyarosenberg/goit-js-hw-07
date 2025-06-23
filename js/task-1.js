const ulCategories = document.querySelector('#categories');

const categotyList = ulCategories.querySelectorAll('.item');

console.log(`Number of categories: ${categotyList.length}`);

categotyList.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent; // name of the title
  const categoryElementsCount = item.querySelectorAll('ul > li').length; // quantity of li inside ul

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElementsCount}`);
});
