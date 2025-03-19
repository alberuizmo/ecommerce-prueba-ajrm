import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi, beforeEach } from "vitest";
import CartItem from "../components/CartItem";
import { CartItemProps } from "../types/Index";

vi.mock("../utils/utilsEcommerce", () => ({
  formatPrice: vi.fn((price) => `$${price.toFixed(2)}`),
  totalWithTax: vi.fn((price, tax, quantity) => `$${(price * quantity * (1 + tax)).toFixed(2)}`),
}));

describe("CartItem Component", () => {
  let mockUpdateQuantity: (id: number, quantity: number) => void;
  let mockRemoveFromCart: (id: number) => void;
  let props: CartItemProps;

  beforeEach(() => {
    mockUpdateQuantity = vi.fn();
    mockRemoveFromCart = vi.fn();

    props = {
      id: 1,
      name: "Producto Test",
      price: 50,
      quantity: 2,
      tax: 0.1,
      updateQuantity: mockUpdateQuantity,
      removeFromCart: mockRemoveFromCart,
    };

    vi.clearAllMocks();
  });

  it("muestra correctamente el nombre y precios del producto", () => {
    render(<CartItem {...props} />);

    expect(screen.getByText("Producto Test")).toBeInTheDocument();
    expect(screen.getByText("Precio unitario: $50.00")).toBeInTheDocument();
    expect(screen.getByText("Total (c/ impuesto): $110.00")).toBeInTheDocument();
  });

  it("llama a `updateQuantity` al cambiar el input de cantidad", () => {
    render(<CartItem {...props} />);
    
    const input = screen.getByRole("spinbutton") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "3" } });

    expect(mockUpdateQuantity).toHaveBeenCalledWith(1, 3);
  });

  it("llama a `removeFromCart` al hacer clic en el botón de eliminar", () => {
    render(<CartItem {...props} />);

    const removeButton = screen.getByText("❌");
    fireEvent.click(removeButton);

    expect(mockRemoveFromCart).toHaveBeenCalledWith(1);
  });
});

