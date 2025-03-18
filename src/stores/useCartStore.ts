import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  total: number;
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      total: 0,
      addToCart: (item) => {
        set((state) => ({ cart: [...state.cart, item] }));
        set((state) => ({
          total: state.cart.reduce((acc, item) => acc + item.price, 0),
        }));
      },
      removeFromCart: (id) => {
        set((state) => ({ cart: state.cart.filter((item) => item.id !== id) }));
        set((state) => ({
          total: state.cart.reduce((acc, item) => acc + item.price, 0),
        }));
      },
      clearCart: () => {
        set({ cart: [] });
        set({ total: 0 });
      },
    }),
    {
      name: "cart-storage", // Clave para localStorage
    },
  ),
);

export default useCartStore;
