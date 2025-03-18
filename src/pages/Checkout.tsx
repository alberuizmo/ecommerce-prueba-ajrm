import React, { useState } from "react";
import useCartStore from "../stores/useCartStore";
import "../styles/Checkout.css"; // Estilos opcionales

const Checkout: React.FC = () => {
  const { cart, clearCart } = useCartStore();

  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Compra realizada con éxito 🎉");
    clearCart(); // Vaciar el carrito después de la compra
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout">
      <h2>🧾 Facturación</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <h3>Resumen del Pedido</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>

          <h3>Información de Facturación</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={billingInfo.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={billingInfo.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Dirección de envío"
              value={billingInfo.address}
              onChange={handleChange}
              required
            />
            <button type="submit">Finalizar compra</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
