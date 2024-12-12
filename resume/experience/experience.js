import profile from '../scripts/profile.mjs';

/**
 * Creates the HTML for a single experience item
 * @param {import('../scripts/profile.mjs').Experience} experience
 * @returns {string} HTML string for the experience item
 */
function experienceTemplate(experience) {
  const logoSrc = experience.logo || '../assets/simple-NB-logo.png';
  const bullets = experience.bullets.map(bullet => `<li>${bullet}</li>`).join('');
  
  return `
    <div class="experience-item">
      <img class="company-logo" src="${logoSrc}" alt="${experience.company} logo">
      <div class="experience-content">
        <div class="experience-header">
          <h2 class="experience-title">${experience.title}</h2>
          <p class="experience-company">${experience.company} · ${experience.employmentType}</p>
          <p class="experience-time">${experience.start} - ${experience.end}</p>
          <p class="experience-location">${experience.location} · ${experience.locationType}</p>
        </div>
        <ul class="experience-description">
          ${bullets}
        </ul>
      </div>
    </div>`;
}

/**
 * Loads all experience items into the experience-list div
 */
function loadExperience() {
  const experienceHTML = profile.experience.map(exp => experienceTemplate(exp)).join('');
  document.getElementById('experience-list').innerHTML = experienceHTML;
}

loadExperience(); 