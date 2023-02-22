import burguer1 from './burguer_1.jpg';

export default function createHome() {
  const home = document.createElement('div');

  home.innerHTML = `
    <section class="home-splash">
      <h1 id="home-logo">Burguer Paradise</h1>
    </section>
    <section class="home-menu">
      <h2>Menus</h2>
      <p>What's your favorite type of burguer</p>
      <button>Menus</button>
    </section>
    <div class="hero-section">
      <img class="hero-image" src="">
      <section class="hero-text">
        <h2>The best burguers in town!</h2>
        <p>Are you in the mood for a delicious, juicy burger? 
        Come to eat a true burguer on Burguer Paradise.</p>
        <button>Order</button>
      </section>
    </div>
  `;

  const heroImg = home.querySelector('.hero-image');
  heroImg.src = burguer1;

  return home;
}
