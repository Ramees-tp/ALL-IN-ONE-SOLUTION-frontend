import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:917",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const Token = localStorage.getItem("wjwt");
    console.log("Local Token:",Token);
    if (Token) {
      config.headers["Workerauth"] = `Bearer ${Token}`;
    }
    config.withCredentials = true
    console.log("worker coonf:",config);
    return config;
  },
  (error) => {
    console.error("Interceptor Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;


