import React, { useState } from "react";
import { useAuthStore } from "../stores/useAuthStore";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<"client" | "admin">("client");
  const { login } = useAuthStore();

  const handleLogin = () => {
    if (username.trim()) {
      login(username, role);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value as "client" | "admin")}>
        <option value="client">Cliente</option>
        <option value="admin">Administrador</option>
      </select>
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
};

export default Login;
