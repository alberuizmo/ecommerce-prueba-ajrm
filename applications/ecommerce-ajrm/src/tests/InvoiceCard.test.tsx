import { render, screen } from "@testing-library/react";
import InvoiceCard from "../components/InvoiceCard";
import { InvoiceCardProps } from "../types/Index";
import { describe, it, expect } from "vitest";

const mockInvoice: InvoiceCardProps = {
  invoice: {
    id: 1,
    user: "Juan Pérez",
    date: "2024-03-19",
    billingInfo: {
      name: "Juan Pérez",
      email: "juan@example.com",
      country: "México",
    },
    items: [
      { id: 1, name: "Producto A", quantity: 2, price: 50, tax: 5 },
      { id: 2, name: "Producto B", quantity: 1, price: 100, tax: 10 },
    ],
    total: 220,
  },
};

describe("InvoiceCard Component", () => {
  it("debe renderizar el nombre del usuario y la fecha", () => {
    render(<InvoiceCard {...mockInvoice} />);

    expect(
      screen.getByText(/pedido de Juan Pérez - 2024-03-19/i)
    ).toBeInTheDocument();
  });

  it("debe mostrar la información de facturación", () => {
    render(<InvoiceCard {...mockInvoice} />);

    expect(screen.getByText(/📍 México/i)).toBeInTheDocument();
    expect(screen.getByText(/📧 juan@example.com/i)).toBeInTheDocument();
  });

  it("debe mostrar los productos con su cantidad y precio", () => {
    render(<InvoiceCard {...mockInvoice} />);

    expect(screen.getByText(/Producto A \(x2\)/i)).toBeInTheDocument();

    expect(screen.getAllByText(/110[.,]00\s?US\$/i)).toHaveLength(2);

    expect(screen.getByText(/Producto B \(x1\)/i)).toBeInTheDocument();
  });

  it("debe mostrar el total correcto", () => {
    render(<InvoiceCard {...mockInvoice} />);

    expect(screen.getAllByText(/220[.,]00\s?US\$/i)).toHaveLength(1);
  });
});
