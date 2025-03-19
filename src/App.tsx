import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import InvoicesList from "./components/InvoicesList";
import PrivateRoute from "./components/PrivateRoute";
import { ToastProvider } from "./context/ToastProvider";

const App: React.FC = () => {
  return (
    <ToastProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-6">
            <Routes>
              {/* Rutas accesibles para todos */}
              <Route path="/" element={<ProductList />} />

              {/* Rutas solo para clientes */}
              <Route element={<PrivateRoute allowedRoles={["client"]} />}>
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
              </Route>

              {/* Rutas solo para administradores */}
              <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
                <Route path="/invoices" element={<InvoicesList />} />
              </Route>

              {/* Redirigir cualquier otra ruta no permitida a "/" */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ToastProvider>
  );
};

export default App;
