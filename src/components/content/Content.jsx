import './Content.css';

function Content(){
    return (
        <>
        <div className='content-container'>
            <div className='content-text'>
                <h1 className='content-h1'>EL REFUGIO DEL GOURMET</h1>
                <p className='content-text-presentation'>Si buscas carnaza... Nos has encontrado. Hamburguesas de carne 100% vacuno hechas en el momento.</p>
            </div>
            <div className="content-image">
                <img src="../../public/img/image-hamburguer.jpeg" alt="image1" className="content-image1"></img>
            </div>
        </div>
        <div className='content-after-container'>
            <div className='content-after-text'>
                <h1 className='content-after-h1'>EL REFUGIO DEL GOURMET SIEMPRE EN CASA</h1>
                <p className='content-text-after-presentation'>Ahora y para siempre, disfruta de la opción EL REFUGIO DEL GOURMET en casa. En la que podrás disfrutar de toda nuestra carta y de promos exclusivas. No te olvides de registrarte para enterarte de todas las novedades.</p>
            </div>
            <div className='content-after-image'>
            <img src="../../public/img/delivery.jpeg" alt="image2" className="content-image2"></img>
            </div>
        </div>
        </>
    )
}

export default Content;