import useProductStore from "../stores/useProductStore";

const Home: React.FC = () => {
  const { products } = useProductStore();

/*   useEffect(() => {
    // Simulación de carga de productos
    loadProducts([
      { id: 1, name: "Producto 1", price: 100, description: "Descripción 1" },
      { id: 2, name: "Producto 2", price: 150, description: "Descripción 2" },
      { id: 3, name: "Producto 3", price: 200, description: "Descripción 3" },
    ]);
  }, [loadProducts]); */

  return (
    <div>
      <h1>Bienvenido a la tienda</h1>
      <h2>Catálogo de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            {/* <p>{product.description}</p> */}
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
