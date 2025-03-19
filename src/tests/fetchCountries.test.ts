import { fetchCountries } from "../services/countryService";
import { vi } from "vitest";

global.fetch = vi.fn();

describe("fetchCountries", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("Devuelve una lista de países ordenados al recibir una respuesta válida", async () => {
    const mockData = [
      { name: { common: "México" } },
      { name: { common: "Argentina" } },
      { name: { common: "Brasil" } }
    ];

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const result = await fetchCountries();
    
    expect(result).toEqual(["Argentina", "Brasil", "México"]);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("https://restcountries.com/v3.1/region/america");
  });

  test("Devuelve un array vacío si la API responde con error", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    const result = await fetchCountries();
    
    expect(result).toEqual([]);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("Devuelve un array vacío si ocurre un error en la petición", async () => {
    (fetch as jest.Mock).mockRejectedValue(new Error("Network error"));

    const result = await fetchCountries();
    
    expect(result).toEqual([]);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
