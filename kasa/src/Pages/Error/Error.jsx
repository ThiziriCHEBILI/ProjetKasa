import { Link } from "react-router-dom";
import "./Error.scss";

export default function Error() {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <p className="error__message">
        {" "}
        Oups! La page que <wbr /> vous demandez n'existe pas.
      </p>
      <Link to="/" className="error__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
