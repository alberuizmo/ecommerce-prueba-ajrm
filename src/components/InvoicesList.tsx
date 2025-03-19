import React, { useEffect, useState } from "react";
import { useAuthStore } from "../stores/useAuthStore";
import { Invoice } from "../types/Index";
import InvoiceCard from "./InvoiceCard";

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
              <InvoiceCard key={invoice.id} invoice={invoice} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InvoicesList;
