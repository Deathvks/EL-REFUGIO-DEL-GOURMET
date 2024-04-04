import './Header.css';

function Header(){
    return(
        <div className='header-container'>
            <header>
                <div className='header-presentation'>
                    <img src="../../img/refugioDelGourmet.jpeg" alt="logo" className='header-logo'/>
                    <h1 className='name'>EL REFUGIO DEL GOURMET</h1>
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