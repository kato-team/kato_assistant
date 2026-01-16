import { prisma } from '../utils/prisma';
import type { User } from '../../generated/prisma';
import type { SupabaseJwtPayload } from '../utils/supabase';

/**
 * Sync or create user from Supabase auth data
 * This ensures our local database stays in sync with Supabase Auth
 */
export async function syncUser(payload: SupabaseJwtPayload): Promise<User> {
  const { sub: id, email, user_metadata, app_metadata } = payload;

  const userData = {
    email: email || user_metadata?.email || '',
    name: user_metadata?.full_name || user_metadata?.name || null,
    avatarUrl: user_metadata?.avatar_url || user_metadata?.picture || null,
    provider: app_metadata?.provider || 'unknown',
    isActive: true,
  };

  // Upsert user - create if not exists, update if exists
  const user = await prisma.user.upsert({
    where: { id },
    create: {
      id,
      ...userData,
    },
    update: userData,
  });

  return user;
}

/**
 * Get user by ID
 */
export async function getUserById(id: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { id },
  });
}

/**
 * Get user by email
 */
export async function getUserByEmail(email: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { email },
  });
}

/**
 * Update user profile
 */
export async function updateUser(
  id: string,
  data: { name?: string; avatarUrl?: string }
): Promise<User> {
  return prisma.user.update({
    where: { id },
    data,
  });
}

/**
 * Deactivate user (soft delete)
 */
export async function deactivateUser(id: string): Promise<User> {
  return prisma.user.update({
    where: { id },
    data: { isActive: false },
  });
}

/**
 * Reactivate user
 */
export async function reactivateUser(id: string): Promise<User> {
  return prisma.user.update({
    where: { id },
    data: { isActive: true },
  });
}
