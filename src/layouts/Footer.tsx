import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css"; // Estilos opcionales

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {new Date().getFullYear()} E-Shop. Todos los derechos reservados.</p>
        <nav>
          <ul className="footer__links">
            <li>
              <Link to="/about">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/privacy">Política de Privacidad</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
