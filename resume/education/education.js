import profile from '../scripts/profile.mjs';

/**
 * Creates the HTML for a single education item
 * @param {import('../scripts/profile.mjs').Education} education
 * @returns {string} HTML string for the education item
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
 * Loads all education items into the education-list div
 */
function loadEducation() {
  const educationHTML = profile.education.map(edu => educationTemplate(edu)).join('');
  document.getElementById('education-list').innerHTML = educationHTML;
}

loadEducation(); 