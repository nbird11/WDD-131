import recipes from './recipes.mjs';

function setRating(ratingDiv, rating) {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;
  
  ratingDiv.setAttribute('aria-label', `Rating: ${rating} out of 5 stars`);
  
  // Clear existing content
  ratingDiv.innerHTML = '';
  
  // Add filled stars
  for (let i = 0; i < fullStars; i++) {
    const star = document.createElement('span');
    star.className = 'icon-star';
    star.setAttribute('aria-hidden', 'true');
    star.textContent = '⭐';
    ratingDiv.appendChild(star);
  }
  
  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    const star = document.createElement('span');
    star.className = 'icon-star-empty';
    star.setAttribute('aria-hidden', 'true');
    star.textContent = '☆';
    ratingDiv.appendChild(star);
  }
}

function displayRecipe() {
  /** @type {HTMLElement} */
  const main = document.querySelector('main');

  /** @type {HTMLTemplateElement} */
  const template = document.getElementById('recipe-template');
  
  // Get the last recipe from the array
  const recipe = recipes[recipes.length - 1];
  
  const clone = template.content.cloneNode(true);
  
  // Set the image
  const img = clone.querySelector('img');
  img.src = recipe.image;
  img.alt = recipe.name;
  
  // Set the tags
  const tagsContainer = clone.querySelector('.tags');
  tagsContainer.innerHTML = '';
  if (recipe.tags && recipe.tags.length > 0) {
    recipe.tags.forEach(tag => {
      const tagSpan = document.createElement('span');
      tagSpan.className = 'tag';
      tagSpan.textContent = tag;
      tagsContainer.appendChild(tagSpan);
    });
  }
  
  // Set the title
  clone.querySelector('h2').textContent = recipe.name;
  
  // Set the description
  clone.querySelector('.description').textContent = recipe.description;
  
  // Set the rating
  if (recipe.rating) {      
    setRating(clone.querySelector('.rating'), recipe.rating);
  }
  
  main.appendChild(clone);
}

// Display single recipe when the page loads
displayRecipe();
