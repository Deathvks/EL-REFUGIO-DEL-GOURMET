import card from "../../services/card/card";
import "./MenuImage.css";

function MenuImage(){

    return(
        <>
            <div className="menu-image-container">
                {
                    card.map((cards, index) => (
                        <div key={index} className="menu-item">
                            <div className="menu-image-wrapper">
                                <img src={`/img/${cards.fileName}`} alt={`imagen ${index}`} className="menu-image-array"/>
                            </div>
                            <div className="menu-image-name">
                                <p className="menu-image-name-hamburguer">{cards.name}</p>
                            </div>
                            <div className="menu-image-text">
                                <p className="menu-image-price">{cards.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default MenuImage;
