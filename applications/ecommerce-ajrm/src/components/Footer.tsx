import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-200 text-gray-700 py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} E-Shop. Todos los derechos reservados.</p>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link to="/about" className="hover:text-blue-600 transition">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600 transition">Contacto</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-blue-600 transition">Política de Privacidad</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
