import React from "react";
import useProductStore from "../stores/useProductStore";
import useCartStore from "../stores/useCartStore";

const ProductList: React.FC = () => {
  const { products } = useProductStore();
  const { addToCart } = useCartStore();

  return (
    <div>
      <h2>🛒 Productos Disponibles</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{" "}
            <button onClick={() => addToCart(product)}>Añadir al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
