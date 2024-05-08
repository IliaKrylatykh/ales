const IMAGE_BASE_URL = "http://147.45.187.26/api/image/";

export const getImageUrl = (hash: string): string => {
  return IMAGE_BASE_URL + hash;
};
