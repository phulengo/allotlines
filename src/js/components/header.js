class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
    <nav class="navigation-bar">
        <ul>
            <div class="nav__logo">
                <li><a href="/"><img src="./assets/navbar-logo.svg" /></a></li>
            </div>
            <div class="nav__items">
                <li><a href="/music-distribution.html">Phân phối âm nhạc</a></li>
                <li>Pricing</li>
                <li>Label</li>
                <li>Stories</li>
                <li class="nav__item--icon"><a href="#"><img src="./assets/navbar-qa.svg" /></a></li>
                <li class="nav__item--icon"><a href="#"><img src="./assets/navbar-uk.svg" /></a></li>
            </div>
        </ul>
    </nav>
</header>`;
  }
}

customElements.define("header-component", Header);
