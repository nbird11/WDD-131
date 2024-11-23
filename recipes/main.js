import recipes from './recipes.mjs';

/**
 * @typedef {Object} Recipe
 * @property {string} author
 * @property {string} url
 * @property {string} isBasedOn
 * @property {string} cookTime
 * @property {string} datePublished
 * @property {string[]} tags
 * @property {string} description
 * @property {string} image
 * @property {string[]} recipeIngredient
 * @property {string} name
 * @property {string} prepTime
 * @property {string[]} recipeInstructions
 * @property {string} recipeYield
 * @property {number} rating
 */

/**
 * @param {number} max
 * @returns {number}
 */
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

/**
 * @template T
 * @param {T[]} list
 * @returns {T}
 */
function getRandomListEntry(list) {
  const randomIndex = getRandomNumber(list.length);
  return list[randomIndex];
}

/**
 * @param {string[]} tags
 * @returns {string}
 */
function tagsTemplate(tags) {
  if (!tags || tags.length === 0) return '';

  const tagElements = tags.map(tag => `<span class="tag">${tag}</span>`).join('');

  return `<span class="tags">${tagElements}</span>`;
}

/**
 * @param {number} rating
 * @returns {string}
 */
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

/**
 * @param {Recipe} recipe
 * @returns {string}
 */
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

/**
 * Renders the recipes to the main element
 * @param {Recipe[]} recipes - The recipes to render
 */
function renderRecipes(recipes) {
  const main = document.querySelector('main');
  const recipeElements = recipes.map(recipe => recipeTemplate(recipe));
  main.innerHTML += recipeElements.join('');
}

function init() {
  renderRecipes([getRandomListEntry(recipes)]);

  // (Would rather have this for a real site, but I'm demo-ing the random recipe)
  // renderRecipes(recipes.sort((a, b) => a.name.localeCompare(b.name)));
}

/**
 * @param {Event} event
 */
function searchHandler(event) {
  event.preventDefault();
  const searchInput = document.querySelector('.search-bar input');
  const searchValue = searchInput.value.toLowerCase();
  const searchResults = recipes.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchValue)
    || recipe.tags.some(tag => tag.toLowerCase().includes(searchValue))
    || recipe.description.toLowerCase().includes(searchValue)
    || recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(searchValue));
  });
  searchResults.sort((a, b) => a.name.localeCompare(b.name));
  document.querySelector('main').innerHTML = `<p style="margin: 0;">${searchResults.length} result${searchResults.length === 1 ? '' : 's'}</p>`;
  renderRecipes(searchResults);
}

const searchButton = document.querySelector('.search-bar button');
searchButton.addEventListener('click', searchHandler);
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('keydown', event => { if (event.key === 'Enter') searchHandler(event); });

init();