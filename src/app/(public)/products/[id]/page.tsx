import { productsArray } from "@/entities/product";
import { ProductDetails } from "@/widgets/product-details/product-details";

export default function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <ProductDetails product={productsArray[Number(params.id) - 1]} />
    </div>
  );
}
