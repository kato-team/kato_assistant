import { type Express, json, urlencoded } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import { config } from '../config/env';

export const globalMiddleware = (app: Express) => {
  // 1. Security Headers (Helmet)
  // Helps secure your apps by setting various HTTP headers
  app.use(helmet());

  // 2. CORS (Cross-Origin Resource Sharing)
  // For mobile apps, you usually want to allow requests from anywhere 
  // or restrict it to your specific website dashboard if you have one.
  app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? config.SUPABASE_URL : '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  }));

  // 3. Rate Limiting
  // Vital for mobile apps to prevent abuse/DDOS
  const rateLimitWindowMs = 15 * 60 * 1000; // 15 minutes
  const rateLimitMax =
    process.env.RATE_LIMIT_MAX != null
      ? Number(process.env.RATE_LIMIT_MAX)
      : process.env.NODE_ENV === 'production'
        ? 60 // Stricter default in production
        : 100; // More relaxed default in non-production

  const limiter = rateLimit({
    windowMs: rateLimitWindowMs,
    max: rateLimitMax, // Limit each IP per windowMs (configurable via env)
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  });
  app.use(limiter);

  // 4. HTTP Parameter Pollution Protection
  // Prevents attacks that exploit duplicate query parameters
  app.use(hpp());

  // 5. Logging (Morgan)
  // Logs requests to the console (useful for debugging)
  if (process.env.NODE_ENV === 'development') {
  app.use(json({ limit: '1mb' })); // Limit body size to prevent huge payloads
  app.use(urlencoded({ extended: true, limit: '1mb' }));
    // In production, you might want a shorter log format
    app.use(morgan('tiny'));
  }

  // 6. Body Parsing
  // Built-in Express middleware to parse JSON and URL-encoded data
  app.use(json({ limit: '5mb' })); // Limit body size to prevent huge payloads
  app.use(urlencoded({ extended: true, limit: '5mb' }));

};