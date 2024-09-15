import { Button } from "@/components/ui/button";
import { StepIndicator } from "@/components/ui/stepper";
import Link from "next/link";
import { cookies } from "next/headers";
import { setOfferCookie } from "@/app/dashboard/api/products/route";

export default async function AvailableOffers({
  params,
}: {
  params: {
    offer: string;
  };
}) {
  const steps = [
    { step: 1, label: "Software stack" },
    { step: 2, label: "Available offers" },
    { step: 3, label: "Configure Deployment" },
  ];
  async function handleSubmit() {
    "use server"; // This makes the function a server action
    await setOfferCookie(params.offer, 25 );
  }

  return (
    <>
      <StepIndicator currentStep={2} steps={steps} />
      <h2 className="my-8 scroll-m-20 pb-2 text-4xl font-semibold tracking-tight">
        Available offers
      </h2>
      <form action={handleSubmit}>
        <Button type="submit" variant="secondary">
          Deploy
        </Button>
      </form>
    </>
  );
}
