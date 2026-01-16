import type { Request, Response, NextFunction } from 'express';
import type { AuthenticatedRequest } from '../middlewares/auth.middleware';
import { asyncHandler, AppError } from '../middlewares/error.middleware';
import { supabase, verifySupabaseToken } from '../utils/supabase';
import { config } from '../config/env';
import * as authService from '../services/auth.service';

/**
 * Helper to get the OAuth callback URL
 */
const getCallbackUrl = (req: Request) => {
  const backendUrl = config.BACKEND_URL || `${req.protocol}://${req.get('host')}`;
  return `${backendUrl}/api/v1/auth/callback`;
};

/**
 * GET /auth/google
 * Initiates Google OAuth flow via Supabase
 * Redirects user to Google sign-in
 */
export const googleAuth = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: getCallbackUrl(req),
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });

  if (error || !data.url) {
    throw new AppError('Failed to initiate Google authentication', 500, { code: 'OAUTH_INIT_FAILED' });
  }

  res.redirect(data.url);
});

/**
 * GET /auth/apple
 * Initiates Apple OAuth flow via Supabase
 * Redirects user to Apple sign-in
 */
export const appleAuth = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'apple',
    options: {
      redirectTo: getCallbackUrl(req),
    },
  });

  if (error || !data.url) {
    throw new AppError('Failed to initiate Apple authentication', 500, { code: 'OAUTH_INIT_FAILED' });
  }

  res.redirect(data.url);
});

/**
 * GET /auth/callback
 * OAuth callback handler - receives code from Supabase after OAuth
 * Exchanges code for session and redirects to app with token
 */
export const oauthCallback = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const { code, error: oauthError, error_description } = req.query;

  if (oauthError) {
    // Redirect to app with error
    const errorUrl = `${config.APP_SCHEME}://auth/error?error=${encodeURIComponent(oauthError as string)}&message=${encodeURIComponent(error_description as string || 'Authentication failed')}`;
    return res.redirect(errorUrl);
  }

  if (!code || typeof code !== 'string') {
    const errorUrl = `${config.APP_SCHEME}://auth/error?error=missing_code&message=No authorization code received`;
    return res.redirect(errorUrl);
  }

  // Exchange code for session
  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error || !data.session) {
    const errorUrl = `${config.APP_SCHEME}://auth/error?error=exchange_failed&message=${encodeURIComponent(error?.message || 'Failed to exchange code')}`;
    return res.redirect(errorUrl);
  }

  // Sync user to local database
  const payload = await verifySupabaseToken(data.session.access_token);
  if (payload) {
    await authService.syncUser(payload);
  }

  // Redirect to app with tokens
  const successUrl = `${config.APP_SCHEME}://auth/callback?access_token=${data.session.access_token}&refresh_token=${data.session.refresh_token}&expires_at=${data.session.expires_at}`;
  res.redirect(successUrl);
});

/**
 * POST /auth/login
 * Login/Register with Supabase token (from Google/Apple OAuth)
 * Alternative: call this after OAuth if not using redirect flow
 */
export const login = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const { token } = req.body;

  if (!token) {
    throw new AppError('Supabase access token is required', 400, { code: 'TOKEN_REQUIRED' });
  }

  const payload = await verifySupabaseToken(token);
  if (!payload) {
    throw new AppError('Invalid or expired token', 401, { code: 'INVALID_TOKEN' });
  }

  const user = await authService.syncUser(payload);

  if (!user.isActive) {
    throw new AppError('Account is deactivated', 403, { code: 'ACCOUNT_DEACTIVATED' });
  }

  res.json({
    success: true,
    data: {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatarUrl: user.avatarUrl,
        provider: user.provider,
        createdAt: user.createdAt,
      },
    },
    message: 'Login successful',
  });
});

/**
 * POST /auth/refresh
 * Refresh the Supabase session using refresh token
 */
export const refreshToken = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const { refresh_token } = req.body;

  if (!refresh_token) {
    throw new AppError('Refresh token is required', 400, { code: 'REFRESH_TOKEN_REQUIRED' });
  }

  const { data, error } = await supabase.auth.refreshSession({ refresh_token });

  if (error || !data.session) {
    throw new AppError('Failed to refresh session', 401, { code: 'REFRESH_FAILED' });
  }

  res.json({
    success: true,
    data: {
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
      expires_at: data.session.expires_at,
    },
  });
});

/**
 * POST /auth/logout
 * Logout user (invalidate session on Supabase)
 */
export const logout = asyncHandler(async (_req: Request, res: Response, _next: NextFunction) => {
  await supabase.auth.signOut();

  res.json({
    success: true,
    message: 'Logged out successfully',
  });
});

/**
 * GET /auth/me
 * Get current authenticated user's profile
 */
export const getMe = asyncHandler(async (req, res: Response, _next: NextFunction) => {
  const authReq = req as AuthenticatedRequest;
  const user = await authService.getUserById(authReq.user.id);

  if (!user) {
    throw new AppError('User not found', 404, { code: 'USER_NOT_FOUND' });
  }

  if (!user.isActive) {
    throw new AppError('User account is deactivated', 403, { code: 'USER_DEACTIVATED' });
  }

  res.json({
    success: true,
    data: {
      id: user.id,
      email: user.email,
      name: user.name,
      avatarUrl: user.avatarUrl,
      provider: user.provider,
      createdAt: user.createdAt,
    },
  });
});

/**
 * PATCH /auth/profile
 * Update user profile (name, avatar)
 */
export const updateProfile = asyncHandler(async (req, res: Response, _next: NextFunction) => {
  const authReq = req as AuthenticatedRequest;
  const { name, avatarUrl } = req.body;

  const user = await authService.updateUser(authReq.user.id, {
    name,
    avatarUrl,
  });

  res.json({
    success: true,
    data: {
      id: user.id,
      email: user.email,
      name: user.name,
      avatarUrl: user.avatarUrl,
      provider: user.provider,
    },
    message: 'Profile updated successfully',
  });
});

/**
 * DELETE /auth/deactivate
 * Soft delete user account
 */
export const deactivateAccount = asyncHandler(async (req, res: Response, _next: NextFunction) => {
  const authReq = req as AuthenticatedRequest;
  await authService.deactivateUser(authReq.user.id);

  res.json({
    success: true,
    message: 'Account deactivated successfully',
  });
});
