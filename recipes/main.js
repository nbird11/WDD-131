import recipes from './recipes.mjs';

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomListEntry(list) {
  const randomIndex = getRandomNumber(list.length);
  return list[randomIndex];
}

function tagsTemplate(tags) {
  if (!tags || tags.length === 0) return '';

  const tagElements = tags.map(tag => `<span class="tag">${tag}</span>`).join('');

  return `<span class="tags">${tagElements}</span>`;
}

function ratingTemplate(rating) {
  let html = `
    <div class="rating">
      <span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
  `;

  for (let i = 1; i <= 5; i++) {
    html += `<span aria-hidden="true" ${i <= rating ? 'class="icon-star">⭐'
      : 'class="icon-star-empty">☆'}
    </span>`;
  }

  return html + '</span></div>';
}

function recipeTemplate(recipe) {
  return `
    <article class="recipe-card">
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="recipe-card-content">
        ${tagsTemplate(recipe.tags)}
        <h2>${recipe.name}</h2>
        ${ratingTemplate(recipe.rating)}
        <p class="description">${recipe.description}</p>
      </div>
    </article>
  `;
}

function renderRecipes(recipes) {
  const main = document.querySelector('main');
  const recipeElements = recipes.map(recipe => recipeTemplate(recipe));
  main.innerHTML = recipeElements.join('');
}

function init() {
  const randomRecipe = getRandomListEntry(recipes);
  renderRecipes([randomRecipe]);
}

init();
