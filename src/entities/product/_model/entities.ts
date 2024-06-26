type ProductId = string;

export type ProductEntity = {
  id: ProductId;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  quantity: number;
  typeId: number;
  categoryIds: number[];
  socialLinks: {
    youtube?: string;
    instagram?: string;
  };
};
