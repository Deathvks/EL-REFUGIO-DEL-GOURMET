import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <header>
        <div className="header-presentation">
          <a href="./" className="header-a">
            <img
              src="../../img/refugioDelGourmet.png"
              alt="logo"
              className="header-logo"
            />
          </a>
          <a href="./" className="header-a">
            <h1 className="header-name">EL REFUGIO DEL GOURMET</h1>
          </a>
        </div>
        <nav className="nav-container">
          <a href="./">
            <button className="button type1">
              <span className="btn-txt">Inicio</span>
            </button>
          </a>
          <a href="/about">
            <button className="button type1">
              <span className="btn-txt">Nosotros</span>
            </button>
          </a>
          <a href="/menu">
            <button className="button type1">
              <span className="btn-txt">Carta</span>
            </button>
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
