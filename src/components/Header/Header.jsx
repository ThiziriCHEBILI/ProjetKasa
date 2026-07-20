import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="logo Kasa" className="logo-Header" />
      </NavLink>

      <nav className="navigation">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  );
}
export default Header;
