import lunchs from './lunchs';

function createLunchElement(lunch) {
  const lunchCard = document.createElement('li');
  lunchCard.classList.add('lunch-card');

  lunchCard.innerHTML = `
  <img>
  <div class="lunch-info">
    <h4 class="lunch-name">${lunch.name}</h4>
    <p class="lunch-description">l${lunch.description}</p>
    <div class="lunch-price">${lunch.price}</div>
  </div>
  `;

  const image = lunchCard.querySelector('img');
  image.src = lunch.img;

  return lunchCard;
}

export default function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu-page');

  menu.innerHTML = `
    <section class="menu">
      <h2 id="burguers">Burguers</h2>
      <ul id="burguer-menu" class="menu-grid"> 
      </ul>
    </section>
  `;

  const burguerList = menu.querySelector('#burguer-menu');
  lunchs.forEach((lunch) => {
    const lunchCard = createLunchElement(lunch);
    burguerList.appendChild(lunchCard);
  });

  return menu;
}
