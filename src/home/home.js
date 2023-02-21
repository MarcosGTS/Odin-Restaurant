import burguer1 from './burguer_1.jpg';

export default function createHome() {
  const home = document.createElement('div');

  home.innerHTML = `
    <div class="hero-section">
      <img class="hero-image" src="">
      <section class="hero-text">
        <h2>The best burguers in town!</h2>
        <p>Are you in the mood for a delicious, juicy burger? 
        Come to eat a true burguer on Burguer Paradise.</p>
        <button>Menu</button>
      </section>
    </div>
  `;

  const heroImg = home.querySelector('.hero-image');
  heroImg.src = burguer1;

  return home;
}
