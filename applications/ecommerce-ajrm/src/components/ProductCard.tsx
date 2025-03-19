import { useMemo, useState } from "react";
import useCartStore from "../stores/useCartStore";
import { useAuthStore } from "../stores/useAuthStore";
import { ProductCardProps } from "../types/Index";
import { formatPrice } from "ecommerce-utils-ajrm";
import { useToast } from "ecommerce-utils-ajrm";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  category,
  stock,
  tax,
}) => {
  const { cart, addToCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const { user } = useAuthStore();
  const { showToast } = useToast();

  const totalPrice = price + (price * tax) / 100;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Math.min(stock, Number(e.target.value)));
    setQuantity(value);
  };

  const productIsInCart = useMemo(
    () => cart.some((item) => item.id === id),
    [id, cart],
  );

  const quantityInCart = useMemo(
    () => cart.find((item) => item.id === id)?.quantity || 0,
    [id, cart],
  );

  return (
    <div className={`bg-pink-100 border border-pink-300 p-4 rounded-xl shadow-md transition-transform transform hover:scale-105 flex flex-col justify-between ${user?.role === "client" && "min-h-[240px]"}`}>	
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-pink-700">{name}</h3>
        <p className="text-sm text-gray-500">📂 {category}</p>
        <p className="text-gray-600 text-sm">Precio: {formatPrice(price)}</p>
        <p className="text-gray-700 font-semibold">
          Total (c/ impuesto): {formatPrice(totalPrice)}
        </p>
        <p
          className={`text-sm ${stock > 0 ? "text-green-600" : "text-red-500"}`}
        >
          {stock > 0 ? `Stock: ${stock} disponibles` : "Agotado"}
        </p>

        {!productIsInCart && user?.role === "client" && (
          <div className="flex items-center mt-2">
            <label className="text-gray-600 mr-2">Cantidad:</label>
            <input
              type="number"
              min="1"
              max={stock}
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 p-1 border rounded text-center bg-white shadow-sm"
              disabled={stock === 0 || productIsInCart}
            />
          </div>
        )}
      </div>

      {user?.role === "client" && (
        <button
          onClick={() => {
            addToCart({ id, name, price, tax, quantity })
            showToast("Producto añadido al carrito", "success");
          }}
          disabled={stock === 0 || quantity <= 0 || productIsInCart}
          className={`mt-3 w-full px-4 py-2 rounded-lg transition transform active:scale-95 ${
            stock > 0 && quantity > 0 && !productIsInCart
              ? "bg-pink-500 text-white hover:bg-pink-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {!quantityInCart
            ? `🛍️ Añadir ${quantity} al carrito`
            : `🛍️ Ya en el carrito (${quantityInCart})`}
        </button>
      )}
    </div>
  );
};

export default ProductCard;
