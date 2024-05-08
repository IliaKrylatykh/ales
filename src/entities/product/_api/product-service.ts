import axiosInstance from "@/shared/config/axios";

const PRODUCTS = "products";

export const ProductService = {
  async getProducts() {
    const { data } = await axiosInstance.get(PRODUCTS);
    return data;
  },

  async getProduct(id: string | number) {
    const { data } = await axiosInstance.get(`${PRODUCTS}/${id}`);
    return data;
  },
};
