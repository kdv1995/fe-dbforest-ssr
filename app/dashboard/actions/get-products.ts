import { cookies } from "next/headers";
import { CardData } from "../api/products/card";
import { redirect } from "next/navigation";
const isDev = process.env.NODE_ENV === "development";
const localhost = process.env.NEXT_PUBLIC_LOCALHOST;
const prod = process.env.NEXT_PUBLIC_API_URL;
const api = isDev ? localhost : prod;

export const getProducts = async () => {
  const response = await fetch(`${api}/dashboard/api/products`);
  const products = await response.json();
  return products as CardData[];
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
