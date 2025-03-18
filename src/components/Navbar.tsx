import React from "react";

interface NavbarProps {
  onCartToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCartToggle }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Ecommerce</h1>
      <button
        onClick={onCartToggle}
        className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200"
      >
        🛒 Ver Carrito
      </button>
    </nav>
  );
};

export default Navbar;
