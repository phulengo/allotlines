class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
        <div class="footer__section--info">
            <div class="email-sign-up">
                <p>Sign up to receive product updates and more</p>
                <input type="email" placeholder="youremail@gmail.com" />
            </div>
            <div class="office">
                <p>Office</p>
                <p>545, Street 11, Block F, My Dinh, Ha Noi</p>
            </div>
            <div class="contact">
                <p>Contact</p>
                <a href="tel:+843003003000">
                    <p>+84 300 300 3000</p>
                </a>
                <a href="mailto:allotlines@gmail.com">
                    <p>allotlines@gmail.com</p>
                </a>
            </div>

        </div>
        <hr />
        <div class="footer__section--social">
            <div class="copyright">© 2022 - All Rights Reserved</div>
            <div class="terms-privacy">
                <p>Terms & Conditions</p>
                <p>Privacy</p>
            </div>
            <div class="social-icons">
                <div><img src="./assets/icons/twitter.svg"></div>
                <div><img src="./assets/icons/facebook.svg"></div>
                <div><img src="./assets/icons/dribbble.svg"></div>
                <div><img src="./assets/icons/github.svg"></div>
            </div>

        </div>
    </footer>
     `;
  }
}

customElements.define("footer-component", Footer);
