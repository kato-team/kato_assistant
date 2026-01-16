import { Router } from 'express';
import { authenticate, authLimiter, strictLimiter, validate } from '../middlewares';
import { loginSchema, refreshTokenSchema, updateProfileSchema } from '../schemas/auth.schema';
import * as authController from '../controllers/auth.controller';

const router = Router();

// ============================================
// OAuth Redirect Flow (Backend-initiated)
// ============================================

/**
 * @route   GET /auth/google
 * @desc    Redirect to Google OAuth via Supabase
 * @access  Public
 */
router.get('/google', authLimiter, authController.googleAuth);

/**
 * @route   GET /auth/apple
 * @desc    Redirect to Apple OAuth via Supabase
 * @access  Public
 */
router.get('/apple', authLimiter, authController.appleAuth);

/**
 * @route   GET /auth/callback
 * @desc    OAuth callback - handles redirect from Supabase after OAuth
 * @access  Public
 */
router.get('/callback', authController.oauthCallback);

// ============================================
// Token-based Auth (Alternative flow)
// ============================================

/**
 * @route   POST /auth/login
 * @desc    Login with Supabase token (if using client-side OAuth)
 * @access  Public
 */
router.post('/login', authLimiter, validate(loginSchema), authController.login);

/**
 * @route   POST /auth/refresh
 * @desc    Refresh access token using refresh token
 * @access  Public
 */
router.post('/refresh', authLimiter, validate(refreshTokenSchema), authController.refreshToken);

/**
 * @route   POST /auth/logout
 * @desc    Logout user
 * @access  Public
 */
router.post('/logout', authController.logout);

// ============================================
// Protected Routes (Require Auth)
// ============================================

/**
 * @route   GET /auth/me
 * @desc    Get current authenticated user
 * @access  Private
 */
router.get('/me', authenticate, authController.getMe);

/**
 * @route   PATCH /auth/profile
 * @desc    Update user profile
 * @access  Private
 */
router.patch(
  '/profile',
  authenticate,
  validate(updateProfileSchema),
  authController.updateProfile
);

/**
 * @route   DELETE /auth/deactivate
 * @desc    Deactivate user account
 * @access  Private
 */
router.delete('/deactivate', strictLimiter, authenticate, authController.deactivateAccount);

export default router;
