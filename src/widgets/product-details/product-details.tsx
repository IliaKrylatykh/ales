"use client";

import { ProductCarousel } from "./_ui/product-carousel";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Check } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { ProductService } from "@/entities/product";

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: () => ProductService.getProduct(id),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="block md:flex justify-between p-12">
      <ProductCarousel product={product} />
      <Card className="mt-8 md:mt-0 ml-0 md:ml-16 w-full">
        <CardHeader>{product.name}</CardHeader>

        <CardContent>
          <p>{product.description}</p>
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
