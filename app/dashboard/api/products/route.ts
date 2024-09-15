import { cardData } from "./card";

export async function GET() {
  return new Response(JSON.stringify(cardData), {
    headers: { "content-type": "application/json" },
  });
}


