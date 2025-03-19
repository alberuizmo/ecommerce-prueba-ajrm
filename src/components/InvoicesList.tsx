import React, { useEffect, useState } from "react";
import { useAuthStore } from "../stores/useAuthStore";
import { Invoice } from "../types/Index";

const InvoicesList: React.FC = () => {
  const { user } = useAuthStore();
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    const storedInvoices = JSON.parse(localStorage.getItem("invoices") || "[]");
    setInvoices(storedInvoices);
  }, []);

  if (!user || user.role !== "admin") {
    return (
      <p className="text-center text-red-500 font-semibold">
        Acceso denegado ❌
      </p>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          📜 Lista de Facturas
        </h2>
        {invoices.length === 0 ? (
          <p className="text-gray-600">No hay facturas registradas.</p>
        ) : (
          <ul className="space-y-4">
            {invoices.map((invoice) => (
              <li key={invoice.id} className="p-4 border rounded-lg bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-700">
                  🛒 Pedido de {invoice.user} - {invoice.date}
                </h3>
                <p className="text-sm text-gray-500">
                  📍 {invoice.billingInfo.country}
                </p>
                <p className="text-sm text-gray-500">
                  📧 {invoice.billingInfo.email}
                </p>

                <ul className="mt-2 text-gray-700">
                  {invoice.items.map((item) => (
                    <li key={item.id} className="flex justify-between">
                      <span>
                        {item.name} (x{item.quantity})
                      </span>
                      <span>
                        $
                        {(
                          item.price * item.quantity +
                          item.tax * item.quantity
                        ).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="font-bold text-gray-900 mt-2">
                  Total: ${invoice.total.toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InvoicesList;
