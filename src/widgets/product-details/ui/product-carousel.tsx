import { ProductEntity } from "@/entities/product";
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
    <div className="w-[400px]">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {product.images.map((image, index) => {
            return (
              <CarouselItem key={image.src}>
                <Image
                  src={image.src}
                  alt={`product image ${index}`}
                  width={400}
                  height={400}
                  objectFit="cover"
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
