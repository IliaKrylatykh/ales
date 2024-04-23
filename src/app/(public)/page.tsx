import { productsArray } from "@/entities/product";
import { ProductList } from "@/widgets/product-list/product-list";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-8">
      <ProductList products={productsArray} />
    </div>
  );
}
