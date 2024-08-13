// src/utils/axiosInstance.ts

import axios from "axios";
import env from "./env-config";

const axiosInstance = axios.create({
  baseURL: env.providerBaseUrl,
  timeout: 10000,
});

export default axiosInstance;
