import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.krylshop.ru/api",
});

export default axiosInstance;
