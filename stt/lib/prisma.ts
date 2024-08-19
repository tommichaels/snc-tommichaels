import { PrismaClient } from "@prisma/client";

// Prisma Client has pooling built it, and it cannot really be "disabled", so this file is an additional measure of you having just one connection to your prisna client as to creating multiple ones

const globalForPrisma = global as unknown as {prisma: PrismaClient}

export const prisma = globalForPrisma.prisma || new PrismaClient({
    log: ['query']
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma