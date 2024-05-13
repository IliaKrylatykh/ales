const IMAGE_BASE_URL = "https://api.krylshop.ru/api/image/";
const COMPRESSED_IMAGE_BASE_URL = "http://api.krylshop.ru/api/imageComp/";
// const IMAGE_BASE_URL = "http://localhost:4200/api/image/";
// const COMPRESSED_IMAGE_BASE_URL = "http://localhost:4200/api/imageComp/";

export const getImageUrl = (hash: string): string => {
  return IMAGE_BASE_URL + hash;
};

export const getCompressedImageUrl = (hash: string): string => {
  return COMPRESSED_IMAGE_BASE_URL + hash;
};
