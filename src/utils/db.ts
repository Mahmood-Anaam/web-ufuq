// src/utils/db.ts
import { PrismaClient } from "@prisma/client";

// Create a singleton function to initialize PrismaClient
const prismaClientSingleton = (): PrismaClient => {
  return new PrismaClient();
};

// Extend the global object to include the Prisma client for TypeScript
interface GlobalPrisma {
  prismaGlobal?: PrismaClient;
}

const globalForPrisma = global as typeof globalThis & GlobalPrisma;

// Initialize Prisma only once
const prisma = globalForPrisma.prismaGlobal ?? prismaClientSingleton();

// Export the singleton Prisma instance
export default prisma;

// Store the Prisma instance in the global object if not in production
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prismaGlobal = prisma;
}
