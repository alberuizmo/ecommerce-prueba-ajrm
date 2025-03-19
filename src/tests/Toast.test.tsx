import { render, screen, waitFor } from "@testing-library/react";
import Toast from "../components/Toast";
import { vi } from "vitest";

describe("Toast Component", () => {
  test("Muestra el mensaje correctamente", () => {
    render(<Toast message="Operación exitosa" onClose={() => {}} />);

    expect(screen.getByText("Operación exitosa")).toBeInTheDocument();
  });

  test("Aplica la clase correcta según el tipo de mensaje", () => {
    const { rerender } = render(
      <Toast message="Éxito" type="success" onClose={() => {}} />,
    );
    expect(screen.getByText("Éxito")).toHaveClass("bg-green-500");

    rerender(<Toast message="Error" type="error" onClose={() => {}} />);
    expect(screen.getByText("Error")).toHaveClass("bg-red-500");
  });

  test("Se oculta automáticamente después de 3 segundos y llama a onClose", async () => {
    const onCloseMock = vi.fn();

    render(<Toast message="Desaparezco en 3s" onClose={onCloseMock} />);

    await waitFor(
      () => {
        expect(onCloseMock).toHaveBeenCalled();
      },
      { timeout: 3100 },
    );

    expect(screen.queryByText("Desaparezco en 3s")).not.toBeInTheDocument();
  });
});
