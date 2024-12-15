import profile from '../scripts/profile.mjs';

/**
 * Generates HTML template for a single project card
 * @param {import('../scripts/profile.mjs').Project} project The project object containing all project details
 * @returns {string} HTML string representing the project card
 */
function projectTemplate(project) {
  const techStack = project.technologies.map(tech => 
    `<span class="tech-badge">${tech}</span>`
  ).join('');
  
  return `
    <div class="project-card" data-categories="${project.categories.join(' ')}">
      <div class="project-image">
        ${project.featured ? '<span class="featured-badge">Featured</span>' : ''}
        <img src="${project.image || '../assets/project-placeholder.png'}" alt="${project.title} screenshot">
      </div>
      <div class="project-content">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <div class="tech-stack">
          ${techStack}
        </div>
        <div class="project-links">
          ${project.demo ? `<a href="${project.demo}" class="demo-link">Live Demo</a>` : ''}
          ${project.github ? `<a href="${project.github}" class="github-link">View Code</a>` : ''}
        </div>
      </div>
    </div>`;
}

/**
 * Sets up event listeners for project filter buttons
 * Handles the UI state of active filter and triggers project filtering
 */
function setupFilters() {
  /** @type {NodeListOf<HTMLButtonElement>} */
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filter = button.dataset.filter;
      filterProjects(filter);
    });
  });
}

/**
 * Filters project cards based on selected category
 * @param {string} filter - The category to filter by ('all' or specific category)
 */
function filterProjects(filter) {
  /** @type {NodeListOf<HTMLDivElement>} */
  const projects = document.querySelectorAll('.project-card');
  
  projects.forEach(project => {
    if (filter === 'all') {
      project.style.display = 'block';
    } else {
      const categories = project.dataset.categories.split(' ');
      project.style.display = categories.includes(filter) ? 'block' : 'none';
    }
  });
}

/**
 * Initializes the projects page by loading project data and setting up filters.  
 * Renders all projects and initializes the filtering functionality
 */
function loadProjects() {
  const projectsHTML = profile.projects.map(project => projectTemplate(project)).join('');
  document.getElementById('project-grid').innerHTML = projectsHTML;
  setupFilters();
}

loadProjects(); 