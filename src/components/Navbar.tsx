import React from "react";
import LoginDropdown from "./LoginDropdown";
import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";

const Navbar: React.FC = () => {
  const { user } = useAuthStore();
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        🛒 E-Shop
      </Link>

      <div className="flex items-center gap-4">
        <ul className="flex space-x-6">
          {user?.role === "client" && (
            <li>
              <Link to="/cart" className="hover:text-pink-600 transition">
                🛍️ Ver Carrito
              </Link>
            </li>
          )}
          {user?.role === "admin" && (
            <li>
              <Link to="/invoices" className="hover:text-pink-600 transition">
                📊 Admin
              </Link>
            </li>
          )}
        </ul>
        <LoginDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
