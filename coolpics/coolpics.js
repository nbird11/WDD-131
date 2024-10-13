const menuButton = document.getElementById('menu-button');
const menuNav = document.getElementById('menu');

function handleResize() {
  if (window.innerWidth > 1000) {
    menuNav.classList.remove('hide');
    return;
  }
  menuNav.classList.add('hide');
  menuButton.style.marginBottom = '1rem';
}

function veiwerTemplate(pic, alt) {
  return `<div class="viewer">
    <button id="close-viewer">x</button>
    <img src="${pic}" alt="${alt}">
  </div>`
}

function closeViewer() {
  document.querySelector('.viewer').remove();
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
  const clicked = event.target;

	// get the src attribute from that element and 'split' it on the "-"
  let imgName = clicked.getAttribute('src').split('-')[0];

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
  imgName += '-full.jpeg';

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
  document.body.insertAdjacentHTML('afterbegin', veiwerTemplate(imgName, 'full-size nature pic'));

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
  document.getElementById('close-viewer').addEventListener('click', closeViewer);
}

menuButton.addEventListener('click', (e) => {
  menuNav.classList.toggle('hide');
  if (menuNav.classList.contains('hide'))
    e.target.style.marginBottom = '1rem';
  else
    e.target.style.marginBottom = '0';
})

window.addEventListener('resize', handleResize)

document.querySelector('.gallery').addEventListener('click', viewHandler)

handleResize();
