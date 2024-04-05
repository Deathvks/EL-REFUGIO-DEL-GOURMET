import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <footer>
          <div className="footer-presentation">
            <a href="./"><img
              src="../../img/refugioDelGourmet.png"
              alt="logo"
              className="footer-logo"
            /></a>
            <a href="./">
              <h1 className="footer-name">EL REFUGIO DEL GOURMET</h1>
            </a>
          </div>

          <nav>
            <a href="./">Inicio</a>
            <a href="">Sobre Nosotros</a>
            <a href="">Carta</a>
            <a href='https://www.instagram.com'><img src="../../../img/insta.webp" alt='insta' className='footer-insta' /></a>
            <a href='https://www.twitter.com'><img src="../../../img/twitter.webp" alt='twitter' className='footer-twitter' /></a>
          </nav>

          <div className="footer-copy">
            <h1 className="footer-text-copy">
              COPYRIGHT@2024 || TODOS LOS DERECHOS RESERVADOS
            </h1>
          </div>

          <div className="footer-copyright">
            <a href="/privacy"><p className="footer-text-copyright">
              Política de Privacidad y Cookies |
            </p></a>
            <a href="/sales"><p className="footer-text-copyright">
              | Condiciones de Venta
            </p></a>
          </div>

        </footer>
      </div>
    </>
  );
}

export default Footer;
