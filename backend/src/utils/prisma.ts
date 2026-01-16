import { PrismaClient } from '../../generated/prisma';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// Create PostgreSQL connection pool
const connectionString = process.env.DATABASE_URL!;
const pool = new Pool({ connectionString });

// Create Prisma adapter for PostgreSQL
const adapter = new PrismaPg(pool);

// Singleton pattern for Prisma Client
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;