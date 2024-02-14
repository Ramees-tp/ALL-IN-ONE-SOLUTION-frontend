import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:917",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const Token = localStorage.getItem("jwt");
    console.log("Ax Token:",Token);
    if (Token) {
      config.headers["Authorization"] = `Bearer ${Token}`;
    }
    config.withCredentials = true
    return config;
  },
  (error) => {
    console.error("Interceptor Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;


