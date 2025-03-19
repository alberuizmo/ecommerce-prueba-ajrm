import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartState } from "../types/Index";

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (item) => {
        set((state) => {
          return {
            cart: [...state.cart, { ...item, quantity: item.quantity }]
          };
        });
      },

      removeFromCart: (id) => {
        set((state) => {
          const newCart = state.cart.filter((item) => item.id !== id);
          return {
            cart: newCart
          };
        });
      },

      updateQuantity: (id, quantity) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity } : item,
          )
        }));
      },

      clearCart: () => {
        set({ cart: [] });        
      },
    }),
    {
      name: "cart-storage", // Clave para persistencia en localStorage
    },
  ),
);

export default useCartStore;
