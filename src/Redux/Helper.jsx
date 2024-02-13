import axios from "axios";

let adminUrl = "https://corefitserver.onrender.com"
export const baseURL = adminUrl;
let axiosInstance = axios.create({
    baseURL,
})

axiosInstance.interceptors.request.use(
    async function (config) {
      const token = localStorage.getItem("token") || sessionStorage.getItem("token");
      if (token !== null || token !== undefined) {
        config.headers["x-access-token"] = token;
      }
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );

export const image1 = (media) => {
    return `https://corefitserver.onrender.com/${media}`;
}

export { adminUrl };
export default axiosInstance;