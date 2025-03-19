import { API_BASE_URL } from "../config/constants";
import { Country } from "../types/Index";

export const fetchCountries = async (): Promise<string[]> => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) throw new Error("Error al obtener la lista de países");
    const data = await response.json();
    return data.map((country: Country) => country.name.common).sort();
  } catch (error) {
    console.error("Error al obtener los países:", error);
    return [];
  }
};
