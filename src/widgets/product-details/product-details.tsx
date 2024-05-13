"use client";

import { ProductCarousel } from "./_ui/product-carousel";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import {
  BadgeDollarSignIcon,
  Boxes,
  Check,
  DollarSign,
  DollarSignIcon,
  Mail,
  Send,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { ProductService } from "@/entities/product";
import { Badge } from "@/shared/ui/badge";
import { Categories } from "@/entities/category";
import { Spinner } from "@/shared/ui/spinner";
import { ProductTypes } from "@/entities/category/_model/consts";
import { LogoIcon } from "@/shared/ui/logo-icon";

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

  if (isLoading || !product) return <Spinner fontSize={40} fullPage />;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <>
      <div className="block md:flex justify-between p-12">
        <ProductCarousel product={product} />
        <Card className="mt-8 md:mt-0 ml-0 md:ml-16 w-full flex flex-col justify-between">
          <CardHeader>{product.name}</CardHeader>

          <CardContent>
            <p>{product.description}</p>

            <div className="flex mt-4 gap-2">
              <Badge variant="secondary">{ProductTypes[product.typeId]}</Badge>
              {product.categoryIds.map((categoryId) => {
                const categoryName = Categories[categoryId];
                return (
                  <Badge key={categoryId} variant="outline">
                    {categoryName}
                  </Badge>
                );
              })}
            </div>
            <div className="flex justify-end mt-2">
              <Boxes style={{ color: "#422f64" }} />
              <span className="font-bold mx-2">{product.quantity}</span>
              <span>in stock</span>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end mt-2">
            <h2 className="mr-4 text-3xl">${product.price}</h2>
            <span className="text-xl">₾{Math.ceil(product.price * 2.7)}</span>
          </CardFooter>
        </Card>
      </div>

      <Card className="mx-12 mb-4">
        <CardHeader>
          If you are interested in this product, contact me via Telegram:
          <div className="mt-2">
            <a
              href="https://t.me/alena_krylatykh"
              target="_blank"
              className="flex"
            >
              <Send style={{ color: "#3964ca" }} />
              <span className="ml-2">Telegram</span>
            </a>
          </div>
        </CardHeader>

        <CardContent>
          You can also contact me by email:
          <div className="flex gap-2 mt-2">
            <Mail style={{ color: "#1f408e" }} />
            <span>familykrylatykh@gmail.com</span>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center">
          <LogoIcon className="w-20" />
        </CardFooter>
      </Card>
    </>
  );
}
