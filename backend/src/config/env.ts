import { z } from 'zod';

const envSchema = z.object({
  // Server
  PORT: z.string().default('8000').transform((val) => parseInt(val, 10)),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),

  // Database
  DATABASE_URL: z.string().url(),
  DIRECT_URL: z.string().url(),

  // Supabase
  SUPABASE_URL: z.string().url(),
  SUPABASE_ANON_KEY: z.string().min(1),
  SUPABASE_JWT_SECRET: z.string().min(32),

  // CORS
  FRONTEND_URL: z.string().url().optional(),

  // App Deep Link Scheme (for mobile OAuth callback)
  APP_SCHEME: z.string().default('katoapp'), // e.g., katoapp://

  // Backend URL (for OAuth callbacks)
  BACKEND_URL: z.string().url().optional(),

  // Rate Limiting
  RATE_LIMIT_WINDOW_MS: z.string().default('900000').transform((val) => parseInt(val, 10)), // 15 minutes
  RATE_LIMIT_MAX: z.string().default('100').transform((val) => parseInt(val, 10)),
});

// Validate environment variables
const envParse = envSchema.safeParse(process.env);

if (!envParse.success) {
  console.error('❌ Invalid environment variables:');
  console.error(envParse.error.format());
  process.exit(1);
}

export const config = envParse.data;

// Type export for use in other files
export type Config = typeof config;