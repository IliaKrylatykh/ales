import axiosInstance from "@/shared/config/axios";
import { ProductEntity } from "../_model/entities";

const PRODUCTS = "products";

export const ProductService = {
  async getProducts() {
    const { data } = await axiosInstance.get<ProductEntity[]>(PRODUCTS);
    return data;
  },

  async getProduct(id: string | number) {
    const { data } = await axiosInstance.get<ProductEntity>(
      `${PRODUCTS}/${id}`,
    );
    return data;
  },
};
