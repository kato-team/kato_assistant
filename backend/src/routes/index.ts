import { Router } from 'express';
import authRoutes from './auth.routes';

const router = Router();

// Mount route modules
router.use('/auth', authRoutes);

// Add more route modules here as needed:
// router.use('/users', userRoutes);
// router.use('/goals', goalRoutes);

export default router;
