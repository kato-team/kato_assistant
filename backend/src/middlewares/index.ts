import { type Express, json, urlencoded } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import hpp from 'hpp';
import { config } from '../config/env';
import { apiLimiter } from './rateLimiter.middleware';

export const globalMiddleware = (app: Express) => {
  // 1. Security Headers (Helmet)
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          scriptSrc: ["'self'"],
          imgSrc: ["'self'", 'data:', 'https:'],
        },
      },
      crossOriginEmbedderPolicy: false,
    })
  );

  // 2. CORS Configuration
  const corsOrigins =
    config.NODE_ENV === 'production'
      ? config.FRONTEND_URL
        ? [config.FRONTEND_URL, config.SUPABASE_URL]
        : [config.SUPABASE_URL]
      : '*';

  app.use(
    cors({
      origin: corsOrigins,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    })
  );

  // 3. HTTP Parameter Pollution Protection
  app.use(hpp());

  // 4. Request Logging
  if (config.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else {
    app.use(morgan('combined'));
  }

  // 5. Body Parsing
  app.use(json({ limit: '1mb' }));
  app.use(urlencoded({ extended: true, limit: '1mb' }));

  // 6. Global Rate Limiting
  app.use(apiLimiter);
};

// Re-export middleware for individual use
export { authenticate, optionalAuth, type AuthenticatedRequest } from './auth.middleware';
export { apiLimiter, authLimiter, strictLimiter, createRateLimiter } from './rateLimiter.middleware';
export { errorHandler, notFoundHandler, asyncHandler, AppError } from './error.middleware';
export { validate } from './validateRequest';