import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <footer>
          <div className="footer-presentation">
            <img
              src="../../img/refugioDelGourmet.png"
              alt="logo"
              className="footer-logo"
            />
            <a href="./">
              <h1 className="footer-name">EL REFUGIO DEL GOURMET</h1>
            </a>
          </div>

          <nav>
            <a href="./">Inicio</a>
            <a href="">Sobre Nosotros</a>
            <a href="">Carta</a>
            <a href='https://www.instagram.com'><img src="../../../img/insta.webp" alt='insta' className='footer-insta'/></a>
            <a href='https://www.twitter.com'><img src="../../../img/twitter.webp" alt='twitter' className='footer-twitter'/></a>
          </nav>
          <div className="footer-copy">
            <h1 className="footer-text-copy">
              COPYRIGHT@2024 || TODOS LOS DERECHOS RESERVADOS
            </h1>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
