import { CartItemProps } from "../types/Index";
import { formatPrice, totalWithTax } from "ecommerce-utils-ajrm";

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  tax,
  updateQuantity,
  removeFromCart,
}) => {

  return (
    <div className="flex justify-between items-center p-2 border-b">
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-600">
          Precio unitario: {formatPrice(price)}
        </p>
        <p className="text-sm text-gray-800 font-semibold">
          Total (c/ impuesto): {totalWithTax(price, tax, quantity)}
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => updateQuantity(id, Number(e.target.value))}
          className="w-16 p-1 border rounded text-center"
        />
        <button
          onClick={() => removeFromCart(id)}
          className="text-red-500 hover:text-red-700"
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default CartItem;
