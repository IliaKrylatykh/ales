const IMAGE_BASE_URL = "https://api.krylshop.ru/api/image/";

export const getImageUrl = (hash: string): string => {
  return IMAGE_BASE_URL + hash;
};
