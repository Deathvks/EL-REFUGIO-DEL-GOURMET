import './Content.css';

function Content(){
    return (
        <div className='content-container'>
            <div className='content-text'>
                <h1 className='content-h1'>EL REFUGIO DEL GOURMET</h1>
                <p className='content-text-presentation'>Si buscas carnaza... Nos has encontrado. Hamburguesas de carne 100% vacuno hechas en el momento.</p>
            </div>
            <div className="content-image">
                <img src="../../public/img/image-hamburguer.jpeg" alt="image1" className="content-image1"></img>
            </div>
        </div>
    )
}

export default Content;