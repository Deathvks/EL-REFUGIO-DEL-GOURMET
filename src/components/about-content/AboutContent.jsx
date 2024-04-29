import "./AboutContent.css";

function AboutContent() {
  return (
    <div className="about-content-container">
      <div className="about-content-text">
        <h1 className="about-content-h1">CONOCE NUESTRO ESTILO</h1>
        <p className="about-content-text-presentation">
          Ahora, cuando todos los jóvenes quieren ser influencers, aspirando a
          un estilo de vida que la mayorías de las veces es mentira, en el
          momento de las noticias falsas, de los cuerpos perfectos, las carreras
          profesionales triunfales y de la presión social por ser quien no
          somos, es más importante que nunca permanecer auténticos, ser fieles a
          nosotros mismos y darlo todo por defender en lo que creemos. No es
          momento de medias tintas.
        </p>
      </div>
      <div className="about-content-image">
        <img
          src="../../img/about.webp"
          alt="image1"
          className="about-content-image1"
        ></img>
      </div>
    </div>
  );
}

export default AboutContent;
