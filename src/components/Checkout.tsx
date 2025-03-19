import React, { useState, useEffect } from "react";
import useCartStore from "../stores/useCartStore";
import { useAuthStore } from "../stores/useAuthStore";
import { fetchCountries } from "../services/countryService";
import useProductStore from "../stores/useProductStore";
import { BillingInfo, Invoice } from "../types/Index";
import { useToast } from "ecommerce-utils-ajrm";

const Checkout: React.FC = () => {
  const { showToast } = useToast();
  const { cart, clearCart } = useCartStore();
  const { user } = useAuthStore();
  const [countries, setCountries] = useState<string[]>([]);

  const [billingInfo, setBillingInfo] = useState<BillingInfo>({
    name: "",
    email: "",
    country: "",
  });

  useEffect(() => {
    const loadCountries = async () => {
      const countryList = await fetchCountries();
      setCountries(countryList);
    };
    loadCountries();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
  };

  const { products, setProducts } = useProductStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const newInvoice: Invoice = {
      id: Date.now(),
      user: user ? user.username : "Invitado",
      items: cart,
      total: cart.reduce(
        (sum, item) =>
          sum + item.price * item.quantity + item.tax * item.quantity,
        0,
      ),
      billingInfo,
      date: new Date().toLocaleString(),
    };

    const updatedProducts = products.map((product) => {
      const cartItem = cart.find((item) => item.id === product.id);
      return cartItem
        ? { ...product, stock: product.stock - cartItem.quantity }
        : product;
    });

    setProducts(updatedProducts);

    const invoices = JSON.parse(localStorage.getItem("invoices") || "[]");
    invoices.push(newInvoice);
    localStorage.setItem("invoices", JSON.stringify(invoices));
    
    showToast("Compra realizada con éxito 🎉", "success");
    clearCart();
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity + item.tax * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          🧾 Facturación
        </h2>

        {cart.length === 0 ? (
          <p className="text-gray-600">Tu carrito está vacío.</p>
        ) : (
          <>
            <h3 className="text-lg font-semibold text-gray-700">
              Resumen del Pedido
            </h3>
            <ul className="mb-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between border-b py-2"
                >
                  <span className="text-gray-700">
                    {item.name} (x{item.quantity})
                  </span>
                  <span className="font-semibold text-gray-900">
                    $
                    {(
                      item.price * item.quantity +
                      item.tax * item.quantity
                    ).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-bold text-gray-900">
              Total: ${totalPrice.toFixed(2)}
            </h3>

            <h3 className="text-lg font-semibold text-gray-700 mt-6">
              Información de Facturación
            </h3>
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                value={billingInfo.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={billingInfo.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              />

              <select
                name="country"
                value={billingInfo.country}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Seleccione un país</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Finalizar compra
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
