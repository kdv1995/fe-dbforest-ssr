import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CardData } from "../api/products/data";
const isDev = process.env.NODE_ENV === "development";
const localhost = process.env.NEXT_PUBLIC_LOCALHOST;
const prod = process.env.NEXT_PUBLIC_API_URL;
const api = isDev ? localhost : prod;

export const getProducts = async () => {
  try {
    const response = await fetch(`${api}/dashboard/api/products`);
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }
    const data = await response.json();
    return data as CardData[];
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array or handle appropriately
  }
};

export async function setOfferCookie(offer: string, userID: number) {
  cookies().set({
    name: "selectedOffer",
    value: offer,
    httpOnly: true,
    path: "/",
  });
  cookies().set({
    name: "userID",
    value: String(userID),
    httpOnly: true,
  });

  return redirect(
    `/dashboard/getting-started/products/software-stack/${offer}/configure/${offer}`,
  );
}
