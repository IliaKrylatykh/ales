"use client";

import { ProductEntity } from "@/entities/product";
import { getImageUrl } from "@/shared/lib/getImageUrl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";
import Image from "next/image";

export function ProductCarousel({ product }: { product: ProductEntity }) {
  return (
    <div className="w-full max-w-[500px]">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {product.images.map((image, index) => {
            return (
              <CarouselItem key={index} className="relative h-full w-full">
                <Image
                  src={getImageUrl(image)}
                  alt={`product image ${index}`}
                  layout="responsive"
                  width={500}
                  height={500}
                  className="transition-all hover:scale-105"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
