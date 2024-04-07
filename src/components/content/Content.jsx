import "./Content.css";

function Content() {
  return (
    <>
      <div className="content-container">
        <div className="content-text">
          <h1 className="content-h1">EL REFUGIO DEL GOURMET</h1>
          <p className="content-text-presentation">
            Si buscas carnaza... Nos has encontrado. Hamburguesas de carne 100%
            vacuno hechas en el momento.
          </p>
        </div>
        <div className="content-image">
          <img
            src="../../img/image-hamburguer.jpeg"
            alt="image1"
            className="content-image1"
          ></img>
        </div>
      </div>
      <div className="content-after-container">
        <div className="content-after-text">
          <h1 className="content-after-h1">
            EL REFUGIO DEL GOURMET SIEMPRE EN CASA
          </h1>
          <p className="content-text-after-presentation">
            Ahora y para siempre, disfruta de la opción EL REFUGIO DEL GOURMET
            en casa. En la que podrás disfrutar de toda nuestra carta y de
            promos exclusivas.
          </p>
          <p className="content-text-after-presentation2">
            No te olvides de registrarte para enterarte de todas las novedades.
          </p>
        </div>
        <div className="content-after-image">
          <img
            src="../../img/delivery.jpeg"
            alt="delivery"
            className="content-image2"
          ></img>
        </div>
      </div>
      <div className="content-array">
        <div className="content-text-array">
          <h1 className="content-afterr-h1">NUESTROS CLIENTES SIEMPRE SALEN SATISFECHOS</h1>
        </div> 
      </div>
    </>
  );
}

export default Content;
