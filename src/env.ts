import { z } from "zod"

const envSchema = z.object({
  NODE_ENV: z.enum(["production", "development", "test"]),
  POSTGRES_PRISMA_URL: z.string().url(),
  JWT_SECRET: z.string(),
})

export const env = envSchema.parse(process.env)
