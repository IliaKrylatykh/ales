import Image from "next/image";
import { ProductEntity } from "@/entities/product";

export function ProductPreviewCard({
  product,
  onOpenSheet,
}: {
  product: ProductEntity;
  onOpenSheet: () => void;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-md flex-none w-full h-48 shadow-2xl cursor-pointer"
      onClick={onOpenSheet}
    >
      <Image
        src={product.images[0]}
        alt={product.name}
        layout="fill"
        objectFit="cover"
        className="transition-all hover:scale-105"
      />
      <div className="absolute top-0 left-0 p-4 bg-black bg-opacity-50">
        <p className="text-white">{product.name}</p>
      </div>
    </div>
  );
}
