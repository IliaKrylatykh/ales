import Image from "next/image";
import { ProductEntity } from "@/entities/product";
import { getCompressedImageUrl, getImageUrl } from "@/shared/lib/getImageUrl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ProductPreviewCard({ product }: { product: ProductEntity }) {
  const router = useRouter();
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const handleNavigate = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div
      className="relative overflow-hidden rounded-md flex-none w-full h-48 shadow-2xl cursor-pointer"
      onClick={handleNavigate}
    >
      <Image
        src={
          isImageLoaded
            ? getImageUrl(product.images[0])
            : getCompressedImageUrl(product.images[0])
        }
        alt={product.name}
        layout="fill"
        objectFit="cover"
        className="transition-all hover:scale-105"
        onLoad={() => setIsImageLoaded(true)}
      />

      <div className="absolute top-0 left-0 p-4 bg-black bg-opacity-50">
        <p className="text-white">{product.name}</p>
      </div>
    </div>
  );
}
