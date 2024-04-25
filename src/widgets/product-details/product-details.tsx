import { ProductEntity } from "@/entities/product";
import { ProductCarousel } from "./ui/product-carousel";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Check } from "lucide-react";

export function ProductDetails({ product }: { product: ProductEntity }) {
  return (
    <div className="block md:flex justify-between p-12">
      <ProductCarousel product={product} />
      <Card className="mt-8 md:mt-0 w-[400px]">
        <CardHeader>{product.name}</CardHeader>

        <CardContent>
          <p>{product.description}</p>
        </CardContent>

        <CardFooter>
          <Button className="w-full">
            <Check className="mr-2 h-4 w-4" /> Nice!
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
