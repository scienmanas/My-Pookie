import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// Global instance of prisma to prevent multiple instances
const globalForPrisma = global as unknown as { prisma: typeof prisma };
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma