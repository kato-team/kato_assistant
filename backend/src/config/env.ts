import { z } from 'zod';

const envSchema = z.object({
  PORT: z.string().default('3000').transform((val) => parseInt(val, 10)),
  DATABASE_URL: z.string().url(),
  DIRECT_URL: z.string().url(),
  SUPABASE_URL: z.string().url(),
  SUPABASE_ANON_KEY: z.string().min(1),
});

// Validate process.env (or Bun.env)
const envParse = envSchema.safeParse(Bun.env);

if (!envParse.success) {
  console.error("❌ Invalid environment variables:", envParse.error.format());
  process.exit(1);
}

export const config = envParse.data;