import lunchs from './lunchs';

function createLunchElement(lunch) {
  const lunchCard = document.createElement('li');
  lunchCard.classList.add('lunch-card');

  lunchCard.innerHTML = `
  <img>
  <div class="lunch-info">
    <h4 class="lunch-name">${lunch.name}</h4>
    <p class="lunch-description">${lunch.description}</p>
    <div class="lunch-price">${lunch.price}</div>
  </div>
  `;

  const image = lunchCard.querySelector('img');
  image.src = lunch.img;

  return lunchCard;
}

function createMenuSection(sectionName, sectionElements) {
  const section = document.createElement('section');
  section.classList.add('menu');

  section.innerHTML = `
    <h2 id="${sectionName}">${sectionName}s</h2>
    <ul id="${sectionName}-menu" class="menu-grid"> 
    </ul>
  `;

  const sectionGrid = section.querySelector('.menu-grid');
  sectionElements.forEach((lunch) => {
    const newLunch = createLunchElement(lunch);
    sectionGrid.appendChild(newLunch);
  });

  return section;
}

export default function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu-page');

  Object.keys(lunchs).forEach((dessertName) => {
    const newSection = createMenuSection(dessertName, lunchs[dessertName]);
    menu.appendChild(newSection);
  });

  return menu;
}
