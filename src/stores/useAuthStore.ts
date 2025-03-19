import { create } from "zustand";
import { AuthState } from "../types/Index";
import useCartStore from "./useCartStore";

const getStoredUser = () => {
  try {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Error reading user from localStorage", error);
    return null;
  }
};

export const useAuthStore = create<AuthState>((set) => ({
  user: getStoredUser(),
  
  login: (username, role) => {
    const user = { username, role };
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },

  logout: () => {
    localStorage.removeItem("user");
    set({ user: null });
    useCartStore.getState().clearCart();
  },
}));
