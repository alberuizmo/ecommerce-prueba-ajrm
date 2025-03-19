import React, { useState } from "react";
import { useAuthStore } from "../stores/useAuthStore";

const LoginDropdown: React.FC = () => {
  const { user, login, logout } = useAuthStore();
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<"client" | "admin">("client");
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => {
    if (username.trim()) {
      login(username, role);
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200"
      >
        {user ? `👤 ${user.username}` : "🔐 Iniciar Sesión"}
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-64 bg-white text-black rounded-lg shadow-lg p-4 z-10"
          onMouseLeave={() => setIsOpen(false)}
        >
          {user ? (
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-700">
                {user.username}
              </p>
              <p className="text-sm text-gray-500">Rol: {user.role}</p>
              <button
                onClick={handleLogout}
                className="w-full mt-4 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 active:scale-95"
              >
                🚪 Cerrar Sesión
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-lg font-semibold text-gray-700 text-center mb-3">
                Iniciar Sesión
              </h2>

              <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400"
              />

              <select
                value={role}
                onChange={(e) => setRole(e.target.value as "client" | "admin")}
                className="w-full p-2 border border-gray-300 rounded-lg mb-3 bg-white cursor-pointer"
              >
                <option value="client">Cliente</option>
                <option value="admin">Administrador</option>
              </select>

              <button
                onClick={handleLogin}
                disabled={!username.trim()}
                className={`w-full p-2 rounded-lg text-white transition active:scale-95 ${
                  username.trim()
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                🚀 Ingresar
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
