import profile from '../scripts/profile.mjs';

/**
 * Generates HTML template for a single education item
 * @param {import('../scripts/profile.mjs').Education} education The education object containing all education details
 * @returns {string} HTML string representing the education card
 */
function educationTemplate(education) {
  const logoSrc = education.logo || '../assets/simple-NB-logo.png';
  const activities = education.activities.map(activity => `<li>${activity}</li>`).join('');
  const gpaSection = education.gpa ? `<p>GPA: ${education.gpa}</p>` : '';
  
  return `
    <div class="card-item">
      <img class="card-logo" src="${logoSrc}" alt="${education.institution} logo">
      <div class="card-content">
        <div class="card-header">
          <h2 class="card-title">${education.degree}</h2>
          <p>${education.institution}</p>
          <p>${education.start} - ${education.end}</p>
          ${gpaSection}
        </div>
        ${activities ? `
          <h3>Activities and Societies</h3>
          <ul class="card-list-items">
            ${activities}
          </ul>
        ` : ''}
      </div>
    </div>`;
}

/**
 * Loads all education items into the DOM.  
 * Renders education cards using data from profile.mjs
 */
function loadEducation() {
  const educationHTML = profile.education.map(edu => educationTemplate(edu)).join('');
  document.getElementById('education-list').innerHTML = educationHTML;
}

loadEducation(); 