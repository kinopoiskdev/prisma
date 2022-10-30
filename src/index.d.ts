import { PrismaClient } from "./generated/prisma-client";

export function createContext(ctx: any): Promise<Context>;

export * from "./generated/prisma-client/index.d";

export interface Context {
    prisma: PrismaClient;
}