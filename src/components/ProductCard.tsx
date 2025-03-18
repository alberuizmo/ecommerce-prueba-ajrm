import useCartStore from "../stores/useCartStore";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-600">${price.toFixed(2)}</p>
      <button
        onClick={() => addToCart({ id, name, price })}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductCard;
