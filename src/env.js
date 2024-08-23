import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    API_KEY: z.string(),
    AUTHDOMAIN: z.string(),
    PROJECTID: z.string(),
    STORAGEBUCKET: z.string(),
    MESSAGINGSENDERID: z.string(),
    APPID: z.string(),
  },

  client: {},

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    API_KEY: process.env.API_KEY,
    AUTHDOMAIN: process.env.AUTHDOMAIN,
    PROJECTID: process.env.PROJECTID,
    STORAGEBUCKET: process.env.STORAGEBUCKET,
    MESSAGINGSENDERID: process.env.MESSAGINGSENDERID,
    APPID: process.env.APPID,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  emptyStringAsUndefined: true,
});
