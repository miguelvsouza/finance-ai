import { z } from "zod"

const envSchema = z.object({
  NODE_ENV: z.enum(["production", "development", "test"]),
  POSTGRES_PRISMA_URL: z.string().url(),
  AUTH_URL: z.string().url(),
  AUTH_SECRET: z.string(),
  AUTH_GOOGLE_ID: z.string().url(),
  AUTH_GOOGLE_SECRET: z.string(),
})

export const env = envSchema.parse(process.env)
