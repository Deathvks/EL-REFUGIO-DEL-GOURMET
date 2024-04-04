import './Footer.css';
function Footer(){
    return(
        <div className='footer-container'>
            <footer>
                <div className='footer-presentation'>
                    <img src="../../img/refugioDelGourmet.png" alt="logo" className='footer-logo'/>
                    <a href='./'><h1 className='footer-name'>EL REFUGIO DEL GOURMET</h1></a>
                </div>
                <nav>
                    <a href='./'>Inicio</a>
                    <a href=''>Sobre Nosotros</a>
                    <a href=''>Carta</a>
                </nav>
            </footer>
        </div>
    )
}

export default Footer;