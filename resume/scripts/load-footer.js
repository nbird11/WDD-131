function footerTemplate() {
  return `
    <div>
      <a href="#">About</a> | <a href="#">Contact</a>
    </div>
    <p>&copy; 2024 Nathan Bird</p>
    <div class="social-icons">
      <a href="https://github.com/nbird11" target="_blank">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" alt="GitHub">
      </a>
      <a href="https://www.linkedin.com/in/nathanabird/" target="_blank">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" alt="LinkedIn">
      </a>
    </div>
  `;
}

function loadFooter() {
  const footer = footerTemplate();
  document.querySelector('footer').innerHTML = footer;
}

document.addEventListener('DOMContentLoaded', loadFooter);