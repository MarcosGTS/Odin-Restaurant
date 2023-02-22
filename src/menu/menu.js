import lunchs from './lunchs';

function createLunchElement(lunch) {
  const lunchCard = document.createElement('li');

  lunchCard.innerHTML = `
  <img>
  <h4>${lunch.name}</h4>
  <p>l${lunch.description}</p>
  <div>${lunch.price}</div>
  `;

  const image = lunchCard.querySelector('img');
  image.src = lunch.img;

  return lunchCard;
}

export default function createMenu() {
  const menu = document.createElement('div');
  menu.innerHTML = `
    <section>
      <h2 id="burguers">Burguers</h2>
      <ul class="burguer-menu"> 
      </ul>
    </section>
  `;

  const burguerList = menu.querySelector('.burguer-menu');
  lunchs.forEach((lunch) => {
    const lunchCard = createLunchElement(lunch);
    burguerList.appendChild(lunchCard);
  });

  return menu;
}
