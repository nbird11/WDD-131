function headerTemplate() {
  return `
    <img src="/resume/assets/simple-NB-logo.png" alt="NB Logo" class="logo">
    <nav>
      <a href="/resume/">Home</a>
      <a href="/resume/experience/">Experience</a>
      <a href="/resume/education/">Education</a>
      <a href="/resume/projects/">Project Showcase</a>
    </nav>
  `;
}

function loadHeader() {
  const header = headerTemplate();
  document.querySelector('header').innerHTML = header;
}

document.addEventListener('DOMContentLoaded', loadHeader);