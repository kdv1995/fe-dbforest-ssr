import { cardData } from "./data";

export async function GET() {
  const res = Response.json(cardData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
}
