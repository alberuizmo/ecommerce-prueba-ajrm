import { Country } from "../types/Index";

const API_URL = "https://restcountries.com/v3.1/region/america";

export const fetchCountries = async (): Promise<string[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener la lista de países");
    const data = await response.json();
    return data.map((country: Country) => country.name.common).sort();
  } catch (error) {
    console.error("Error al obtener los países:", error);
    return [];
  }
};
