export const getRoute = {
  Main: () => "/",
  About: () => "/about",
  Product: (productId: string | number) => `/products/${productId}`,
};
