import './style.css';

import createHome from './home/home';
import createMenu from './menu/menu';

const content = document.createElement('div');
content.classList.add('content');

function loadPage(pageCreator) {
  content.innerHTML = '';
  content.appendChild(pageCreator());
}

function createHeader() {
  const header = document.createElement('header');

  header.innerHTML = `
    <nav>
    <ul>
      <li id="home">Home</li>
      <li id="logo">Burguer Paradise</li>
      <li id="menu">Menu</li>
    </ul>
    </nav>
  `;

  header.querySelector('#home').addEventListener('click', () => loadPage(createHome));
  header.querySelector('#menu').addEventListener('click', () => loadPage(createMenu));
  return header;
}

function createFooter() {
  const footer = document.createElement('footer');

  footer.innerHTML = `
    <a href="https://github.com/MarcosGTS/" target="_blank">
      Created by MarcosGTS 2023
    </a>
    <a href="https://www.highstdeli.com/" target="_blank">
      Inspiration
    </a>
  `;

  return footer;
}

document.body.appendChild(createHeader());
document.body.appendChild(content);
document.body.appendChild(createFooter());
loadPage(createHome);
