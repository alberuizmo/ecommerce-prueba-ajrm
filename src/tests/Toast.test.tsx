import { render, screen, act } from "@testing-library/react";
import Toast from "../components/Toast";
import { vi } from "vitest";

describe("Toast Component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test("Se oculta automáticamente después de 3 segundos y llama a onClose", () => {
    const onCloseMock = vi.fn();

    render(<Toast message="Desaparezco en 3s" onClose={onCloseMock} />);


    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(onCloseMock).toHaveBeenCalled();
    expect(screen.queryByText("Desaparezco en 3s")).not.toBeInTheDocument();
  });
});
