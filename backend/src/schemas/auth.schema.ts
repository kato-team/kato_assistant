import { z } from 'zod';

/**
 * Schema for login request (Supabase token)
 */
export const loginSchema = z.object({
  body: z.object({
    token: z.string().min(1, 'Token is required'),
  }),
});

/**
 * Schema for refresh token request
 */
export const refreshTokenSchema = z.object({
  body: z.object({
    refresh_token: z.string().min(1, 'Refresh token is required'),
  }),
});

/**
 * Schema for updating user profile
 */
export const updateProfileSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(100).optional(),
    avatarUrl: z.string().url().optional(),
  }),
});

/**
 * Type inference from schemas
 */
export type LoginInput = z.infer<typeof loginSchema>['body'];
export type RefreshTokenInput = z.infer<typeof refreshTokenSchema>['body'];
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>['body'];
