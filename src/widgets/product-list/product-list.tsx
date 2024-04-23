import { ProductEntity } from "@/entities/product";
import { ProductPreviewCard } from "./_ui/product-preview-card";
import { ProductPreview } from "./_ui/product-preview";

export function ProductList({ products }: { products: ProductEntity[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 p-4">
      {products.map((product) => (
        <ProductPreview key={product.id} product={product} />
      ))}
    </div>
  );
}
