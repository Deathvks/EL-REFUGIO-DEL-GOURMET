import "./Birthday.css";

function Birthday() {
  return (
    <>
      <div className="birthday-invitation">
        <h1 className="birthday-h1">¡Ven en tu cumpleaños!</h1>
      </div>
      <div className="birthday-card">
        <div className="header">
          <span className="title">Si es tu cummple puedes comer...</span>
          <span className="price">¡Gratis!</span>
        </div>
        <p className="desc">Confirma que es tu cumpleaños desde el mostrador y obtendrás:</p>
        <ul className="lists">
          <li className="list">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Un menú individual GRATIS</span>
          </li>
          <li className="list">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Podrás saltarte la cola</span>
          </li>
          <li className="list">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Descuento para un amigo ese día</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Birthday;
