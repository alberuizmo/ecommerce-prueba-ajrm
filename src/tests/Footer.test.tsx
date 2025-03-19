import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  test("Muestra el copyright con el año actual", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} E-Shop. Todos los derechos reservados.`)).toBeInTheDocument();
  });

  test("Muestra los enlaces correctamente", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /sobre nosotros/i })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: /contacto/i })).toHaveAttribute("href", "/contact");
    expect(screen.getByRole("link", { name: /política de privacidad/i })).toHaveAttribute("href", "/privacy");
  });
});
