import "./Card.css";

function Card(){
    return(
        <div className="card">
            <div className="image-box">
                <img src="../../img/image-card.webp" alt=""/>
            </div>
            <div className="content">
                <h2>Trabajamos diariamente con ingredientes frescos y de alta calidad, para ofrecerle a nuestros clientes una BUENA hamburguesa, unos buenos productos y un buen servicio.</h2>
                <p>¿Vas a dejar que te lo cuenten?</p>
            </div>
        </div>
    )
}

export default Card;