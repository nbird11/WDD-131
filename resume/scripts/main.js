import profile from './profile.mjs';

/**
 * @param {string} name 
 * @param {import('./profile.mjs').Contact} contact 
 * @param {string} bio 
 * @param {Array<import('./profile.mjs').Website>} websites 
 * @returns {string} The profile info template
 */
function profileInfoTemplate(name, contact, bio, websites) {
  // I want bio paragraphs to be separated by a line break.
  const bioParagraphs = bio.replace(/\n/g, '<br />');
  const websiteLinks = websites.map(website => `<a href="${website.url}" target="_blank">${website.name}</a>`).join('');
  return `
    <h1 id="name">${name}</h1>
    <div class="contact-info">
      <p id="location">📍 ${contact.location}</p>
      <p id="email">📧 ${contact.email}</p>
      <p id="phone">📱 ${contact.phone}</p>
    </div>
    <div id="bio" class="bio">${bioParagraphs}</div>
    <div id="websites" class="websites">${websiteLinks}</div>`
}

/**
 * Loads the profile info into the profile-info div.
 */
function loadProfile() {
  document.getElementById('profile-info').innerHTML = profileInfoTemplate(profile.name, profile.contact, profile.bio, profile.websites);
}

/**
 * Loads the about text into the about-text div.
 */
function loadAbout() {
  // I want about paragraphs to be separated into semantic paragraphs.
  const aboutText = profile.about.split('\n').map(para => `<p>${para}</p>`).join('');
  document.getElementById('about-text').innerHTML = aboutText;
}

/**
 * Main
 */
function main() {
  loadProfile();
  loadAbout();
}

main();