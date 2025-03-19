import { render, screen } from "@testing-library/react";
import HelloWorld from "../components/HelloWorld";

test("Muestra el texto correctamente", () => {
  render(<HelloWorld />);
  expect(screen.getByText("Hello, World!")).toBeInTheDocument();
});
