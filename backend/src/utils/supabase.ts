import { createClient } from '@supabase/supabase-js';
import { config } from '../config/env';

// Create Supabase client for server-side operations
export const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

// Type for decoded Supabase JWT payload
export interface SupabaseJwtPayload {
  aud: string;
  exp: number;
  iat: number;
  iss: string;
  sub: string; // User ID
  email?: string;
  phone?: string;
  app_metadata: {
    provider?: string;
    providers?: string[];
  };
  user_metadata: {
    avatar_url?: string;
    email?: string;
    email_verified?: boolean;
    full_name?: string;
    iss?: string;
    name?: string;
    phone_verified?: boolean;
    picture?: string;
    provider_id?: string;
    sub?: string;
  };
  role?: string;
  aal?: string;
  amr?: Array<{ method: string; timestamp: number }>;
  session_id?: string;
}

/**
 * Verify a Supabase JWT token
 * Uses the JWT secret from environment to verify the token signature
 */
export async function verifySupabaseToken(token: string): Promise<SupabaseJwtPayload | null> {
  try {
    // Decode the JWT (base64url decode)
    const parts = token.split('.');
    if (parts.length !== 3) {
      return null;
    }

    // Verify the token using Web Crypto API
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(config.SUPABASE_JWT_SECRET),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    const signatureInput = `${parts[0]}.${parts[1]}`;
    const signature = base64UrlDecode(parts[2]);

    const isValid = await crypto.subtle.verify(
      'HMAC',
      key,
      signature,
      encoder.encode(signatureInput)
    );

    if (!isValid) {
      return null;
    }

    // Decode payload
    const payload = JSON.parse(
      new TextDecoder().decode(base64UrlDecode(parts[1]))
    ) as SupabaseJwtPayload;

    // Check expiration
    const now = Math.floor(Date.now() / 1000);
    if (payload.exp && payload.exp < now) {
      return null;
    }

    return payload;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

/**
 * Base64URL decode helper
 */
function base64UrlDecode(str: string): Uint8Array {
  // Add padding if needed
  const padded = str + '='.repeat((4 - (str.length % 4)) % 4);
  // Replace URL-safe characters
  const base64 = padded.replace(/-/g, '+').replace(/_/g, '/');
  // Decode
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}
