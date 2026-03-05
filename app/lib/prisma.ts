import { PrismaClient } from '../generated/prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';

let prisma: PrismaClient;

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

const adapter = new PrismaNeon({ connectionString: process.env.POSTGRES_PRISMA_URL! });

if(!globalForPrisma.prisma){
    globalForPrisma.prisma = new PrismaClient({ adapter });
}

prisma = globalForPrisma.prisma;

export default prisma;