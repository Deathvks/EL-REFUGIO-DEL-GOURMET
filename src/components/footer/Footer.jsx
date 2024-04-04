import './Footer.css';
function Footer(){
    return(
        <div className='footer-container'>
            <footer>
                <div className='footer-presentation'>
                    <img src="../../img/refugioDelGourmet.jpeg" alt="logo" className='footer-logo'/>
                    <h1 className='name'>EL REFUGIO DEL GOURMET</h1>
                </div>
                <nav>
                    <a href=''>Inicio</a>
                    <a href=''>Sobre Nosotros</a>
                    <a href=''>Carta</a>
                </nav>
            </footer>
        </div>
    )
}

export default Footer;