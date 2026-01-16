import express from 'express';
import { config } from './config/env';
import { globalMiddleware, errorHandler, notFoundHandler } from './middlewares';
import routes from './routes';

const app = express();

// Apply global middleware (security, cors, rate limiting, body parsing)
globalMiddleware(app);

// Health check (no auth required)
app.get('/api/v1/health', (_req, res) => {
  res.json({
    success: true,
    message: 'Kato Assistant Backend is running',
    timestamp: new Date().toISOString(),
  });
});

// API routes
app.use('/api/v1', routes);

// 404 handler for unmatched routes
app.use(notFoundHandler);

// Global error handler (must be last)
app.use(errorHandler);

// Start server
app.listen(config.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${config.PORT}`);
  console.log(`📍 Environment: ${config.NODE_ENV}`);
});

export default app;