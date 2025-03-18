import { create } from "zustand";

type UserRole = "client" | "admin";

interface AuthState {
  user: { username: string; role: UserRole } | null;
  login: (username: string, role: UserRole) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "null"),
  login: (username, role) => {
    const user = { username, role };
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },
  logout: () => {
    localStorage.removeItem("user");
    set({ user: null });
  },
}));
