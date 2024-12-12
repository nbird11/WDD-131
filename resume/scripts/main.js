import profile from './profile.mjs';

function loadProfile() {
  const name = profile.name;
  document.getElementById('name').innerHTML = name;
  document.getElementById('location').innerHTML += profile.contact.location;  // (+=) because of the icons
  document.getElementById('email').innerHTML += profile.contact.email;
  document.getElementById('phone').innerHTML += profile.contact.phone;
  document.getElementById('bio').innerHTML = profile.bio;
  document.getElementById('websites').innerHTML = profile.websites.map(website => `<a href="${website.url}" target="_blank">${website.name}</a>`).join('');
}

function loadAbout() {
  // Format the about text with paragraphs
  const aboutText = profile.about.split('\n').map(para => `<p>${para}</p>`).join('');
  document.getElementById('about-text').innerHTML = aboutText;
}

function main() {
  loadProfile();
  loadAbout();
}

main();