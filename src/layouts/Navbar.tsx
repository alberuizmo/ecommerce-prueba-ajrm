import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore"; // Store de autenticación
import "../styles/Navbar.css"; // Estilos opcionales

const Navbar: React.FC = () => {
  const { user, logout } = useAuthStore(); // Obtener usuario y logout desde Zustand

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">🛒 E-Shop</Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/cart">🛍️ Carrito</Link>
        </li>
        {user?.role === "admin" && (
          <li>
            <Link to="/admin">📊 Admin</Link>
          </li>
        )}
      </ul>
      <div className="navbar__auth">
        {user ? (
          <>
            <span>👤 {user.username}</span>
            <button onClick={logout}>Cerrar sesión</button>
          </>
        ) : (
          <Link to="/login">Iniciar sesión</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
