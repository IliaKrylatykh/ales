import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://147.45.187.26/api",
});

export default axiosInstance;
