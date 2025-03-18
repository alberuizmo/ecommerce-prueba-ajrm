import useCartStore from "../stores/useCartStore";

const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <div className="p-4 border rounded-lg shadow-md w-80 bg-white">
      <h2 className="text-xl font-bold mb-4">Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center p-2 border-b">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <button
          onClick={clearCart}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Vaciar Carrito
        </button>
      )}
    </div>
  );
};

export default Cart;
