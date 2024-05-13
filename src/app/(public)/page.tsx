"use client";

import { ProductService } from "@/entities/product";
import { Spinner } from "@/shared/ui/spinner";
import { ProductList } from "@/widgets/product-list/product-list";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: ProductService.getProducts,
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <Spinner fontSize={40} fullPage />;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="flex min-h-screen flex-col p-8">
      <ProductList products={data || []} />
    </div>
  );
}
