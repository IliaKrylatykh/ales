import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://api.krylshop.ru/api",
  baseURL: "http://localhost:4200/api",
});

export default axiosInstance;
