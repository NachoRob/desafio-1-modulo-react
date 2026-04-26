import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <div className="not-found-emoji">🍕</div>
        <h2 className="not-found-subtitle">¡Oh no! Te has quedado sin porción.</h2>
        <p className="not-found-text">
          La página que estás buscando no existe o ha sido devorada.
        </p>
        <Link to="/" className="not-found-button">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;