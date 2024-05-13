"use client";

import { ProductEntity } from "@/entities/product";
import { getCompressedImageUrl, getImageUrl } from "@/shared/lib/getImageUrl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";
import Image from "next/image";
import { useState } from "react";

export function ProductCarousel({ product }: { product: ProductEntity }) {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean[]>(
    Array(product.images.length).fill(false),
  );

  return (
    <div className="w-full max-w-[500px]">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {product.images.map((image, index) => {
            return (
              <CarouselItem
                key={index}
                className="relative h-[500px] w-full flex items-center"
              >
                <Image
                  src={
                    isImageLoaded[index]
                      ? getImageUrl(image)
                      : getCompressedImageUrl(image)
                  }
                  alt={`product image ${index}`}
                  layout="responsive"
                  width={500}
                  height={500}
                  className="image-fade"
                  priority={!isImageLoaded[index]}
                  onLoad={() =>
                    setIsImageLoaded((prevState) => {
                      const updatedLoaded = [...prevState];
                      updatedLoaded[index] = true;
                      return updatedLoaded;
                    })
                  }
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
