window.addEventListener('DOMContentLoaded', () => {
  main();
})

function main() {
  const themeSelector = /** @type {HTMLSelectElement} */ (document.getElementById('theme-select'));
  function changeTheme() {
    if (themeSelector.value == 'dark') {
      document.body.setAttribute('class', 'dark');
      document.getElementById('logo').setAttribute('src', './byui-logo-white.png')
    } else {
      document.body.setAttribute('class', '');
      document.getElementById('logo').setAttribute('src', './byui-logo-blue.webp')
    }
  }
  themeSelector.addEventListener('change', changeTheme)
}