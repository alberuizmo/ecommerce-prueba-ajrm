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

              <Route path="/" element={<ProductList />} />

              <Route element={<PrivateRoute allowedRoles={["client"]} />}>
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
              </Route>

              <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
                <Route path="/invoices" element={<InvoicesList />} />
              </Route>

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
