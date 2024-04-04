import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:917",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const Token = localStorage.getItem("jwt");
    if (Token) {
      config.headers["Authorization"] = `Bearer ${Token}`;
    }
    config.withCredentials = true
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;


