import Image, { StaticImageData } from "next/image";
import { Button } from "@/shared/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/shared/ui/sheet";
import { ProductEntity } from "@/entities/product";
import { useEffect, useState } from "react";
import Link from "next/link";

export function ProductPreviewSheet({
  product,
  isOpen,
  onOpenChange,
}: {
  product: ProductEntity;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [selectedImage, setSelectedImage] = useState<StaticImageData>(
    product.images[0] || "",
  );
  const [imageOpacity, setImageOpacity] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setImageOpacity(1), 0.5);
    } else {
      setImageOpacity(0);
    }
  }, [isOpen]);

  const handleImageClick = (image: StaticImageData) => {
    setSelectedImage(image);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent>
        <div
          className="hidden lg:flex absolute -left-[620px] xl:-left-[720px] 2xl:-left-[950px] top-1/4 z-10"
          style={{
            opacity: imageOpacity,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <Image
            src={selectedImage}
            alt={`Selected ${product.name} image`}
            width={600}
            height={600}
            layout="fixed"
            className="shadow-lg rounded-lg"
          />
        </div>
        <SheetHeader>
          <SheetTitle>{product.name}</SheetTitle>
        </SheetHeader>
        <SheetDescription>{product.description}</SheetDescription>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          {product.images.map((img, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(img)}
              className="focus:outline-none"
            >
              <Image
                key={index}
                src={img}
                alt={`${product.name} image ${index + 1}`}
                width={200}
                height={200}
                layout="responsive"
              />
            </button>
          ))}
        </div>
        <Link className="mr-4" href={`/products/${product.id}`}>
          <Button>View detailed information</Button>
        </Link>
        <SheetClose asChild>
          <Button onClick={() => onOpenChange(false)} variant={"outline"}>
            Close
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
