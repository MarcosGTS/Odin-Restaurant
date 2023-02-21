import './style.css';

import createHome from './home/home';
import createMenu from './menu/menu';

const content = document.createElement('div');

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
      <li id="menu">Menu</li>
      <li id="about">About Us</li>
      <li id="contact">Contact</li>
    </ul>
    </nav>
  `;

  header.querySelector('#home').addEventListener('click', () => loadPage(createHome));
  header.querySelector('#menu').addEventListener('click', () => loadPage(createMenu));
  return header;
}

document.body.appendChild(createHeader());
document.body.appendChild(content);
