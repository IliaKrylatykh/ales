import Image from "next/image";
import { ProductEntity } from "@/entities/product";
import { getCompressedImageUrl, getImageUrl } from "@/shared/lib/getImageUrl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getRoute } from "@/shared/lib/getRoute";

export function ProductPreviewCard({ product }: { product: ProductEntity }) {
  const router = useRouter();
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const handleNavigate = () => {
    router.push(getRoute.Product(product.id));
  };

  return (
    <div
      className="relative overflow-hidden rounded-md flex-none w-full h-48 shadow-2xl cursor-pointer"
      onClick={handleNavigate}
    >
      <Image
        src={getCompressedImageUrl(product.images[0])}
        alt={product.name}
        fill
        objectFit="cover"
        className={`${isImageLoaded ? "opacity-0" : "opacity-100"}`}
      />
      <Image
        src={getImageUrl(product.images[0])}
        alt={product.name}
        fill
        objectFit="cover"
        onLoad={() => setIsImageLoaded(true)}
        style={{ opacity: isImageLoaded ? 1 : 0 }}
      />
      <div className="absolute top-0 left-0 p-4 bg-black bg-opacity-50">
        <p className="text-white">{product.name}</p>
      </div>
    </div>
  );
}
