import rateLimit from 'express-rate-limit';
import { config } from '../config/env';

/**
 * Standard API rate limiter
 * Used for general API endpoints
 */
export const apiLimiter = rateLimit({
  windowMs: config.RATE_LIMIT_WINDOW_MS,
  max: config.RATE_LIMIT_MAX,
  message: {
    success: false,
    error: {
      message: 'Too many requests, please try again later.',
      code: 'RATE_LIMIT_EXCEEDED',
      statusCode: 429,
    },
  },
  standardHeaders: true,
  legacyHeaders: false,
  // Use default keyGenerator which handles IPv6 properly
});

/**
 * Auth rate limiter - stricter limits for authentication endpoints
 * Prevents brute force attacks
 */
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 10 requests per window
  message: {
    success: false,
    error: {
      message: 'Too many authentication attempts, please try again later.',
      code: 'AUTH_RATE_LIMIT_EXCEEDED',
      statusCode: 429,
    },
  },
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * Strict rate limiter - very restrictive for sensitive operations
 * Used for password reset, account deletion, etc.
 */
export const strictLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 requests per hour
  message: {
    success: false,
    error: {
      message: 'Too many requests for this operation, please try again later.',
      code: 'STRICT_RATE_LIMIT_EXCEEDED',
      statusCode: 429,
    },
  },
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * Create a custom rate limiter with specific settings
 */
export const createRateLimiter = (options: {
  windowMs: number;
  max: number;
  message?: string;
}) => {
  return rateLimit({
    windowMs: options.windowMs,
    max: options.max,
    message: {
      success: false,
      error: {
        message: options.message || 'Too many requests, please try again later.',
        code: 'RATE_LIMIT_EXCEEDED',
        statusCode: 429,
      },
    },
    standardHeaders: true,
    legacyHeaders: false,
  });
};
