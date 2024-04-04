import './Header.css';

function Header(){
    return(
        <div className='header-container'>
            <header>
                <div className='header-presentation'>
                    <img src="../../img/refugioDelGourmet.png" alt="logo" className='header-logo'/>
                    <a href='./'><h1 className='header-name'>EL REFUGIO DEL GOURMET</h1></a>
                </div>
                <nav>
                    <a href='./'>Inicio</a>
                    <a href=''>Sobre Nosotros</a>
                    <a href=''>Carta</a>
                    <a href='https://www.instagram.com'><img src="../../../img/insta.webp" alt='insta' className='header-insta'/></a>
                    <a href='https://www.twitter.com'><img src="../../../img/twitter.webp" alt='twitter' className='header-twitter'/></a>
                </nav>
            </header>
        </div>
    )
}

export default Header;