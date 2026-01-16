import type { Request, Response, NextFunction } from 'express';
import { verifySupabaseToken, type SupabaseJwtPayload } from '../utils/supabase';
import { AppError } from './error.middleware';

/**
 * Extended Request type with authenticated user
 */
export interface AuthenticatedRequest extends Request {
  user: {
    id: string;
    email?: string;
    provider?: string;
    metadata: SupabaseJwtPayload['user_metadata'];
  };
}

/**
 * Authentication middleware - requires valid Supabase JWT
 * Extracts user info from token and attaches to request
 */
export const authenticate = async (
  req: Request,
  _res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new AppError('Authorization header is required', 401, { code: 'AUTH_REQUIRED' });
    }

    // Extract token from "Bearer <token>"
    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      throw new AppError('Invalid authorization format. Use: Bearer <token>', 401, {
        code: 'INVALID_AUTH_FORMAT',
      });
    }

    const token = parts[1];
    const payload = await verifySupabaseToken(token);

    if (!payload) {
      throw new AppError('Invalid or expired token', 401, { code: 'INVALID_TOKEN' });
    }

    // Attach user to request
    (req as AuthenticatedRequest).user = {
      id: payload.sub,
      email: payload.email || payload.user_metadata?.email,
      provider: payload.app_metadata?.provider,
      metadata: payload.user_metadata,
    };

    next();
  } catch (error) {
    if (error instanceof AppError) {
      next(error);
    } else {
      next(new AppError('Authentication failed', 401, { code: 'AUTH_FAILED' }));
    }
  }
};

/**
 * Optional authentication middleware
 * Attaches user if token is valid, but doesn't fail if missing
 */
export const optionalAuth = async (
  req: Request,
  _res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return next();
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      return next();
    }

    const token = parts[1];
    const payload = await verifySupabaseToken(token);

    if (payload) {
      (req as AuthenticatedRequest).user = {
        id: payload.sub,
        email: payload.email || payload.user_metadata?.email,
        provider: payload.app_metadata?.provider,
        metadata: payload.user_metadata,
      };
    }

    next();
  } catch {
    // Silently continue without authentication
    next();
  }
};

/**
 * Type guard to check if request is authenticated
 */
export const isAuthenticated = (req: Request): req is AuthenticatedRequest => {
  return 'user' in req && typeof (req as AuthenticatedRequest).user?.id === 'string';
};
