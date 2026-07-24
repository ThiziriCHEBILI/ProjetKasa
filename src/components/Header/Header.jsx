import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo-header.png";
import "./Header.scss";

function Header() {
  return (
    <header className="header container">
      <NavLink to="/">
        <img src={logo} alt="logo Kasa" className="logo-Header" />
      </NavLink>

      <nav className="header__link">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  );
}
export default Header;

