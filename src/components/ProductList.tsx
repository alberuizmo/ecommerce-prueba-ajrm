import React from "react";
import useProductStore from "../stores/useProductStore";
import { useAuthStore } from "../stores/useAuthStore";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

const ProductList: React.FC = () => {
  const { products } = useProductStore();
  const { user } = useAuthStore();

  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
        🛒 Productos Disponibles
      </h2>
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row">
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
        {user?.role === "client" && (
          <div className="hidden lg:block w-64 ml-6">
            <Cart />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
