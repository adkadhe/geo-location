// src/utils/envConfig.ts

import dotenv from "dotenv";

dotenv.config();

const env = {
  googleApiKey: process.env.GOOGLE_API_KEY,
  olaApiKey: process.env.OLA_API_KEY,
  provider: process.env.PROVIDER,
  providerBaseUrl: process.env.PROVIDER_BASE_URL,
  port: process.env.PORT,
  host: process.env.HOST,
};

export default env;
