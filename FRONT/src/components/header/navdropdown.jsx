
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "./navdropdown.css";

const Header = () => {
  return (

      <div className="navbar-container">
        <div className="navbar-logo">
        <img src="../../../Segunda.png" alt="Logo-segunda-tinta" />
        </div>

        <div className="navbar-navigation">
          <ul className="links">
            <li> <a href=""> </a>Home</li>
            <li> <a href=""> </a>Galeria</li>
            <li> <a href=""> </a>Contacto</li>
            <li> <a href=""> </a>Venta</li>
          </ul>
        </div>
      </div>

  );
}

export default Header;