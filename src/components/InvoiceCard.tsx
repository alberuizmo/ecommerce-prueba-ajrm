import React from "react";
import { InvoiceCardProps, InvoiceRow } from "../types/Index";
import { formatPrice } from "../utils/utilsEcommerce";

const InvoiceRowItem: React.FC<InvoiceRow> = (item) => {
  return (
    <li key={item.id} className="flex justify-between">
      <span>
        {item.name} (x{item.quantity})
      </span>
      <span>
        { formatPrice(item.price * item.quantity + item.tax * item.quantity) }
      </span>
    </li>
  );
};

const InvoiceCard: React.FC<InvoiceCardProps> = ({ invoice }) => {
  return (
    <li key={invoice.id} className="p-4 border rounded-lg bg-gray-50">
      <h3 className="text-lg font-semibold text-gray-700">
        🛒 Pedido de {invoice.user} - {invoice.date}
      </h3>
      <p className="text-sm text-gray-500">📍 {invoice.billingInfo.country}</p>
      <p className="text-sm text-gray-500">📧 {invoice.billingInfo.email}</p>

      <ul className="mt-2 text-gray-700">
        {invoice.items.map((item) => (
          <InvoiceRowItem key={item.id} {...item} />
        ))}
      </ul>

      <p className="font-bold text-gray-900 mt-2">
        Total: { formatPrice(invoice.total) }
      </p>
    </li>
  );
};

export default InvoiceCard;
