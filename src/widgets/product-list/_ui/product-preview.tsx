"use client";

import { useState } from "react";
import { ProductEntity } from "@/entities/product";
import { ProductPreviewCard } from "./product-preview-card";
import { ProductPreviewSheet } from "./product-preview-sheet";

export function ProductPreview({ product }: { product: ProductEntity }) {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const handleSheetChange = (open: boolean) => {
    setIsSheetOpen(open);
  };

  return (
    <div>
      <ProductPreviewCard
        product={product}
        onOpenSheet={() => handleSheetChange(true)}
      />
      <ProductPreviewSheet
        product={product}
        isOpen={isSheetOpen}
        onOpenChange={handleSheetChange}
      />
    </div>
  );
}
