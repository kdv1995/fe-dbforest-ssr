import { CardData } from "../api/products/route";

export const getProducts = async () => {
  const response = await fetch("http://localhost:3000/dashboard/api/products");
  const products = await response.json();
  return products as CardData[];
};
