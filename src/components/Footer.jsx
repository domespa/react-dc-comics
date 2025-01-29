import footerLinks from "../data/footerLinks";

export default function Footer() {
  return (
    <footer>
      <div className="footer-center">
        <div className="container">
          <div className="list-foot">
            {footerLinks.map((footerLink) => (
              <div key={footerLink.id}>
                <h4>{footerLink.title}</h4>
                <ul>
                  {footerLink.links.map((link) => (
                    <li key={link.id}>
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <img
                className="logo-foot"
                s
                src="img/dc-logo-bg.png"
                alt="DC Logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bot">
        <div className="container">
          <div className="cont-foot-bot">
            <button>SIGN-UP NOW!</button>
            <div className="social-button">
              <span>
                <a href="#">FOLLOW US</a>
              </span>
              <img src="img/footer-facebook.png" alt="Facebook" />
              <img src="img/footer-twitter.png" alt="Twitter" />
              <img src="img/footer-youtube.png" alt="YouTube" />
              <img src="img/footer-pinterest.png" alt="Pinterest" />
              <img src="img/footer-periscope.png" alt="Periscope" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
