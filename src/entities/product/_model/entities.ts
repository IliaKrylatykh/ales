import { StaticImageData } from "next/image";

type ProductId = string;

export type ProductEntity = {
  id: ProductId;
  name: string;
  slug: string;
  description: string;
  images: string[];
  quantity: number;
  categoryIds: number[];
  socialLinks: {
    youtube?: string;
    instagram?: string;
  };
};
