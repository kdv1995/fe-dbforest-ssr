import { StepIndicator } from "@/components/ui/stepper";
import { getProducts } from "../../actions/get-products";
import Link from "next/link";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default async function ProductsPage() {
  const products = await getProducts();
  const steps = [
    { step: 1, label: "Select Product" },
    { step: 2, label: "Deploy Product" },
    { step: 3, label: "Configure Deployment" },
  ];

  return (
    <>
      <StepIndicator currentStep={1} steps={steps} />
      <h2 className="my-8 scroll-m-20 pb-2 text-4xl font-semibold tracking-tight">
        Choose a Software stack
      </h2>
      <div className="grid grid-cols-12 gap-x-6 gap-y-6">
        {products.map((card, index) => {
          return (
            <Card
              key={index}
              className="col-span-3 flex min-h-[359px] flex-col px-4 py-6"
            >
              <CardTitle className="mb-3">{card.title}</CardTitle>
              <CardDescription className="flex flex-grow flex-col">
                {card.description}
              </CardDescription>
              <Link href={card.href}>
                <Button>Select </Button>
              </Link>
            </Card>
          );
        })}
      </div>
    </>
  );
}
