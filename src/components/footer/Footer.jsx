import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <div className="footer-presentation">
          <a href="./">
            <img
              src="../../img/refugioDelGourmet.png"
              alt="logo"
              className="footer-logo"
            />
          </a>
          <a href="./">
            <h1 className="footer-name">EL REFUGIO DEL GOURMET</h1>
          </a>
        </div>

        <nav className="footer-test">
          <a href="./">Inicio</a>
          <a href="/about">Sobre Nosotros</a>
          <a href="/menu">Carta</a>
          <a href="https://www.instagram.com" target="blank">
            <img
              src="../../../img/insta.webp"
              alt="insta"
              className="footer-insta"
            />
          </a>
          <a href="https://www.twitter.com" target="blank">
            <img
              src="../../../img/twitter.webp"
              alt="twitter"
              className="footer-twitter"
            />
          </a>
          <a
            href="https://github.com/Deathvks/EL-REFUGIO-DEL-GOURMET"
            target="blank"
          >
            <img
              src="../../../img/github.webp"
              alt="twitter"
              className="footer-github"
            />
          </a>
          <a href="/rssPage/rss.xml">
            <img src="../../../img/rss.png" alt="rss" className="footer-rss" />
          </a>
        </nav>

        <div className="footer-copy">
          <h1 className="footer-text-copy">
            COPYRIGHT@2024 || TODOS LOS DERECHOS RESERVADOS
          </h1>
        </div>

        <div className="footer-copyright">
          <a href="/privacy">
            <p className="footer-text-copyright">
              Política de Privacidad y Cookies |
            </p>
          </a>
          <a href="/sales">
            <p className="footer-text-copyright">| Condiciones de Venta</p>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
