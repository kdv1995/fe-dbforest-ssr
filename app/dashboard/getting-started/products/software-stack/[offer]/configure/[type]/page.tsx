import { Button } from "@/components/ui/button";
import { StepIndicator } from "@/components/ui/stepper";
import Link from "next/link";
import { cookies } from "next/headers";

export default async function Configure({
  params,
}: {
  params: {
    type: string;
  };
}) {
  const steps = [
    { step: 1, label: "Software stack" },
    { step: 2, label: "Available offers" },
    { step: 3, label: "Configure Deployment" },
  ];

  const cookieStore = cookies();
  const selectedOffer = cookieStore.get("selectedOffer")?.value;

  return (
    <>
      <StepIndicator currentStep={3} steps={steps} />
      <h2 className="my-8 scroll-m-20 pb-2 text-4xl font-semibold tracking-tight">
        Configure
      </h2>
      <Link href={`/`}>
        <Button>Deploy</Button>
      </Link>
    </>
  );
}
