import './Header.css';

function Header(){
    return(
        <div className='header-container'>
            <header>
                <div className='header-presentation'>
                    <a href='./' className='header-a'><img src="../../img/refugioDelGourmet.png" alt="logo" className='header-logo'/></a>
                    <a href='./' className='header-a'><h1 className='header-name'>EL REFUGIO DEL GOURMET</h1></a>
                </div>
                <nav>
                    <a href='./' className='header-active'>Inicio</a>
                    <a href=''>Sobre Nosotros</a>
                    <a href='/menu'>Carta</a>
                    <a href='https://www.instagram.com' target='blank'><img src="../../../img/insta.webp" alt='insta' className='header-insta'/></a>
                    <a href='https://www.twitter.com' target='blank'><img src="../../../img/twitter.webp" alt='twitter' className='header-twitter'/></a>
                </nav>
            </header>
        </div>
    )
}

export default Header;