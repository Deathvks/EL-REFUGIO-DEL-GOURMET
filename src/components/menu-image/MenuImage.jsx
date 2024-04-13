import card from "../../services/card/card";
import "./MenuImage.css";

function MenuImage(){

    return(
        <>
            <div className="menu-image-container">
                {
                    card.map((cards, index) => (
                        <div key={index} className="image-list-image-wrapper">
                            <img src={`/img/${cards.fileName}`} alt={`imagen ${index}`} className="menu-image-array"/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default MenuImage;