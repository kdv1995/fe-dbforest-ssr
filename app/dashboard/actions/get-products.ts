import { cookies } from "next/headers";
import { CardData } from "../api/products/card";
import { redirect } from "next/navigation";

export const getProducts = async () => {
  const response = await fetch("http://localhost:3000/dashboard/api/products");
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
