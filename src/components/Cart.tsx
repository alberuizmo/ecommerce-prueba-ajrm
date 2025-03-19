import { useNavigate } from "react-router-dom";
import useCartStore from "../stores/useCartStore";
import CartItem from "./CartItem";

const Cart: React.FC = () => {
  const { cart, clearCart } = useCartStore();
  const navigate = useNavigate();

  return (
    <div className="p-4 border rounded-lg shadow-lg w-80 bg-white">
      <h2 className="text-xl font-bold text-gray-800 mb-4">🛍️ Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">Tu carrito está vacío.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <div className="mt-4 flex flex-col gap-3">
          {/* Botón para ir a Checkout */}
          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg transition hover:bg-blue-600"
          >
            Ir a Checkout 🛒
          </button>

          {/* Botón para vaciar carrito */}
          <button
            onClick={clearCart}
            className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg transition hover:bg-red-600"
          >
            Vaciar Carrito ❌
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
