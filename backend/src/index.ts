import express from 'express';
import { config } from './config/env';
import { globalMiddleware } from './middlewares';

const app = express();

// Middleware
app.use(express.json());

globalMiddleware(app);

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Kato Assistant Backend is running with Bun!');
});
// Health Check
app.get('/health', (req, res) => res.send('OK'));

// Start Server
app.listen(config.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${config.PORT} with Bun!`);
});