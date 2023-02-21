import createHome from './home/home';

const content = document.createElement('div');

function loadHome() {
  content.innerHTML = '';
  content.appendChild(createHome());
}

function createHeader() {
  const header = document.createElement('header');

  header.innerHTML = `
    <nav>
    <ul>
      <li id="home">Home</li>
    </ul>
    </nav>
  `;

  header.querySelector('#home').addEventListener('click', loadHome);
  return header;
}

document.body.appendChild(createHeader());
document.body.appendChild(content);
