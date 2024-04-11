import "./MenuBody.css";

function MenuBody(){
    return(
        <div className="menu-body-container">
        <div className="menu-body-text">
          <h1 className="menu-body-h1">NUEVAS BURGUERS</h1>
          <p className="menu-body-text-presentation">
          Con ingredientes nuevos y potenciando los sabores más quieres. Promoción válida hasta el 30 de junio de 2024.
          </p>
        </div>
        <div className="menu-body-image">
          <img
            src="../../img/menu1.webp"
            alt="menu"
            className="menu-body-image1"
          ></img>
        </div>
      </div>
    )
}

export default MenuBody;