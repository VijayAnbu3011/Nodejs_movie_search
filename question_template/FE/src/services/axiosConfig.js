import axios from "axios";

const baseURL = `http://localhost:4005`;

const axiosInstance = axios.create({ baseURL });
axiosInstance.interceptors.request.use(config => {
  config.headers = {
    "content-type": "application/json",
    ...config.headers,
  };
  return config;
});
export { axiosInstance };
