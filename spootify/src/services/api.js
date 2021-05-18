import axios from "axios";
import apiConfig from "../config.js";

const axiosConfig = (url = apiConfig.api.baseUrl) => {
  const api = axios.create({ baseURL: url });

  return api;
};

export default axiosConfig;
