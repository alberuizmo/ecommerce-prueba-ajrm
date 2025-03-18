import React from "react";
import useCartStore from "../stores/useCartStore";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart, total } = useCartStore();

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p>Precio: ${item.price}</p>
                {/* <p>Cantidad: {item.quantity}</p> */}
                <button onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
      )}
      <Link to="/checkout">
        <button>Ir a Facturación</button>
      </Link>
    </div>
  );
};

export default Cart;
